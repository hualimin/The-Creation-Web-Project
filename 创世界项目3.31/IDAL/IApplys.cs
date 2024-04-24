using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IApplys
    {
        //获得全部(未处理)信息
        IEnumerable<Applys> get_tot_applys();

        //查找
        IEnumerable<Applys> serach_apply(string name,string content,DateTime? date);

        //根据ID返回Apply
        Applys get_apply_byid(int id);

        //删除投诉
        string delete_apply(int id);

        //处理投诉  即修改投诉状态为 已审核
        string deal_apply(int id,string adminid);

        //发送消息  便于和投诉人沟通
        string send_msg_touser(string uid, string adminid, string content);

        //获取最新 前十的投诉信息
        IEnumerable<Applys> get_newest_10_apply();

        //发送投诉消息
        string send_apply(string uid,string content);
    }
}
