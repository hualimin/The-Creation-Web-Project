using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL;
using Models;
namespace TheCreation_Manager.Controllers
{
    public class PreApplyController : Controller
    {
        AffairManager affairManager = new AffairManager();
        // GET: PreApply
        public ActionResult Index()
        {
            return View();
        }

        //提交投诉，get方法
        public ActionResult Apply()
        {
            return View();
        }

        //提交投诉，post方法
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Apply(string content)
        {
            Session["userID"] = "10240002";
            string uid = Session["userID"].ToString();
            string result = affairManager.send_apply(uid,content);
            return Content(result);
        }

        //申请创作者，get方法
        public ActionResult AuthnApply()
        {
            return View();
        }

        //申请创作者，post方法
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AuthnApply(string content, string ctype, string max,string min)
        {
            Session["userID"] = "10240002";
            string uid = Session["userID"].ToString();
            string pricerange = min.ToString().Trim() + "-" + max.ToString().Trim();
            string result = affairManager.send_creator_apply(uid,content,ctype,pricerange);
            return Content(result);
        }
    }
}