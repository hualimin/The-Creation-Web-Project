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
   public class MessagesManager
    {
        IMessages messages = DataAccess.Messages();
        //个人消息 私信  我收到的
        public IEnumerable<PersonMsg> Recpt_Msg(string id)
        {
            var recpt_Msg = messages.Recpt_Msg(id);
            return recpt_Msg;
        }
        //系统回复消息  (申诉回复，问题反馈回复相关消息)
        public IEnumerable<SysMsg> SysReply_Msg(string id)
        {
            var sysReply_Msg = messages.SysReply_Msg(id);
            return sysReply_Msg;
        }
        //系统公告消息
        public IEnumerable<PublicMsg> SysPublic_Msg(string id)
        {
            var sysPublic_Msg = messages.SysPublic_Msg(id);
            return sysPublic_Msg;
        }
        //删除私人消息
        public string RemoveMessage(int id)
        {
            var removemessage = messages.RemoveMessage(id);
            return removemessage;
        }
        //删除系统消息
        public string DeleteSysMsg(int id)
        {
            var deletesysmsg = messages.DeleteSysMsg(id);
            return deletesysmsg;
        }
        //回复私人消息
        public string ReplyMessage(string sid, string rid, string content)
        {
            var replymessage = messages.ReplyMessage(sid,rid,content);
            return replymessage;
        }
        //发送私人消息
        public string SendPersonalMessage(string sid, string rid, string content)
        {
            var sendpersonalmessage = messages.SendPersonalMessage(sid, rid, content);
            return sendpersonalmessage;
        }
        //public Orders GetOrderUserid(int id)
        //{
        //    return messages.GetOrderUserid(id);
        //}
    }
}
