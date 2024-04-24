using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
   public interface IUserManage
    {
        string Alterpwd(string id,string password1);//修改密码
        Users My_info(string id);//基本信息
        string Editer(string id, Users user);//修改基本信息
        string FocusIt(string id,string userid);//关注用户
        string UnFocusIt(int id);//取消关注
    }
}
