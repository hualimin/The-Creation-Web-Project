using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlAuthenApply : Basedb, IAuthenApply
    {
        #region  获得所有  状态=待审核 的创作者申请
        public IEnumerable<AuthenApply> get_tot_authenapply()
        {
            var authen = db.AuthenApply.Where(b => b.AuthenApplyState == "待审核").ToList();
            return authen;
        }
        #endregion

        #region  条件查找对应申请
        public IEnumerable<AuthenApply> serach_authenapply(string name, string type, int? min, int? max)
        {
            var results = db.AuthenApply.Where(b => b.Users.UsersName.Contains(name) && b.CreateType.Contains(type)).ToList();
            return results;
        }
        #endregion

        #region   确认处理申请   修改状态为 已驳回 或 已通过，若为已通过则同时创建创作者
        public string deal_applycreator(int id, int flag, string adminid)
        {
            AuthenApply authenApply = db.AuthenApply.Find(id);
            if (authenApply == null)
            {
                return "未找到该申请！请检查ID！";
            }
            if (flag==1)  //flag==1,执行通过，创建创作者
            {
                Users users = db.Users.Find(authenApply.UsersId);
                Creator creator = db.Creator.Find(authenApply.UsersId);
                if (users==null)
                {
                    return "申请人不存在！操作失败！";
                }
                if (creator!=null)
                {
                    return "已经是创作者，无法重复申请！";
                }

                Creator creator1 = new Creator();
                creator1.CreatorId = authenApply.UsersId;
                creator1.CertificationDate = DateTime.Now;
                creator1.CreateType = authenApply.CreateType;
                creator1.CreatorCredit = 100;
                creator1.State = "正常";
                creator1.CreatorLevel = 1;
                creator1.FinishedCount = 0;
                creator1.EfctCmpltCnt = 0;
                creator1.PriceRange = authenApply.PriceRange;

                authenApply.AuthenApplyState = "已通过";
                authenApply.DealerId = adminid;

                db.Creator.Add(creator1);
                
                if (db.SaveChanges()>0)
                {
                    return "success";
                }
                else
                {
                    return "添加创作者异常！";
                }
            }
            else if(flag==0)
            {
                authenApply.AuthenApplyState = "已驳回";
                authenApply.DealerId = adminid;
                if (db.SaveChanges() > 0)
                {
                    return "成功驳回！";
                }
                else return "驳回操作-数据库状态修改失败！";
            }
            return "flag值不明，操作失败！";
        }
        #endregion

        #region  删除申请
        public string delete_applycreator(int id)
        {
            AuthenApply authenApply = db.AuthenApply.Find(id);
            if (authenApply == null)
            {
                return "未找到该申请！请检查ID！";
            }
            if (authenApply.AuthenApplyState!= "待审核")
            {
                return "已处理的申请，无法删除！";
            }
            db.AuthenApply.Remove(authenApply);
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "删除失败！";
        }
        #endregion

        #region  发送创作者申请id
        public string send_creator_apply(string uid, string content, string ctype, string pricerange)
        {
            Users users = db.Users.Find(uid);
            if (uid == null)
            {
                return "未识别用户id，无权限提交。";
            }

            AuthenApply authen = new AuthenApply();
            authen.UsersId = uid;
            authen.CreateType = ctype;
            authen.PriceRange = pricerange;
            authen.Describe = content;
            authen.AuthenApplyState = "待审核";
            db.AuthenApply.Add(authen);

            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "发送失败！";
        }
        #endregion

        #region    调用方法 根据申请创作者表的id返回申请人id
        public Users return_user_byAuthenID(int id)
        {
            AuthenApply authen = db.AuthenApply.Find(id);
            Users user = db.Users.Find(authen.UsersId);
            return user;
        }
        #endregion



        #region   根据id返回AuthenApply
        public AuthenApply get_AuthenApply_byID(int id)
        {
            return db.AuthenApply.Find(id);
        }
        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
