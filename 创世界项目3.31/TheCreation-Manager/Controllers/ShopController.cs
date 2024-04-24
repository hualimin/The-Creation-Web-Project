using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TheCreation_Manager.Controllers
{
    public class ShopController : Controller
    {
        // GET: Shop
        public ActionResult Index()
        {
            return View();
        }

        //商品详情
        public ActionResult ShopDetail()
        {
            return View();
        }

        //立即购买
        public ActionResult Order()
        {
            return View();
        }

        //支付成功
        public ActionResult PaySuccess()
        {
            return View();
        }

        //购物车
        public ActionResult Cart()
        {
            return View();
        }
    }
}