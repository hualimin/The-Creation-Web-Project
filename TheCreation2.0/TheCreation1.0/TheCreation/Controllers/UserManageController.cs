using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL;
using System.IO;

namespace TheCreation.Controllers
{
    public class UserManageController : Controller
    {
        PersonalCenterManager PersonalCenterManager = new PersonalCenterManager();
        UserManageManager UserManageManager = new UserManageManager();
        CreatorInfoManager CreatorInfoManager = new CreatorInfoManager();

        // GET: UserManage
        public ActionResult Index()
        {
            return View();
        }
        # region 个人中心页
        public ActionResult PersonalCenter()
        {
            if (Session["userid"] != null)
            {
                string userid = Session["userid"].ToString();
                var us = PersonalCenterManager.PersonalCenter(userid);
                return View(us);
            }
            else return Content("<script>alert('请先登录！');window.location='../../Home/Login'</script>");
        }
        #endregion

        #region   分部视图展示搜索的相关作品 (包括个人中心作品，搜索结果作品)页面采用固定作品显示格式，可复用性高
        public ActionResult ResultWorksShow()
        {

            return View();

        }
        #endregion

        #region 修改个人信息
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AlterInfo(FormCollection alterform)
        {
            string id = Session["userid"].ToString();
            var user = UserManageManager.GetUsers(id);
            if (user != null)
            {
                user.UsersName = alterform["username"].ToString().Trim();
                user.Sex = alterform["sex"].ToString().Trim();
                user.Birth = Convert.ToDateTime(alterform["date"]);
                string msg = UserManageManager.EditUser(id, user);
                if (msg == "success")
                {
                    return Content("suc");
                }
                else
                {
                    return Content("fail");
                }
            }
            else
            {
                return Content("<script>alert('user为空');history.go(-1);</script>");
            }
        }
        #endregion

        #region 修改个人头像Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateInput(false)]
        public ActionResult AlterHeadImg(FormCollection forms)
        {
            var id = Session["userID"].ToString();
            var user = UserManageManager.GetUsers(id);
            var picName = Path.GetFileName(user.HeadUrl);
            var delphoto = Server.MapPath("~/image/user_photo" + picName);
            //获取用户新头像
            HttpPostedFileBase userPhoto = Request.Files["photo"];
            string dbimg_url = "";
            string savefilePath = "";
            //判断文件是否为空
            if (userPhoto != null && userPhoto.FileName != "")
            {
                //获取文件类型
                string fileExtension = Path.GetExtension(userPhoto.FileName);
                //自定义文件名（时间+唯一标识符+后缀）
                string fileName = DateTime.Now.ToString("yyyy-MM-dd") + Guid.NewGuid() + fileExtension;
                //判断是否存在需要的目录，不存在则创建 
                if (!Directory.Exists(Server.MapPath("~/image/user_photo")))
                {
                    Directory.CreateDirectory(Server.MapPath("/image/user_photo"));
                }
                //拼接保存文件的详细路径
                 savefilePath = Server.MapPath("~/image/user_photo/") + fileName;
                //若扩展名不为空则判断文件是否是指定图片类型
                if (fileExtension != null)
                {
                    if ("(.jpg)|(.png)|(.gif)|(.bmp)|(.jpeg)".Contains(fileExtension))
                    {
                        //拼接返回的Img标签
                        dbimg_url = "/image/user_photo/" + fileName;

                        user.HeadUrl = dbimg_url;
                    }
                    else
                    {
                        return Content("<script>alert('修改失败！');history.go(-1);</script>");
                    }
                }
                else
                {
                    return Content("<script>alert('上传失败！');history.go(-1);</script>");
                }

            }
            else
            {
                return Content("<script>alert('上传头像文件为空！');history.go(-1);</script>");
            }
            string msg = UserManageManager.EditUser(id, user);
            if (msg == "success")
            {
                userPhoto.SaveAs(savefilePath);
                Session["headurl"] = dbimg_url;              
                return Content("<script>alert('修改头像成功！');history.go(-1);</script>");
            }
            else
            {
                return Content("<script>alert('修改头像失败！');history.go(-1);</script>");
            }
        }
        #endregion

        # region 修改密码
        public ActionResult AlterPwd(string password1)
        {
            string id = Session["userid"].ToString();
            var msg = UserManageManager.Alterpwd(id, password1);
            return Content(msg);
        }
        #endregion

        #region  创作者修改收费区间
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AlterPrice(string newprice)
        {
            string id = Session["userid"].ToString();
            var msg = CreatorInfoManager.AlterPrice(id,newprice);
            if (msg=="success")
            {
                return Content("<script>alert('价格修改成功!');history.go(-1);</script>");
            }
            return Content("<script>alert('价格修改失败!');history.go(-1);</script>");
        }
        #endregion

        #region  关注
        public ActionResult FocusIt(string id)
        {
            string userid = Session["userid"].ToString();
            var msg = UserManageManager.FocusIt(id, userid);
            if (msg == "success")
            {
                return Content("<script>alert('关注成功!');history.go(-1);</script>");
            }
            else if (msg == "had")
            { 
                return Content("<script>alert('你已经关注了这个人哦！');history.go(-1);</script>"); 
            }
            return Content("<script>alert('你不能关注自己哦!');history.go(-1);</script>");
        }
        #endregion

        #region  取消关注
        public ActionResult UnFocusIt(int id)
        {
            var msg = UserManageManager.UnFocusIt(id);
            if(msg=="success")
            {
                return Content("<script>alert('取消关注成功!');history.go(-1);</script>");
            }
            return Content("<script>alert('取消关注失败!');history.go(-1);</script>");
        }
        #endregion

        #region 认证创作者Get
        public ActionResult Identify()//string id
        {
            string uid = Session["userid"].ToString();
            if (uid == null)
                return Content("<script>alert('请先登录！');history.go(-1);</script>");
            return View();
        }
        #endregion

        #region   认证创作者Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult ApplyCreator(AuthenApply authenApply)
        {
            string userid = Session["userid"].ToString();
            authenApply.AuthenApplyState = "待审核";
            authenApply.UsersId = userid;
            string result= UserManageManager.add_authen_apply(authenApply);

            if (result=="sucess")
            {
                return Content("<script>alert('申请成功！结果会第一时间通知您！');history.go(-1);</script>");
            }
            return Content("<script>alert('"+result+"');history.go(-1);</script>");
        }
        #endregion


    }
}