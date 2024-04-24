using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
   public interface IMessages
   {
        //消息管理
        IEnumerable<PersonMsg> Recpt_Msg(string id);//个人消息 私信  我收到的   
        IEnumerable<SysMsg> SysReply_Msg(string id);//系统回复消息  (申诉回复，问题反馈回复相关消息)
        IEnumerable<PublicMsg> SysPublic_Msg(string id);//系统公告消息
        string RemoveMessage(int id);//删除私人消息
        string DeleteSysMsg(int id);//删除系统消息
        string ReplyMessage(string sid,string rid, string content);//回复个人空间的私人消息
        string SendPersonalMessage(string sid, string rid, string content);//发送私人消息
   }
}
