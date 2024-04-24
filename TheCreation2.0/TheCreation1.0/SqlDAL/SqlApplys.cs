using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
    public class SqlApplys : Basedb, IApplys
    {
        #region   添加新的创作者申请
        public string add_authen_apply(AuthenApply apply)
        {
            var user = db.Users.Find(apply.UsersId);
            if (user==null)
            {
                return "申请用户号不存在！";
            }
            var creator = db.Creator.Find(apply.UsersId);
            if (creator!=null)
            {
                return "已是创作者，请不要重复认证！";
            }
            db.AuthenApply.Add(apply);
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "数据库添加失败！";
        }
        #endregion

        #region   添加新的用户投诉
       public  string add_apply(Applys applys)
        {
            var user = db.Users.Find(applys.UsersId);
            if (user == null)
            {
                return "申请用户号不存在！";
            }
            db.Applys.Add(applys);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "数据库添加失败！";
        }
        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
