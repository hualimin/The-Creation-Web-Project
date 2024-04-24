using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using TheCreation_Manager.Models;
using BLL;

namespace TheCreation_Manager.Controllers
{
    public class InfoController : Controller
    {
        AdminManager admanager = new AdminManager();
        CreatorManager creatorManager = new CreatorManager();
        OrderManager orderManager = new OrderManager();
        UserManager userManager = new UserManager();
        // GET: Info
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult UserInfo(string id)
        {
            Users users = userManager.get_user_byid(id);
            return PartialView(users);
        }

        public ActionResult CreatorInfo(string id)
        {
            CreatorDetailInfo cd = new CreatorDetailInfo();
            cd.creator = creatorManager.get_creator_byid(id);
            cd.user = userManager.get_user_byid(id);
            return PartialView(cd);
        }

        public ActionResult OrderInfo(int id)
        {
            Orders order = orderManager.get_orders_byid(id);
            return PartialView(order);
        }
    }
}