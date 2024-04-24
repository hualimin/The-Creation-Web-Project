using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DALFactory;
using Models;
using BLL;
using TheCreation_Manager.Models;
using Newtonsoft.Json;

namespace TheCreation_Manager.Controllers
{
    public class HomeController : Controller
    {
        AdminManager adminManager = new AdminManager();
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string id,string pwd)
        {
            Admin admin = adminManager.AdminLogin(id, pwd);
            if (admin != null)
            {
                Session["aid"] = admin.AdminId;
                Session["aname"] = admin.AdminName;
                // return Content("<script> alert('登录成功！'); window.location.href = '/Admin/Index' </script>");
                return Content("success");
            }
            //return Content("<script>alert('登录失败！');window.location.href='/Home/Login'</script>");
            return Content("fail");
        }

        public ActionResult Index()
        {
            ManagerIndexViewModel mivm = new ManagerIndexViewModel();
            //获取首页主要信息
            mivm.tot_user = adminManager.Get_tot_user().Count();
            mivm.tot_work = adminManager.Get_tot_work().Count();
            mivm.tot_creator = adminManager.Get_tot_creator().Count();
            mivm.tot_action = 4;
            mivm.tot_order = adminManager.Get_tot_order().Count();
            mivm.newes_10_users = adminManager.Get_newes_10_users();
            mivm.newest_10_order = adminManager.get_newest_10_order();
            ViewBag.p1 = GetP1Value();
            ViewBag.p3= GetP3Value();
            return View(mivm);
        }

        private string GetP1Value()
        {
            var result = adminManager.get_index_p1_json();
            return JsonConvert.SerializeObject(result);
        }

        private string GetP3Value()
        {
            var result = adminManager.get_index_p3_json();
            return JsonConvert.SerializeObject(result);
        }

        #region 初始导航页
        public ActionResult MainPage()
        {

            return View();

        }
        #endregion

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}