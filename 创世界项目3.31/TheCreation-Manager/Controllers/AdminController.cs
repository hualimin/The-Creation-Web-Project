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
    public class AdminController : Controller
    {
        AdminManager admanager = new AdminManager();
        CreatorManager creatorManager = new CreatorManager();
        OrderManager orderManager = new OrderManager();
        MessageManager messageManager = new MessageManager();
        AffairManager affairManager=new AffairManager();
        // GET: Admin

        #region  首页MainPage
        public ActionResult Index()
        {
            return View();
        }

        #endregion 普通用户管理页面
        public ActionResult UserManage()
        {
            return View();
        }

        #region 获得所有用户，生成json数据放入表格
        [HttpGet]
        public JsonResult GetUsersTable()
        {

            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = admanager.Get_tot_user().Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = db.Users.OrderByDescending(b => b.RegisteDate).Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = admanager.Get_tot_user().Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
            //return Json(new { code = 0, count = BackgroundManager.Get_newes_10_users().Count(), data = page_list, msg = "Get Data Success！" }, JsonRequestBehavior.AllowGet);


            // List<string> date =[{ "id":10003,"username":"user-3","sex":"女","city":"城市-3","sign":"签名-3","experience":362,"logins":157,"wealth":37117017,"classify":"诗人","score":68}];
            //return Content(table.ToString());
        }
        #endregion

        #region 创作者管理页面
        public ActionResult CreatorManager()
        {
            return View();
        }
        #endregion

        #region  获得所有创作者，生成json数据放入表格
        [HttpGet]
        public JsonResult GetCreatorTable()
        {
            var creators = creatorManager.Get_tot_creator();
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = creators.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = creators.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  订单管理页面
        public ActionResult OrderManager()
        {
            return View();
        }
        #endregion

        #region 订单管理页面->获得所有创订单，生成json数据放入表格
        [HttpGet]
        public JsonResult GetOrderTable()
        {
            var orders = orderManager.Get_tot_orders();
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = orders.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = orders.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region 订单管理页面->订单申诉页面
        public ActionResult OrderApplyDeal()
        {
            return View();
        }
        #endregion

        #region 订单管理页面->订单申诉,获得所有订单申诉信息，生成json数据放入表格
        [HttpGet]
        public JsonResult GetApplyOrderTable()
        {
            var ordersapply = orderManager.get_tot_orderapply();
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = ordersapply.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = ordersapply.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region 消息管理页面
        public ActionResult MessageManager()
        {
            return View();
        }
        #endregion



        #region 消息管理页面->发布公共消息(即填写表单，发布)
        public ActionResult PublicMsg()
        {
            return View();
        }
        #endregion

        #region 消息管理页面->历史消息(我发出的) 获得所有我发出的消息，生成json数据放入表格
        [HttpGet]
        public ActionResult GetMessageTable()
        {
            string aid;
            if (Session["aid"]==null)
            {
                return Content("请先登录！");          
            }
            aid = Session["aid"].ToString();
            var sendmessage = messageManager.get_tot_my_sysmsg(aid);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = sendmessage.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = sendmessage.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region 发布活动页面
        public ActionResult CreateActivity()
        {
            return View();
        }
        #endregion

        #region 事务管理 (包含用户投诉，申请创作者)
        public ActionResult ApplyManager()
        {
            return View();
        }
        #endregion

        #region 事务管理页面->用户投诉， 获得所有用户投诉信息，生成json数据放入表格
        [HttpGet]
        public ActionResult GetApplyTable()
        {
            
            var applys = affairManager.get_tot_applys();
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = applys.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = applys.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region 事务管理页面->申请创作者页面
    public ActionResult CreatorApplyDeal()
        {
            return View();
        }
        #endregion

        #region 事务管理页面->申请创作者， 获得所有创作者申请，生成json数据放入表格
        [HttpGet]
        public ActionResult GetCreatorApplyTable()
        {

            var authenapply = affairManager.get_tot_authenapply();
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = authenapply.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = authenapply.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region 每日一展——>用于上传前台每日一展部分的图片更新
        public ActionResult OneDayOneShow()
        {
            return View();
        }
        #endregion

        #region  发布活动->发布作品投票， 获得所有作品，生成json数据放入表格
        [HttpGet]
        public ActionResult GetProductionTable()
        {

            var productions = admanager.Get_tot_work();
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = productions.Skip((page - 1) * limit).Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = productions.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
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