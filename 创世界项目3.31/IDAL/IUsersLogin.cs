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
        //添加用户 添加UsersLogin表
        string AddUsersLogin(string id,string pwd);

        ////检查管理员登录
        //bool CheckManagerLogin(string id, string pwd);

        ////添加登录用户(一般用于注册，同时增加users表)
        //UsersLogin AddManagerLogin(string id, string pwd, string phone);

        ////用于检查是否存在该id，注册时用
        //bool IdExist(string id);

        ////修改

        ////添加

        ////查找

        //删除UsersLogin表(一般用于用户添加Users表失败时回滚)
        string DeleteUsersLogin(string id);
    }
}
