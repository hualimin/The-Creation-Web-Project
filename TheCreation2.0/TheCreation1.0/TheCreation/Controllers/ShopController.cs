using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TheCreation.Controllers
{
    public class ShopController : Controller
    {
        // GET: Shop
        public ActionResult Index()
        {
            return View();
        }

        #region 商城的个人中心
        public ActionResult Mygxin()
        {
            return View();
        }
        #endregion

        #region 我的订单
        public ActionResult Myorderq()
        {
            return View();
        }
        #endregion

        #region 评价订单
        public ActionResult Myprod()
        {
            return View();
        }
        #endregion

        #region 收货地址
        public ActionResult Address()
        {
            return View();
        }
        #endregion

        #region 个人信息
        public ActionResult Mygrxx()
        {
            return View();
        }
        #endregion

        #region 订单详情
        public ActionResult Orderxq()
        {
            return View();
        }
        #endregion

        #region 查看物流
        public ActionResult Wuliu()
        {
            return View();
        }
        #endregion
    }
}