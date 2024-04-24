using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL;
using PagedList;

namespace TheCreation.Controllers
{
    public class ProductionController : Controller
    {
        ShowPersonalPageWorksManager showPersonalPageWorksManager = new ShowPersonalPageWorksManager();
        ProductionManager productionManager = new ProductionManager();
        // GET: Production
        public ActionResult Index()
        {
            return View();
        }

        //个人主页展示的作品信息
        public ActionResult ShowPersonalPageWorks(string id)
        {
            var pworks = showPersonalPageWorksManager.ShowPersonalPageWorks(id);
            return View(pworks);
        }
        #region  取消收藏
        public ActionResult CancelCollect1(int id)
        {
            var msg = productionManager.CancelCollect(id);
            if (msg == "success")
            {
                return Content("<script>alert('取消收藏成功!');history.go(-1);</script>");
            }
            return Content("<script>alert('取消收藏失败!');history.go(-1);</script>");
        }
        #endregion


        #region 发布作品 get
        public ActionResult ProductionCreate()
        {
            if (Session["userid"] == null)
                return Content("<script>window.location.href='/UserLogin/Login'</script>");
            return View();
        }
        #endregion

        #region 发布作品 post
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult ProductionCreate(FormCollection form1, Production p)
        {
            string uid = Session["userid"].ToString();
            if (uid == null)
                return Content("<script>window.location.href='/UserLogin/Login'</script>");
            else
            {

                p.PublisherNo = uid;
                p.ProductionName = form1["ProductionName"].ToString().Trim();
                p.PublishDate = DateTime.Now;
                p.ProductionContent = form1["ProductionContent"];
                p.ProductionType = form1["ProductionType"].ToString().Trim();
                p.Tag = form1["Tag"].ToString().Trim();
                p.Describe = form1["Describe"].ToString().Trim();

                //发布成功后 根据数据库唯一标识ProductionId 直接转到该发布的作品的详情页
                long id1 = productionManager.ProductionCreate(p, uid);
                if (id1 != 0)
                    return RedirectToAction("WorkDetails", "Production", new
                    {
                        id = id1
                    });
                else
                    return Content("<script>发布失败</script>");
            }
        }
        #endregion

        #region 创社区，展示作品
        public ActionResult ProductionShow()
        {
            var productionShow = productionManager.ProductionShow();
            return View(productionShow);
        }
        #endregion

        #region 创社区，分页展示作品
        public ActionResult PTypeShow(string typeName, string currentFilter, int? page)
        {

            IEnumerable<Production> production = productionManager.GetProduction();
            if (typeName != null)
            {

                page = 1;
            }
            else
            {

                typeName = currentFilter;
            }
            ViewBag.CurrentFilter = typeName;
            if (!String.IsNullOrEmpty(typeName))
            {
                production = productionManager.GetProductions(typeName);
            }
            int PageSize = 9;
            int pageNumber = (page ?? 1);
            return PartialView(production.ToPagedList(pageNumber, PageSize));

        }
        #endregion

        #region 作品详情
        public ActionResult WorkDetails(int? id)
        {
            var workdetails = productionManager.WorkDetails(id);
            return View(workdetails);
        }
        #endregion

        #region 分部视图展示评论
        public ActionResult ProductionComment(int id)
        {
            var comment = productionManager.ProductionComment(id);
            return PartialView(comment);
        }
        #endregion

        #region 添加评论
        public ActionResult AddComment(int productionid, string comment)
        {

            if (Session["userid"] == null)
            {
                return Content("<script>window.location.href='/Home /Login'</script>");
            }
            else
            {
                string uid = Session["userid"].ToString();
                var addcomment = productionManager.AddComment(productionid, comment, uid);
                return RedirectToAction("ProductionComment", addcomment);
            }

        }
        #endregion

        #region 查询评论数
        public int Searchcomment(FormCollection form)
        {
            int pid = Convert.ToInt32(form["pid"]);
            return productionManager.Searchcomment(pid);
        }
        #endregion

        #region 评论回复
        [HttpPost]
        public ActionResult AddReply(FormCollection form)
        {
            string uid = Session["userid"].ToString();
            long commenntid = Convert.ToInt64(form["cid"]);
            string rcontent = form["rcontent"];
            DateTime rdate = DateTime.Now;
            var addreply = productionManager.AddReply(commenntid, rcontent, uid, rdate);
            if (uid != null)
                if (addreply == "success")
                    return PartialView(addreply);
                else
                    return Content("fail");
            else
                return Content("<script>window.location.href='/Home/Login'</script>");
        }
        #endregion

        #region 收藏 
        public ActionResult CollectIt(int pid, string uid)
        {
            productionManager.collect(pid, uid);
            return Content("<script>alert('收藏成功！');history.go(-1);</script>");

            //实现异步后续
            //if (result == "success") { return Content(Searchcollect(pid).ToString()); }
            //else
            //    return Content(result);
        }
        #endregion

        #region 取消收藏
        public ActionResult CancelCollect(int pid, string uid)
        {
            productionManager.CancelCollect(pid, uid);
            return Content("<script>alert('取消成功！');history.go(-1);</script>");


            //实现异步后续
            //if (result == "success") { return Content(Searchcollect(pid).ToString()); }
            //else
            //    return Content(result);
        }
        #endregion

        #region 判断是否登录，是否已经收藏过
        public ActionResult judgeCollect(int pid)
        {    
            if (Session["userid"].ToString() != null)
            {
                string uid = Session["userid"].ToString().Trim();
                if (productionManager.judgeCollect(pid, uid))
                {
                    return CancelCollect(pid, uid);
                }
                else
                    return CollectIt(pid, uid);
            }
            else
                return Content("<script>window.location.href='/UserLogin/Login'</script>");
        }
        #endregion

        #region 查询收藏数
        public int Searchcollect(int pid)
        {  
            return  productionManager.Searchcollect(pid);
        }
        #endregion

        #region 点赞
        public ActionResult LikeIt(int pid, string uid)
        {
            string result = productionManager.LikeIt(pid, uid);
            if (result == "success") { return Content(Searchlike(pid)); }
            else   
                return Content(result);
       
        }
        #endregion

        #region 取消点赞
        public ActionResult CancelLikeIt(int pid, string uid)
        {
            string result = productionManager.CancelLikeIt(pid, uid);
            if (result == "success") { return Content(Searchlike(pid)); }
            else           
                return Content(result);
          

        }
        #endregion

        #region 判断是否登录，是否已经点过赞
        [HttpGet]
        public ActionResult judgelike(int pid)
        {
            //用户身份登录验证
            if (Session["userid"] == null)
            {
                return Content("<script>window.location.href='/Home/Login'</script>");
            }
            else
            {
                string uid = Session["userid"].ToString().Trim();
                if (productionManager.judgelike(uid, pid))
                {
                    return CancelLikeIt(pid, uid);
                }
                else
                {
                    return LikeIt(pid, uid);
                }
            }

        }
        #endregion

        #region 查询点赞数
        public string Searchlike(long pid)
        {
            return productionManager.Searchlike(pid).ToString();
        }
        #endregion

        #region 删除作品
        [HttpGet]
        public ActionResult Del_Production(long pid)
        {
            ViewBag.userid = Session["userid"].ToString();
            if (GetuseridByPID(pid) != ViewBag.userid)
            {
                return Content("不可以删除别人的作品哦！");
            }
            else
                return Content(productionManager.Del_Production(pid));


        }
        #endregion

        public string GetuseridByPID(long pid)
        {
            var u = productionManager.GetuseridByPID(pid);
            return u;
        }
    }
}