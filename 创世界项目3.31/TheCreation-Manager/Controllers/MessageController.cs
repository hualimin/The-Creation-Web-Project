using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Collections;
using Models;
using BLL;


namespace TheCreation_Manager.Controllers
{
    public class MessageController : Controller
    {
        MessageManager messageManager = new MessageManager();

        #region  Get请求
        // GET: Message   
        public ActionResult add_sys_msg()
        {
            return PartialView();
        }
        #endregion

        #region  Post请求 -发消息
        public ActionResult add_sys_msg_p(string rid,string content)
        {
            string sid = Session["aid"].ToString();
            if (sid == null)
            {
                return Content("暂无操作权限，请先登录！");
            }
            string result = messageManager.send_sys_msg(sid,rid,content);
            return Content(result);
        }
        #endregion



        #region   删除消息  （要判断，七天内的消息不能删除）
        public ActionResult delete_sys_msg(int id)
        {
            string adminid = Session["aid"].ToString();
            if (adminid == null)
            {
                return Content("暂无操作权限，请先登录！");
            }
            string result= messageManager.delete_sys_msg(id, adminid);
            return Content(result);
        }
        #endregion

        #region  条件查找(接收人名称，关键内容，截止日期)
        public ActionResult serach_sys_msg(string rname, string keycontent, DateTime? time)
        {
            var serach_sys_msg = messageManager.serach_sys_msg(rname, keycontent, time);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = serach_sys_msg.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = serach_sys_msg.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  RidIsLegal   测试传来的id合法
        public ActionResult RidIsLegal(string rid)
        {
            string id = "123123";

            if (rid==id)
            {
                return Content("success");
            }

            return Content("该用户不存在");
        }
        #endregion

        #region  批量删除？？  考虑到不全能成功，对于无法删除的项怎么报错

        #endregion

        #region  发布公告
        public ActionResult send_public_msg(string content,DateTime enddate,string pwd)
        {
            string adminid = Session["aid"].ToString();
            if (adminid == null)
            {
                return Content("暂无操作权限，请先登录！");
            }
            string result = messageManager.send_public_msg(content,enddate,pwd,adminid);
            return Content(result);
        }
        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}