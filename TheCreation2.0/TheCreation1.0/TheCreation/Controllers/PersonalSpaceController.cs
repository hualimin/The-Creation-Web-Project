using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Data.Entity.Validation;
using BLL;
using Models;
using TheCreation.Models;



namespace TheCreation.Controllers
{  
    public class PersonalSpaceController : Controller
    {
        UserManageManager UserManageManager = new UserManageManager();
        PersonalCenterManager PersonalCenterManager = new PersonalCenterManager();
        MessagesManager messagesManager = new MessagesManager();
        CreatorOrdersManager CreatorOrdersManager = new CreatorOrdersManager();
        UserOrdersManager UserOrdersManager = new UserOrdersManager();
        CreatorInfoManager CreatorInfoManager = new CreatorInfoManager();
        WorksManageManager WorksManageManager = new WorksManageManager();
        PersonalPageInfoManager PersonalPageInfoManager = new PersonalPageInfoManager();
        // GET: PersonalSpace
        public ActionResult Index()
        {
            return View();
        }

        //基本信息
        public ActionResult Baseinfo()
        {
            string uid = Session["userid"].ToString();
            var userinfo = UserManageManager.GetUsers(uid);
            return View(userinfo);
        }
       
        //修改密码
        #region  修改密码Post
        public ActionResult AlterPwords()
        {
            string uid = Session["userid"].ToString();
            var user = PersonalCenterManager.PersonalCenter(uid);
            return View(user);
        }
        #endregion
        //创作者信息
        public ActionResult AuthorManage()
        {
            string uid = Session["userid"].ToString();
            var creatorinfo = CreatorInfoManager.GetCreator(uid);
            return View(creatorinfo);
        }
        
        //消息管理
        public ActionResult AllMessageManage()
        {
            string userid= Session["userid"].ToString();
            var uid = userid;
            MessageViewModel messageView = new MessageViewModel();
            messageView.Recpt_Msg = messagesManager.Recpt_Msg(uid);
            messageView.SysReply_Msg = messagesManager.SysReply_Msg(uid);
            messageView.SysPublic_Msg = messagesManager.SysPublic_Msg(uid);
            return View(messageView);
        }

        //  User身份 订单（我的下单）
        public ActionResult OrdersManage()
        {
            string userid = Session["userid"].ToString();
            var uid = userid;
            UserOrdersViewModel userOrderView = new UserOrdersViewModel();
            userOrderView.All_User_Orders = UserOrdersManager.All_User_Orders(uid);
            userOrderView.UnAccepted_User_Orders = UserOrdersManager.UnAccepted_User_Orders(uid);
            userOrderView.UnComment_User_Orders = UserOrdersManager.UnComment_User_Orders(uid);
            userOrderView.UnFinished_User_Orders = UserOrdersManager.UnFinished_User_Orders(uid);
            return View(userOrderView);
        }

        //Creator身份 我的接单
        public ActionResult AuthorOrdersManage()
        {
            string userid = Session["userid"].ToString();
            var uid = userid;
            CreatorOrdersViewModel creatorOrderView = new CreatorOrdersViewModel();
            creatorOrderView.All_Cretor_Orders = CreatorOrdersManager.All_Cretor_Orders(uid);
            creatorOrderView.UnqAccept_Cretor_Orders = CreatorOrdersManager.UnqAccept_Cretor_Orders(uid);
            creatorOrderView.Finished_Cretor_Orders = CreatorOrdersManager.Finished_Cretor_Orders(uid);
            creatorOrderView.UnFinished_Cretor_Orders = CreatorOrdersManager.UnFinished_Cretor_Orders(uid);
            return View(creatorOrderView);
        }

        //个人主页
        //个人主页展示的用户信息
        public ActionResult PersonalPage(string id)
        {
            PersonalPageViewModel personalPageView = new PersonalPageViewModel();
            personalPageView.PersonalPageInfo = PersonalPageInfoManager.PersonalPageInfo(id);
            personalPageView.FocusCount = PersonalPageInfoManager.FocusCount(id);
            personalPageView.TotalFanount = PersonalPageInfoManager.TotalFanount(id);
            personalPageView.WorksCount = PersonalPageInfoManager.WorksCount(id);
            personalPageView.PersonalCreator = PersonalPageInfoManager.PersonalCreator(id);
            personalPageView.OrderCount = PersonalPageInfoManager.OrderCount(id);
            return View(personalPageView);
        }

        //作品管理
        public ActionResult WorksManage()
        {
            string userid = Session["userid"].ToString();
            var uid = userid;
            MyWorksViewModel myWorksView = new MyWorksViewModel();
            myWorksView.My_Works = WorksManageManager.My_Works(uid);
            myWorksView.My_infos = WorksManageManager.My_infos(uid);
            myWorksView.WorksCount = WorksManageManager.WorksCount(uid);
            myWorksView.TotalHotCount = WorksManageManager.TotalHotCount(uid);
            myWorksView.TotalCommentCount = WorksManageManager.TotalCommentCount(uid);
            myWorksView.TotalFanount = WorksManageManager.TotalFanount(uid);
            myWorksView.MyFans = WorksManageManager.MyFans(uid);
            myWorksView.MyFocus = WorksManageManager.MyFocus(uid);
            myWorksView.MyCollect = WorksManageManager.MyCollect(uid);
            return View(myWorksView);
        }
    }
}