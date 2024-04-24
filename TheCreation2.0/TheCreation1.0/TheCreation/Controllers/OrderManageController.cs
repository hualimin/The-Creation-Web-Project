using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Data.Entity.Validation;
using BLL;
using Models;
using TheCreation.Models;

namespace TheCreation.Controllers
{
    public class OrderManageController : Controller
    {
        CreatorOrdersManager CreatorOrdersManager = new CreatorOrdersManager();
        UserOrdersManager UserOrdersManager = new UserOrdersManager();
        UserManageManager UserManageManager = new UserManageManager();

        // GET: OrderManage
        public ActionResult Index()
        {
            return View();
        }

        #region  下单Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SendOrder(FormCollection form2)
        {
            string need = form2["need"].ToString();
            string finishdate = form2["finishdate"].ToString();
            decimal price = Convert.ToDecimal(form2["price"].ToString());
            string uid = Session["userID"].ToString();
            string creatorid = form2["creatorid"].ToString();
            string name = form2["Name"].ToString();

            var msg = UserOrdersManager.SendOrder(need, finishdate, price, uid, creatorid, name);
            if(msg=="success")
            {
                return Content("<script>alert('提交成功！对方接单后将第一时间通知您！');history.go(-1);</script>");
            }
            return Content("<script>alert('提交失败！');history.go(-1);</script>");
        }
        #endregion

        #region  创集市，提交需求，并筛选出合适的创作者
        public ActionResult Market()
        {
            string uid = Session["userid"].ToString();
            if (uid == null)
                return Content("<script>window.location.href='/UserLogin/Login'</script>");
            else
                return View(UserOrdersManager.Market());
        }
        #endregion

        #region  提交需求，筛选数据装入分部视图
        public ActionResult SubmitNeed(string typeName)
        {
            string uid = Session["userid"].ToString();
            if (uid == null)
                return Content("<script>window.location.href='/UserLogin/Login'</script>");
            else
                return PartialView("ResultCreator", UserOrdersManager.SubmitNeed(typeName, uid));
        }
        #endregion

        #region  创作者接受订单
        public ActionResult Accept(int id)
        {
            var msg = CreatorOrdersManager.Accept(id);
            if(msg=="success")
            {
                return Content("<script>alert('接单成功，记得如期交付哦！');window.reload();</script>");
            }
            return Content("<script>alert('接单失败！');window.reload();</script>");
        }
        #endregion

        #region  创作者交付订单，记录实际完成时间，等待用户验收
        public ActionResult SubmitOrder(int id)
        {
            var msg = CreatorOrdersManager.SubmitOrder(id);
            if(msg=="success")
            {
                return Content("<script>alert('交付成功，请耐心等待用户验收哦！');history.go(-1);</script>");
            }
            return Content("<script>alert('交付失败！');history.go(-1);</script>");
        }
        #endregion

        #region  在创作者接收订单前，可以直接修改订单内容,价格不能修改
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AlterOrder(FormCollection form2)
        {
            int orderid = Convert.ToInt32(form2["orderid"].ToString());
            string need = form2["need"].ToString();
            string finishdate = form2["finishdate"].ToString();
            string name = form2["Name"].ToString();

            var msg = UserOrdersManager.AlterOrder(orderid,need,finishdate, name);
            if (msg == "success")
            {
                return Content("<script>alert('修改成功！');history.go(-1);</script>");
            }
            return Content("<script>alert('交付失败！');history.go(-1);</script>");
        }
        #endregion

        #region  在创作者接收订单前，可以催促订单，催促接受订单
        public ActionResult UrgenOrder(int id)
        {
            var msg = UserOrdersManager.UrgenOrder(id);
            if(msg=="success")
            {
                return Content("<script>alert('催促成功！我们已通知创作者尽快查看！');history.go(-1);</script>");
            }
            return Content("<script>alert('催促失败！');history.go(-1);</script>");
        }
        #endregion

        #region  再创作者接收订单前，等不及可以撤销订单，直接删除这条订单记录
        public ActionResult BackOrder(int id)
        {
            var msg = UserOrdersManager.BackOrder(id);
            if (msg=="success")
            {
                return Content("<script>alert('撤单成功！我们已通知创作者尽快查看！');history.go(-1);</script>");
            }
            else
            {
                return Content("<script>alert('撤单失败！');history.go(-1);</script>");
            }

        }
        #endregion

        #region  创作者接受订单后，想要退单需要申请(管理员审核)
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ApplyBackOrder(FormCollection form3)
        {
            int id = Convert.ToInt32(form3["orderid"]);
            string uid = Session["userid"].ToString();
            string content= form3["content"].ToString();
            var msg = UserOrdersManager.ApplyBackOrder(uid,id,content);
            if(msg=="success")
            {
                return Content("<script>alert('申请成功！申请结果将第一时间通知您！');history.go(-1);</script>");

            }
            return Content("<script>alert('申请失败！');history.go(-1);</script>");
        }
        #endregion

        #region  用户查看交付的作品，满意后确认验收
        public ActionResult FinishOrder(int id)
        {
            var msg = UserOrdersManager.FinishOrder(id);
            if(msg=="success")
            {
                return Content("<script>alert('验收成功！快去进行评价吧！');history.go(-1);</script>");
            }
            return Content("<script>alert('验收失败！');history.go(-1);</script>");
        }
        #endregion

        #region  发表订单评价
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SubmitEvaluate(FormCollection form2)
        {
            string content = form2["content"].ToString();
            int orderid = Convert.ToInt32(form2["orderid"]);
            string uid = Session["userid"].ToString();

            var msg = UserOrdersManager.SubmitEvaluate(content,orderid,uid);
            if(msg=="success")
            {
                return Content("<script>alert('评价成功！感谢您的评价。');history.go(-1);</script>");
            }
            return Content("<script>alert('评价失败！');history.go(-1);</script>");
        }
        #endregion

        #region  展示创作者的所有订单评价
        public ActionResult ShowCreatorEvaluates(string creatorid)
        {
            if (creatorid == null)
            {
                return Content("<script>alert('他还不是创作者哦！');history.go(-1);</script>");
            }
            var showcreatorevaluates = UserOrdersManager.ShowCreatorEvaluates(creatorid);
            ViewBag.CreatorName = UserManageManager.GetUsers(creatorid).UsersName;
            ViewBag.Hobby = UserManageManager.GetUsers(creatorid).Hobby;
            ViewBag.HeadUrl = UserManageManager.GetUsers(creatorid).HeadUrl;
            ViewBag.Count = UserOrdersManager.EvaluatesCount(creatorid);
            ViewBag.id = creatorid;
            return View(showcreatorevaluates);
        }
        #endregion
    }
}