using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlUsersLogin : Basedb, IUsersLogin
    {
        #region 添加用户
        public string AddUsersLogin(string id,string pwd)
        {
            if (db.UsersLogin.Find(id)!=null)
            {
                return "账号已存在！";
            }
            UsersLogin usersLogin = new UsersLogin();
            usersLogin.UsersId = id;
            usersLogin.Pwd = pwd;
            db.UsersLogin.Add(usersLogin);
            //db.Configuration.ValidateOnSaveEnabled = false;
            int r = db.SaveChanges();
            if (r>0)
            {
                //db.Configuration.ValidateOnSaveEnabled = true;
                return "userlogin_success";
            }
            return "登陆表添加失败!";
        }
        #endregion

        #region 删除UsersLogin表(一般用于用户添加Users表失败时回滚)
        public string DeleteUsersLogin(string id)
        {
            UsersLogin usersLogin = db.UsersLogin.Find(id);
            db.UsersLogin.Remove(usersLogin);

            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "fail";
        }
        #endregion

    }
}
