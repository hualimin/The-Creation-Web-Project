using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IUsers
    {
        //添加用户
        string AddUsers(string id);

        IEnumerable<Users> Get_newes_10_users();


        //删除
        string delete_users(string id);

        //获取所有
        IEnumerable<Users> Get_tot_user();

        //修改
        string alter_user(Users users); 
        //冻结用户
        string freeze_user(string id);

        //解冻用户
        string unfreeze_user(string id);

        //查找
        IEnumerable<Users> serach_users(string name, string sex, string hobby, string state);

        //根据ID返回对应的用户
        Users get_user_byid(string id);

        //根据订单申请表编号找—用户
        Users get_user_byoaid(int id);
    }
}
