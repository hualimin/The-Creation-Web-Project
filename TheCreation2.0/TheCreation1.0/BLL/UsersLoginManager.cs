using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALFactory;
using Models;
using IDAL;

namespace BLL
{
   public class UsersLoginManager
    {
        IUsersLogin usersLogin = DataAccess.UsersLogin();
        //登陆时验证账号密码属实
        public bool CheckLogin(string id, string pwd)
        {
            return usersLogin.CheckUsersLogin(id, pwd);
        }

        //注册
        public Users Register(string id, string pwd, string phone)
        {
            UsersLogin ul;
            Users u;
            if (usersLogin.IdExist(id))//账号已存在
            {
                return null;
            }
            ul = usersLogin.AddUsersLogin(id, pwd, phone);
            u = usersLogin.AddUsers(id);
            if (ul != null && u != null)
            {
                return u;
            }
            return null;
        }

        //判断是否账号已存在
        public bool IdExist(string id)
        {
            return usersLogin.IdExist(id);
        }

        //获得用户
        public IEnumerable<UsersLogin> GetUser()
        {
            return usersLogin.GetUser();
        }

        //修改用户信息
        public string EditUser(string id, UsersLogin user)
        {
            string msg = usersLogin.EditUser(id, user);
            return msg;
        }

        #region  获取用户头像
        public string GetImgUrl(string uid)
        {
            return usersLogin.GetImgUrl(uid);
        }
        #endregion
    }
}
