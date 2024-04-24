using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlUserManage:Basedb,IUserManage
    {
        #region 基本信息
        public Users My_info(string id)
        {
            var userinfo = db.Users.Find(id);
            return userinfo;
        }
        #endregion

        #region 修改密码
        public string Alterpwd(string id,string password1)
        {
            var user = db.UsersLogin.Find(id);
            user.Pwd = password1.ToString();
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }
        #endregion

        #region 修改基本信息
        public string Editer(string id, Users user)
        {
            var u = db.Users.Find(id);
            u = user;
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            else
                return "fail";
        }
        #endregion

        #region 关注
        public string FocusIt(string id, string userid)
        {
            if (id == userid)
            {
                return "notme";
            }
            //先判断是否已关注过
            if (db.Focus.Where(b => b.FocusedUserId == id && b.UsersId == userid).FirstOrDefault() != null)
            {
                return "had";
            }

            Focus focus = new Focus();
            focus.UsersId = userid;
            focus.FocusedUserId = id.ToString().Trim();
            db.Focus.Add(focus);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }
        #endregion

        #region 取消关注
        public string UnFocusIt(int id)
        {
            var focus = db.Focus.Find(id);
            db.Focus.Remove(focus);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }
        #endregion
    }
}
