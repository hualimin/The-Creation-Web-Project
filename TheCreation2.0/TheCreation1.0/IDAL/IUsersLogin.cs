using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IUsersLogin
    {
        bool CheckUsersLogin(string id, string pwd); //检查用户登录
        UsersLogin AddUsersLogin(string id, string pwd, string phone); //添加登录用户(一般用于注册，同时增加users表)
        bool IdExist(string id);//用于检查是否存在该id，注册时用
        Users AddUsers(string id); //添加用户
        IEnumerable<UsersLogin> GetUser();//找回密码获得用户
        string EditUser(string id, UsersLogin user);//修改用户信息，如密码
        string GetImgUrl(string uid);//获得登录头像
    }
}
