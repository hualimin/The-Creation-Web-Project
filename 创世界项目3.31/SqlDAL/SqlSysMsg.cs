using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlSysMsg : Basedb, ISysMsg
    {
        //获取所有我发的系统消息
        public IEnumerable<SysMsg> get_tot_my_sysmsg(string id)
        {
            var sysmsg = db.SysMsg.Where(b => b.SenderId == id).ToList();
            return sysmsg;
        }

        #region  添加系统消息
        public string send_sys_msg(string senderid, string receptid,string content)
        {
            Users users = db.Users.Find(receptid);
            if (users==null)
            {
                return "接收人不存在！发送失败！";
            }
            SysMsg sysMsg = new SysMsg();
            sysMsg.SenderId = senderid;
            sysMsg.ReceptId = receptid;
            sysMsg.SysMsgContent = content;
            sysMsg.SendTime = DateTime.Now;

            db.SysMsg.Add(sysMsg);
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "发送失败！";
        }
        #endregion

        #region  条件查找(接收人名称，关键内容，截止日期)
        public IEnumerable<SysMsg> serach_sys_msg(string rname, string keycontent, DateTime? endtime)
        {
            var result = db.SysMsg.Where(b => b.Users.UsersName.Contains(rname) && b.SysMsgContent.Contains(keycontent) && (endtime == null || b.SendTime < endtime)).ToList();
            return result;
        }
        #endregion

        #region  删除消息  （要判断，七天内的消息不能删除）
        public string delete_sys_msg(int id, string adminid)
        {
            SysMsg sysMsg = db.SysMsg.Find(id);
            if (sysMsg==null)
            {
                return "消息不存在！无法删除！";
            }
            if (sysMsg.SenderId!=adminid)
            {
                return "非发信人，无法删除！";
            }
            if (sysMsg.SendTime.AddDays(7)>DateTime.Now)
            {
                return "七天内的消息不能删除！";
            }
            db.SysMsg.Remove(sysMsg);
            if (db.SaveChanges()>0)
            {
                return "success";
            }

            return "删除失败！";
        }
        #endregion

        #region

        #endregion

    }
}
