using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlUsersLogin:Basedb,IUsersLogin
    {
        public bool CheckUsersLogin(string id, string pwd)
        {
            var result = db.UsersLogin.Where(b => b.UsersId == id && b.Pwd == pwd).FirstOrDefault();
            if (result != null)
            {
                return true;
            }
            return false;
        }

        public UsersLogin AddUsersLogin(string id, string pwd, string phone)
        {
            UsersLogin login = new UsersLogin();
            login.UsersId = id;
            login.Pwd = pwd;
            login.Tel = phone;
            db.UsersLogin.Add(login);
            if (db.SaveChanges() > 0)
            {
                return login;
            }

            return null;
        }

        public bool IdExist(string id)
        {
            var result = db.UsersLogin.Where(b => b.UsersId == id).FirstOrDefault();
            if (result != null)
            {
                return true;
            }
            return false;
        }
        #region 添加用户
        public Users AddUsers(string id)
        {
            Users user = new Users();
            user.UsersId = id.ToString().Trim();

            user.UsersName = "未命名";
            user.Credit = 100;
            user.Hobby = "未填写";
            user.State = "正常";
            user.HeadUrl = "/image/index_img/图片一.jpg";
            user.RegisteDate = DateTime.Now;
            db.Users.Add(user);
            db.Configuration.ValidateOnSaveEnabled = false;

            if (db.SaveChanges() > 0)
            {
                db.Configuration.ValidateOnSaveEnabled = true;
                return user;
            }
            return null;
        }
        #endregion

        #region 获取用户
        public IEnumerable<UsersLogin> GetUser()
        {
            var getuser = db.UsersLogin.ToList();
            return getuser;
        }
        #endregion

        #region 修改信息
        public string EditUser(string id, UsersLogin user)
        {
            var u = db.UsersLogin.Find(id);
            u = user;
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            else
                return "fail";
        }
        #endregion

        #region  获取用户头像
        public string GetImgUrl(string uid)
        {
            Users users = db.Users.Find(uid);
            string imgurl = users.HeadUrl;
            return imgurl;
        }
        #endregion
    }
}
