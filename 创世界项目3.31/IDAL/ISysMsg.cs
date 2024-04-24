using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface ISysMsg
    {
        //获取所有我发的系统消息
        IEnumerable<SysMsg> get_tot_my_sysmsg(string id);

        //条件查找(接收人名称，关键内容，截止日期)
        IEnumerable<SysMsg> serach_sys_msg(string rname,string keycontent,DateTime? endtime);

        //添加系统消息
        string send_sys_msg(string senderid, string receptid, string content);

        //删除消息  （要判断，七天内的消息不能删除）
        string delete_sys_msg(int id,string adminid);
    }
}
