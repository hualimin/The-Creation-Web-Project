using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlApplys : Basedb, IApplys
    {
        //获得全部(未处理)信息
        public IEnumerable<Applys> get_tot_applys()
        {
            var applys = db.Applys.Where(b => b.ApplysState == "待审核").ToList();
            return applys;
        }

        #region  条件查找未处理申诉
        public IEnumerable<Applys> serach_apply(string name, string content, DateTime? date)
        {
            var results = db.Applys.Where(b=>b.Users.UsersName.Contains(name) && b.ApplysDescrib.Contains(content) &&(b.ApplysDate<date || date==null));  //申诉提交日期在搜索日期前或没搜索日期
            return results;
        }
        #endregion

        #region    根据ID返回Apply
        public Applys get_apply_byid(int id)
        {
            Applys applys = db.Applys.Find(id);
            return applys;
        }
        #endregion

        #region 删除投诉
        public string delete_apply(int id)
        {
            Applys applys = db.Applys.Find(id);
            if (applys==null)
            {
                return "找不到该投诉哦！";
            }
            if (applys.ApplysState== "已审核")
            {
                return "已处理的订单不可删除！";
            }
            db.Applys.Remove(applys);

            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "删除失败！";
        }
        #endregion

        #region  处理投诉  即修改投诉状态为 已审核
        public string deal_apply(int id, string adminid)
        {
            Applys applys = db.Applys.Find(id);
            if (applys == null)
            {
                return "找不到该投诉哦！";
            }
            if (applys.ApplysState == "已审核")
            {
                return "订单已审核，不能重复审核！";
            }
            applys.ApplysState = "已审核";
            applys.DealerId = adminid;
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "处理失败！";
        }
        #endregion

        #region  发送消息  便于和投诉人沟通
        public string send_msg_touser(string uid,string adminid, string content)
        {
            Users users = db.Users.Find(uid);
            SysMsg sysMsg = new SysMsg();
            if (users==null)
            {
                return "找不到收件人！";
            }
            sysMsg.SenderId = adminid;
            sysMsg.ReceptId = uid;
            sysMsg.SendTime = DateTime.Now;
            sysMsg.SysMsgContent = content;
            db.SysMsg.Add(sysMsg);
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "回复失败！";
        }

        #endregion

        #region  获取最新 前十的投诉信息
        public IEnumerable<Applys> get_newest_10_apply()
        {
            var result = db.Applys.OrderByDescending(b => b.ApplysDate).Take(10).ToList();
            return result;
        }
        #endregion

        #region  发送投诉消息
        public string send_apply(string uid, string content)
        {
            Users users = db.Users.Find(uid);
            if (uid==null)
            {
                return "未识别用户id，无权限提交。";
            }
            Applys applys = new Applys();
            applys.UsersId = uid;
            applys.ApplysDate = DateTime.Now;
            applys.ApplysDescrib = content;
            applys.ApplysState = "待审核"; ;
            db.Applys.Add(applys);

            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "添加失败！";
        }
        #endregion

        #region


        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
        #endregion

    }
}
