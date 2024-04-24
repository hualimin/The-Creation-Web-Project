using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DALFactory;
using IDAL;

namespace BLL
{
    public class UserManager
    {
        IUsers iusers = DataAccess.CreateUsers();
        IUsersLogin iusersLogin = DataAccess.CreateUsersLogin();
        ICreator icreator = DataAccess.CreateCreator();
        #region 按条件查找返回结果
        public IEnumerable<Users> serach_users(string name, string sex, string hobby, string state)
        {
            return iusers.serach_users(name, sex, hobby, state);
        }
        #endregion

        #region 删除用户（调用存储过程，级联删除）
        public string delete_users(string id)
        {
            return iusers.delete_users(id);
        }
        #endregion

        #region 添加用户 同时添加UsersLogin和Users
        public string add_users(string id,string pwd)
        {
            var iul=iusersLogin.AddUsersLogin(id,pwd);
            var u=iusers.AddUsers(id);
            if (iul!= "userlogin_success") //登录表插入失败，则直接返回
            {
                return iul;
            }
            if (u != "user_success")  //用户表插入失败，则回滚登陆表
            {
                var result=iusersLogin.DeleteUsersLogin(id);
                if (result== "success")
                {
                    return "Users表插入失败，已对UsersLogin操作回滚！添加失败！";
                }
            }
            return "success";
        }
        #endregion

        #region  冻结用户
        public string freeze_user(string id)
        {
            return iusers.freeze_user(id);
        }
        #endregion

        #region  解冻用户
        public string unfreeze_user(string id)
        {
            return iusers.unfreeze_user(id);
        }
        #endregion

        #region  修改用户信息(修改不可修改的部分)
        public string alter_user(Users users)
        {
            return iusers.alter_user(users);
        }
        #endregion

        #region   根据ID返回对应的用户
        public Users get_user_byid(string id)
        {
            return iusers.get_user_byid(id);
        }
        #endregion

        #region

        #endregion

        #region 

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
