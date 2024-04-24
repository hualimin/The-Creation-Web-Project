using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL;
using Models;

namespace TheCreation.Controllers
{
    public class MessageManagerController : Controller
    {
        MessagesManager MessagesManager = new MessagesManager();
        UserManageManager UserManage = new UserManageManager();
        // GET: MessageManager
        public ActionResult Index()
        {
            return View();
        }
        #region  删除私信表对应记录
        public ActionResult RemoveMessage(int id)
        {
            var msg = MessagesManager.RemoveMessage(id);
            if(msg== "success")
            {
                return Content("<script>alert('删除成功！');history.go(-1);</script>");
            }
            return Content("<script>alert('删除失败！');history.go(-1);</script>");
        }
        #endregion

        #region  删除系统公告表对应记录
        public ActionResult DeleteSysMsg(int id)
        {
            var msg = MessagesManager.DeleteSysMsg(id);
            if (msg == "success")
            {
                return Content("<script>alert('删除成功！');history.go(-1);</script>");
            }
            return Content("<script>alert('删除失败！');history.go(-1);</script>");
        }
        #endregion

        #region  回复个人空间的私信消息 Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ReplyMessage(string sid,string rid, string content)
        {
            var msg = MessagesManager.ReplyMessage(sid, rid, content);
            if (msg == "success")
            {
                return Content("<script>alert('发送成功！');history.go(-1);</script>");
            }
            return Content("<script>alert('发送失败！');history.go(-1);</script>");
        }
        #endregion

        #region  发送私信消息 Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SendPersonalMessage(string rid, string content)
        {
            var sid = Session["userid"].ToString();
            var msg = MessagesManager.SendPersonalMessage(sid, rid, content);
            if (msg == "success")
            {
                return Content("<script>alert('发送成功！');history.go(-1);</script>");
            }
            return Content("<script>alert('发送失败！');history.go(-1);</script>");
        }
        #endregion

        #region  发送投诉消息 Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SendApply(Applys applys)
        {
            var uid = Session["userid"].ToString();
            applys.ApplysState = "待审核";
            applys.ApplysDate = DateTime.Now;
            applys.UsersId = uid;
            var result = UserManage.add_apply(applys);
            if (result == "success")
            {
                return Content("<script>alert('发送成功！');history.go(-1);</script>");
            }
            return Content("<script>alert('"+result+"');history.go(-1);</script>");
        }
        #endregion
    }
}