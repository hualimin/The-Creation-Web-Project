using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALFactory;
using Models;
using IDAL;

namespace BLL
{
   public class ProductionManager
    {
        IProduction production = DataAccess.Production();
        //分部视图，返回个人主页分部视图
        public IEnumerable<Production> ShowPersonalPageWorks(string id)
        {
            var showpersonalpageworks = production.ShowPersonalPageWorks(id);
            return showpersonalpageworks;
        }
        public string CancelCollect(int id)
        {
            var cancelcollect = production.CancelCollect(id);
            return cancelcollect;
        }

        #region 发布作品
        public long ProductionCreate(Production p, string uid)
        {
            return production.ProductionCreate(p, uid);
        }
        #endregion

        #region 创社区部分，展示作品
        public List<P_Type> ProductionShow()
        {
            var productionShow = production.ProductionShow();
            return productionShow;
        }
        #endregion


        #region 创社区分页展示作品
        public IEnumerable<Production> GetProductions(string typeName)
        {
            var pTypeShow = production.GetProductions(typeName);
            return pTypeShow;
        }
        #endregion

        #region 先根据热度筛选出热度高的作品并得到production
        public IEnumerable<Production> GetProduction()
        {
            return production.GetProduction();
        }
        #endregion

        #region 作品详情浏览量
        public Production WorkDetails(int? id)
        {
            var workDetails = production.WorksDetails(id);
            return workDetails;
        }
        #endregion

        #region 分部视图展示作品评论
        public IEnumerable<Comments> ProductionComment(int id)
        {
            var productionComment = production.ProductionComment(id);
            return productionComment;
        }
        #endregion

        #region 添加评论（使用异步刷新）
        public string AddComment(int productionid, string comment, string uid)
        {
            //实例化comments表
            Comments c = new Comments
            {
                CommenterId = uid,
                ProductionId = productionid,
                CommentContent = comment,
                CommentDate = DateTime.Now
            };
            return production.AddComment(c);
        }
        #endregion

        #region 查询评论数
        public int Searchcomment(long pid)
        {
            return production.Searchcomment(pid);
        }
        #endregion

        #region 评论回复
        public string AddReply(long cid, string rcontent, string uid, DateTime rdate)
        {
            return production.AddReply(cid, rcontent, uid, rdate);
        }
        #endregion

        #region 收藏 
        public string collect(int pid, string uid)
        {
            Collect collect = new Collect
            {
                UsersId = uid,
                ProductionId = pid
            };
            return production.CollectIt(collect);
        }
        #endregion

        #region 取消收藏
        public string CancelCollect(int pid, string uid)
        {
            return production.CancelCollect(pid, uid);
        }
        #endregion

        #region 对是否已经收藏进行判断
        public bool judgeCollect(int pid, string uid)
        {
            return production.judgeCollect(pid, uid);
        }
        #endregion

        #region 查询收藏数
        public int Searchcollect(int pid)
        {
            return production.Searchcollect(pid);
        }
        #endregion

        #region 点赞
        public string LikeIt(int pid, string uid)
        {
            return production.LikeIt(pid, uid);
        }
        #endregion

        #region  取消点赞
        public string CancelLikeIt(int pid, string uid)
        {
            return production.CancelLikeIt(pid, uid);
        }
        #endregion

        #region 对是否已经点赞进行判断

        public bool judgelike(string uid, int pid)
        {
            return production.judgelike(uid, pid);
        }
        #endregion

        #region 查询点赞数
        public int Searchlike(long pid)
        {
            return production.Searchlike(pid);
        }
        #endregion

        #region 删除作品
        public string Del_Production(long pid)
        {
            return production.Del_Production(pid);
        }
        #endregion

        public string GetuseridByPID(long pid)
        {
            return production.GetuseridByPID(pid);
        }



    }
}
