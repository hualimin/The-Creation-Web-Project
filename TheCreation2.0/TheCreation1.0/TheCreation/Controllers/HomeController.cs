using System;
using System.Linq;
using System.Web.Mvc;
using Models;
using BLL;
using TheCreation.Models;

namespace TheCreation.Controllers
{
    public class HomeController : Controller
    {
        UsersLoginManager loginManager = new UsersLoginManager();
        HomeManager homeManager = new HomeManager();
        SearchManager searchManager = new SearchManager();

        static int code;  //保存验证码

        public ActionResult Index()
        {

            return View();
        }

        #region 登录
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(string code,FormCollection form)
        {
            if (ModelState.IsValid)
            {
                    string id = form["lgid"].ToString();
                    string pwd = form["lgpwd"].ToString();
                    bool IsLegal = loginManager.CheckLogin(id, pwd);
                    if (IsLegal == false)
                    {
                        return Content("<script>alert('请检查自己所写的账号和密码是否正确哦！');window.location.href='/Home/Login'</script>");
                    }
                    else if ((IsLegal == true )&&( Session["ValidateCode"].ToString() != code))
                    {
                        return Content("<script>alert('登录失败，验证码填写错误！');window.location='/Home/Login'</script>");
                    }
                    else if (IsLegal)
                    {
                    string imgurl = loginManager.GetImgUrl(id);
                    Session["headurl"] = imgurl;
                    Session["userid"] = id;
                    return Content("<script>alert('登录成功！');window.location.href='/Home/Home'</script>");
                    }  
            }
            return Content("<script>alert('登录失败！您还不是创世界用户哦！请快点注册吧！');window.location.href='/Home/Login'</script>");
        }
        #endregion

        #region 注册
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(FormCollection form)
        {
            string id = form["id"].ToString();
            string pwd1 = form["pwd1"].ToString();
            string pwd2 = form["pwd2"].ToString();
            string phone = form["phonenumber"].ToString();
            if (pwd1 != pwd2)//改成异步刷新
            {
                return Content("两次密码不一致!");
            }
            Users u = loginManager.Register(id, pwd1, phone);
            if (u != null&&loginManager.IdExist(id)) //不为空则说明注册成功，且返回了Users实例
            {
                Session["userid"] = u.UsersId;
                Session["username"] = u.UsersId;
                Session["headurl"] = u.HeadUrl;
                return Content("<script>alert('注册成功！请登录！');window.location.href='/Home/Login'</script>");
            }
            return Content("<script>alert('注册失败！');window.location.href='/Home/Login'</script>");
        }

        #endregion

        #region   注销 Logout
        public ActionResult Logout()
        {
            Session["userid"] = null;
            //return RedirectToAction("Login");
            return Content("<script>alert('退出成功！');window.location.href='/Home/Login'</script>");

        }
        #endregion

        #region  远程remote
        [HttpGet]
        public JsonResult NotExitesUserName()
        {
            bool flag;
            string userid = Request.Params["userid"];
            flag = loginManager.IdExist(userid);
            return flag == false ? Json(true, JsonRequestBehavior.AllowGet) : Json(false, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region 生成验证码图片方法
        public ActionResult GetValidateCode()
        {
           VaildateCode vCode = new VaildateCode();
            string code = vCode.CreateValidateCode(5);
            Session["ValidateCode"] = code;
            byte[] bytes = vCode.CreateValidateGraphic(code);
            return File(bytes, @"image/jpeg");
        }
        #endregion

        #region 模拟找回密码验证码
        public ActionResult FindPwdSentCode(string phone)
        {
            var user = loginManager.GetUser().Where(o => o.Tel == phone).SingleOrDefault();
            if (user == null)
            {
                return Content("unexist");
            }
            else
            {
                Random r = new Random();
                code = r.Next(100000, 999999);
                return Content(code.ToString());
            }
        }
        #endregion

        #region 找回密码
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult FindPassword(FormCollection forms)  //找回密码
        {
            string phone = forms["phone"];
            string newpassword = forms["password"];
            int inputcode = Convert.ToInt32(forms["code"]);
            if (inputcode == code)
            {
                var user = loginManager.GetUser().Where(o => o.Tel == phone).SingleOrDefault();
                if (user != null)
                {
                    user.Pwd = newpassword;
                    string msg = loginManager.EditUser(user.UsersId, user);
                    if (msg == "success")
                    {
                        return Content("success");
                    }
                    else
                    {
                        return Content("fail");
                    }
                }
                else
                {
                    return Content("unexist");
                }
            }
            else
            {
                return Content("codeerror");
            }
        }
        
        public ActionResult FindPwd()
        {
            return View();
        }
        #endregion

        #region 首页
        public ActionResult Home()
        {
            IndexViewModels indexView = new IndexViewModels();
            indexView.Hot_Good_Works = homeManager.Hot_Good_Works();
            indexView.All_Newest_Works = homeManager.All_Newest_Works();
            indexView.Text_Newest_Works = homeManager.Text_Newest_Works();
            indexView.Img_Newest_Works = homeManager.Img_Newest_Works();
            indexView.Music_Newest_Works = homeManager.Music_Newest_Works();
            indexView.Video_Newest_Works = homeManager.Video_Newest_Works();
            indexView.Week_Hot_Works = homeManager.Week_Hot_Works();
            indexView.Newest_Creator = homeManager.Newest_Creator();
            indexView.Popular_Creator = homeManager.Popular_Creator();
            indexView.Most_Comment_Creator = homeManager.Most_Comment_Creator();
            indexView.Newest_Creator_Works = homeManager.Newest_Creator_Works();
            indexView.Tag_HotCount = homeManager.Tag_Hots();
            indexView.Today_Greatest_Works = homeManager.Today_Greatest_Works();
            indexView.Popular_Users = homeManager.Popular_Users();
            indexView.Video_Works_Hot = homeManager.Video_Works_Hot();
            indexView.Picture_Works_Hot = homeManager.Picture_Works_Hot();
            indexView.Text_Works_Hot = homeManager.Text_Works_Hot();
            indexView.Music_Works_Hot = homeManager.Music_Works_Hot();
            indexView.Newest_Comments = homeManager.Newest_Comments();
            indexView.every_Day_Shows = homeManager.every_Day_Shows();
            return View(indexView);
        }
        #endregion

        #region 搜索
        public ActionResult Search(FormCollection form, string userid)
        {
            if (Session["userid"] == null)
            {
                return Content("<script>alert('请先登录！');history.go(-1);</script>");
            }
            string keywords = form["input"].ToString().Trim();
            SearchResultViewModel result = new SearchResultViewModel();
            result.Result_Users = searchManager.Result_Users(keywords, userid);
            result.Result_Works = searchManager.Result_Works(keywords, userid);
            result.May_Like_Users = searchManager.May_Like_Users(keywords, userid);
            result.May_Like_Works = searchManager.May_Like_Works(keywords, userid);
            result.Result_Count = searchManager.Result_Users(keywords, userid).Count() + searchManager.Result_Works(keywords, userid).Count();
            return View(result);
        }
        #endregion

        #region 帮助建议
        public ActionResult Help()
        {
            return View();
        }
        #endregion

        #region 关于创世界
        public ActionResult TheFascinatingCreation()
        {
            return View();
        }
        #endregion

    }
}