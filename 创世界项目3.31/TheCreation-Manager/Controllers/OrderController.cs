using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL;
using Models;
using System.Collections;
using TheCreation_Manager.Models;

namespace TheCreation_Manager.Controllers
{
    public class OrderController : Controller
    {
        OrderManager orderManager = new OrderManager();
        // GET: Order
        public ActionResult DeleteOrder(string id)
        {

            return View();
        }

        #region   查找订单
        public ActionResult serach_order(string name, string state)
        {
            var serach_order = orderManager.serach_order(name, state);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = serach_order.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = serach_order.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  显示订单详细信息
        public ActionResult order_detail(int id)
        {
            Orders orders = orderManager.get_orders_byid(id);
            return View(orders);
        }
        #endregion

        #region   添加订单
        public ActionResult add_order()
        {
            return View();
        }
        #endregion

        #region   添加订单post方法 
        public ActionResult add_order_p(FormCollection form)
        {
            string uid = form["uid"].ToString();
            string cid = form["cid"].ToString();
            decimal tot = Convert.ToDecimal(form["tot"]);
            string describ = form["describe"].ToString();
            string name = form["name"].ToString();
            DateTime finishdate = Convert.ToDateTime(form["finishdate"].ToString());
            //string result = "用户：" + uid + "创作者： "+cid+" 总："+tot +"描述："+describe + "名称：" + name + "日期：" + finish;

            string result=orderManager.add_order(uid, cid, name, tot, describ, finishdate);
            return Content(result);
        }
        #endregion

        #region 条件搜索订单申诉表
        public ActionResult serach_orderapply(string name, string ordername)
        {
            var serach_orderapply = orderManager.serach_orderapply(name, ordername);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = serach_orderapply.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = serach_orderapply.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  显示申诉订单的详情  orderapply_detail
        public ActionResult orderapply_detail(int id)
        {
            OrderApply orderApply = orderManager.get_orderapply_byoaid(id);
            ViewBag.CreatorID = orderManager.get_creator_byoaid(id).CreatorId;
            return View(orderApply);
        }
        #endregion

        #region  处理订单方法(flag=1，为通过，flag=0为不通过)
        public ActionResult orderapply_deal(int id,int flag)
        {
            if (Session["aid"] == null)
            {
                return Content("请先登录！");
            }
            string aid = Session["aid"].ToString();
            string result = orderManager.deal_orderapply(id,flag, aid);
            return Content(result);
        }
        #endregion


        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}