using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;
using System.IO;
using System.Web;

namespace SqlDAL
{
    public class SqlProduction : Basedb, IProduction
    {
       #region 分部视图，返回个人主页分部视图
        public IEnumerable<Production> ShowPersonalPageWorks(string id)
        {
            var works = db.Production.Where(b => b.PublisherNo == id).OrderByDescending(b => b.PublishDate).ToList();
            return works;
        }
        #endregion

        #region 个人空间取消收藏
        public string CancelCollect(int id)
        {
            Collect collect = db.Collect.Find(id);
            db.Collect.Remove(collect);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }
        #endregion

        #region 发布作品
        public long ProductionCreate(Production p, string uid)
        {
            //获取封面文件
            HttpPostedFile coverfile = HttpContext.Current.Request.Files["coverfile"];
            string dbsrc = "";
            string SavefilePath = "";
            if (coverfile != null)
            {
                //获取文件类型
                string fileExtension = Path.GetExtension(coverfile.FileName);
                //自定义文件名（时间+唯一标识符+后缀）
                string FileName = DateTime.Now.ToString("yyyy-MM-dd") + Guid.NewGuid() + fileExtension;
                //判断是否存在需要的目录，不存在则创建
                if (!Directory.Exists(HttpContext.Current.Server.MapPath("~/image/CoverImg")))
                {
                    Directory.CreateDirectory(HttpContext.Current.Server.MapPath("~/image/CoverImg"));
                }
                //拼接保存文件的详细路径
                SavefilePath = HttpContext.Current.Server.MapPath("~/image/CoverImg/") + FileName;
                if (fileExtension != null)
                {
                    if ("(.jpg)|(.png)|(.gif)|(.bmp)|(.jpeg)".Contains(fileExtension))
                    {
                        //拼接返回的Img标签
                        dbsrc = "/image/CoverImg/" + FileName;
                        p.ImgUrl = dbsrc;
                    }
                }
                else
                    return 0;
            }
            else
                return 0;
            db.Configuration.ValidateOnSaveEnabled = false;        //对一个或多个实体的验证失败
            db.Production.Add(p);
            if (db.SaveChanges() > 0)
            {
                db.Configuration.ValidateOnSaveEnabled = true;     //对一个或多个实体的验证失败
                coverfile.SaveAs(SavefilePath);
                long id = db.Production.OrderByDescending(o => o.ProductionId).FirstOrDefault().ProductionId;  //数据库逆序排序后获取第一行元素集（是最新插入的一个元素）
                return id;
            }
            else
                return 0;
        }
        #endregion

        #region 创社区部分，展示作品
        public List<P_Type> ProductionShow()
        {
            var productiontype = db.P_Type.ToList();
            return productiontype;
        }
        #endregion

        #region 创社区分页展示作品
        public IEnumerable<Production> GetProductions(string typeName)
        {
            IEnumerable<Production> production = db.Production.OrderByDescending(o => o.HotCount);
            production = production.Where(x => x.ProductionType == typeName);   //从热度高的作品中在根据类型筛选出对应的作品 
            return production;
        }
        #endregion

        #region 先根据热度筛选出热度高的作品并得到production
        public IEnumerable<Production> GetProduction()
        {
            IEnumerable<Production> production = db.Production.OrderByDescending(o => o.HotCount);
            return production;
        }
        #endregion

        #region 作品详情浏览量
        public Production WorksDetails(int? id)
        {
            var pd = db.Production.Find(id);
            pd.ViewCount += 1;
            db.SaveChanges();
            return pd;
        }
        #endregion

        #region 分部视图展示作品评论
        public IEnumerable<Comments> ProductionComment(int id)
        {
            var comment = db.Comments.Where(c => c.ProductionId == id).OrderByDescending(c => c.CommentDate);
            return comment;
        }
        #endregion

        #region 添加评论（使用异步刷新）
        public string AddComment(Comments c)//这里不判断是否登录，在控制器里面判断
        {
            //保存信息
            db.Comments.Add(c);
            //判断是否保存成功
            if (db.SaveChanges() > 0)
            {
                var comm = db.Comments.Where(o => o.ProductionId == c.ProductionId).OrderByDescending(o => o.CommentDate == c.CommentDate).ToList();
                return "success";//返回一个comment类型的字符串
            }
            else
            {
                return "fail";
            }
        }
        #endregion

        #region 查询评论数
        public int Searchcomment(long pid)
        {
            var c = db.Comments.Where(o => o.ProductionId == pid).Count();
            return c;
        }
        #endregion

        #region 回复评论
        public string AddReply(long cid, string rcontent, string uid, DateTime rdate)
        {
            Reply r = new Reply
            {

                CommentId = cid,
                ReplyContent = rcontent,
                UsersId = uid,
                ReplyDate = rdate,
            };
            db.Reply.Add(r);
            if (db.SaveChanges() > 0)
                return "success";
            else
                return "fail";
        }
        #endregion


        #region 收藏 
        public string CollectIt(Collect c)//这里不判断是否登录，在控制器里面判断
        {
            //直接在BLL层对Collot表进行实例化
            db.Collect.Add(c);
            if (db.SaveChanges() > 0)
                return "<script>alert('收藏成功！')</script>";
            else
                return "<script>alert('收藏失败！')</script>";

        }
        #endregion

        #region 取消收藏
        public string CancelCollect(int pid, string uid)
        {
            var collectid = db.Collect.Where(b => b.ProductionId == pid && b.UsersId == uid).FirstOrDefault();
            var id = collectid.CollectId;
            Collect collect = db.Collect.Find(id);
            db.Collect.Remove(collect);
            if (db.SaveChanges() > 0)
            {
                return "<script>alert('取消成功！')</script>";
            }
            else
                return "<script>alert('取消失败！')</script>";
        }
        #endregion

        #region 对是否已经收藏进行判断
        public bool judgeCollect(int pid, string uid)
        {
            bool u = db.Collect.Any(o => o.ProductionId == pid && o.UsersId == uid);
            return u;
        }
        #endregion

        #region 查询收藏数
        public int  Searchcollect(int pid)
        {
            var collect = db.Collect.Where(o => o.ProductionId == pid).Count();
            return collect;
        }
        #endregion

        #region 点赞
        public string LikeIt(int pid, string uid)
        {
            var production = db.Production.Find(pid);
            production.LikeCount += 1;
            likeIt likeIt = new likeIt
            {
                UsersId = uid,
                ProductionId = pid
            };
            db.likeIt.Add(likeIt);
            //对应作品热度的增加放在触发器实现
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "<script>alert('点赞失败！');history.go(-1);</script>";
        }


        #endregion

        #region 取消点赞
        public string CancelLikeIt(int pid, string uid)
        {
            var production = db.Production.Find(pid);
            production.LikeCount = production.LikeCount - 1;
            //根据likeIt主键来进行数据库删除操作，找到主键就找到了点赞的pid和uid
            var likeid = db.likeIt.Where(b => b.ProductionId == pid && b.UsersId == uid).FirstOrDefault();
            var id = likeid.LikeId;
            likeIt like1 = db.likeIt.Find(id);
            db.likeIt.Remove(like1);
            if (db.SaveChanges() > 0)
                return "success";
            else
                return "<script>alert('取消点赞失败！');history.go(-1);</script>";
        }
        #endregion

        #region 对是否已经点赞进行判断
        public bool judgelike(string uid, int pid)
        {
            bool u = db.likeIt.Any(o => o.ProductionId == pid && o.UsersId == uid);
            if (u)
                return true;
            else
                return false;
        }
        #endregion

        #region 查询点赞数
        public int Searchlike(long pid)
        {
            var like = db.likeIt.Where(o => o.ProductionId == pid).Count();
            return Convert.ToInt32(like);
        }
        #endregion

        #region 删除作品
        public string Del_Production(long pid = 39)
        {
            var p = db.Production.Where(o => o.ProductionId == pid).FirstOrDefault();
            db.Production.Remove(p);
            if (db.SaveChanges() > 0)
                return "1";
            else
                return "0";
        }
        #endregion

        public string GetuseridByPID(long pid)
        {
            var p = db.Production.Where(o => o.ProductionId == pid).FirstOrDefault();
            return p.PublisherNo;
        }
    }
}
