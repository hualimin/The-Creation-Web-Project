using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL;
using System.Collections;

namespace TheCreation_Manager.Controllers
{
    public class ApplyController : Controller
    {
        AffairManager affairManager = new AffairManager();
        // GET: Apply
        #region  条件查找普通投诉
        public ActionResult serach_apply(string name, string content, DateTime? date)
        {
            var serach_apply = affairManager.serach_apply(name, content, date);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = serach_apply.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = serach_apply.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  删除投诉
        public ActionResult delete_apply(int id)
        {
            string result=affairManager.delete_apply(id);
            return Content(result);
        }
        #endregion

        #region   处理投诉
        public ActionResult deal_apply(int id)  //展示投诉相关信息
        {
            if (Session["aid"] == null)
            {
                return Content("未登录，无权限处理！");
            }
            //根据id获得投诉信息
            //用不了导航属性了？？？？？？？
            var apply = affairManager.get_apply_byid(id);
            return View(apply);
        }
        #endregion

        #region  处理投诉post方法
        public ActionResult deal_apply_p(int id)
        {
            string adminid = Session["aid"].ToString();
            string result = affairManager.deal_apply(id, adminid);
            return Content(result);
        }
        #endregion

        #region  发送消息方法
        public ActionResult send_msg_touser(string uid,  string content)
        {
            if (Session["aid"]==null)
            {
                return Content("请先登录！");
            }
            string adminid = Session["aid"].ToString();
            string result = affairManager.send_msg_touser(uid, adminid, content);
            return Content(result);
        }
        #endregion

        //申请创作者部分
        #region 条件查找创作者申请
        public ActionResult serach_authenapply(string name, string type, int? min, int? max)
        {
            var serach_authenapply = affairManager.serach_authenapply(name, type, min,max);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);

            //真分页 根据page limit来进行分页
            var page_list = serach_authenapply.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = serach_authenapply.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region   处理创作者申请
        public ActionResult deal_applycreator(int id)  //展示投诉相关信息
        {
            if (Session["aid"] == null)
            {
                return Content("<h2>未登录，无权限处理！</h2>");
            }
            AuthenApply authen = affairManager.get_AuthenApply_byID(id);
            return View(authen);
        }
        #endregion

        #region  处理创作者申请  Post方法
        public ActionResult deal_applycreator_p(int id,int flag)
        {
            string adminid = Session["aid"].ToString();
            string result = affairManager.deal_applycreator(id,flag, adminid);
            return Content(result);
        }
        #endregion

        #region  删除创作者申请
        public ActionResult delete_applycreator(int id)
        {
            string result = affairManager.delete_applycreator(id);
            return Content(result);
        }
        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}