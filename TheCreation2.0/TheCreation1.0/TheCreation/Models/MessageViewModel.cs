using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation.Models
{
    public class MessageViewModel
    {
        //个人消息 私信  我收到的
        public IEnumerable<PersonMsg> Recpt_Msg { get; set; }

        //系统回复消息  (申诉回复，问题反馈回复相关消息)
        public IEnumerable<SysMsg> SysReply_Msg { get; set; }

        //系统公告消息
        public IEnumerable<PublicMsg> SysPublic_Msg { get; set; }
    }
}