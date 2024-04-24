using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
   public class SqlMessages:Basedb,IMessages
    {
        //个人消息 私信  我收到的 
        public IEnumerable<PersonMsg> Recpt_Msg(string id)
        {
            var recpt_Msg = db.PersonMsg.Where(b => b.ReceptID == id).OrderByDescending(b => b.MsgDate).ToList();
            return recpt_Msg;
        }

        //系统回复消息  (申诉回复，问题反馈回复相关消息)
        public IEnumerable<SysMsg> SysReply_Msg(string id)
        {
            var syReply_Msg = db.SysMsg.Where(b => b.ReceptId == id).OrderByDescending(b => b.SendTime).ToList();
            return syReply_Msg;
        }

        //系统公告消息
        public IEnumerable<PublicMsg> SysPublic_Msg(string id)
        {
            var sysPublic_Msg = db.PublicMsg.OrderByDescending(b => b.SendTime).ToList();
            return sysPublic_Msg;
        }

        //删除私人消息
        public string RemoveMessage(int id)
        {
            var personMsg = db.PersonMsg.Find(id);
            db.PersonMsg.Remove(personMsg);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }

        //删除系统消息
        public string DeleteSysMsg(int id)
        {
            var sysMsg = db.SysMsg.Find(id);
            db.SysMsg.Remove(sysMsg);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }

        //回复个人空间的私人消息
       public string ReplyMessage(string sid,string rid, string content)
        {
            PersonMsg msg = new PersonMsg();
            msg.MsgDate = DateTime.Now;
            msg.SebderID = sid.ToString().Trim();
            msg.ReceptID = rid.ToString().Trim();
            msg.MsgContent = content.ToString().Trim();
            db.PersonMsg.Add(msg);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }

        //发送私信消息
       public string SendPersonalMessage(string sid, string rid, string content)
        {
            PersonMsg msg = new PersonMsg();
            msg.MsgDate = DateTime.Now;
            msg.SebderID = sid.ToString().Trim();
            msg.ReceptID = rid.ToString().Trim();
            msg.MsgContent = content.ToString().Trim();
            db.PersonMsg.Add(msg);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "fail";
        }
    }
}
