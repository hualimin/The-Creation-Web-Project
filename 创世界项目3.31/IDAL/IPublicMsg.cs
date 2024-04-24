using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IPublicMsg
    {
        //获取所有（我发布的）
        IEnumerable<PublicMsg> get_tot_publicmsg(string id);

        //删除
        int DeletePublic(string id);

        //添加
        PublicMsg add_publicMsg(string senderid,string content,DateTime endtime);

        //查找

        //发布公告消息  需要密码验证权限
        string send_public_msg(string content, DateTime enddate, string pwd, string adminid);
    }
}
