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
   public class UserManageManager
    {
        IUserManage userManage = DataAccess.UserManage();
        IApplys iapplys = DataAccess.Applys();
        //基本信息
        public Users GetUsers(string id)
        {
            var userinfo = userManage.My_info(id);
            return userinfo;
        }
        //修改密码
        public string Alterpwd(string id, string password1)
        {
            var alterpwd = userManage.Alterpwd(id, password1);
            return alterpwd;
        }
        //修改基本信息
        public string EditUser(string id, Users user)
        {
            string msg = userManage.Editer(id, user);
            return msg;
        }
        //关注
        public string FocusIt(string id,string userid)
        {
            string focus = userManage.FocusIt(id,userid);
            return focus;
        }
        //取消关注
        public string UnFocusIt(int id)
        {
            string unfocus = userManage.UnFocusIt(id);
            return unfocus;
        }

        #region   添加新的创作者申请
        public string add_authen_apply(AuthenApply apply)
        {
            return iapplys.add_authen_apply(apply);
        }
        #endregion

        #region   添加新的用户投诉
        public string add_apply(Applys applys)
        {
            return iapplys.add_apply(applys);
        }
        #endregion
    }
}
