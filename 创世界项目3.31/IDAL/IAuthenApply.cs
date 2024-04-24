using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IAuthenApply
    {
        //获取所有
        IEnumerable<AuthenApply> get_tot_authenapply();

        //查找  
        IEnumerable<AuthenApply> serach_authenapply(string name, string type, int? min, int? max);

        //确认处理申请   修改状态为 已驳回 或 已通过，若为已通过则同时创建创作者
        string deal_applycreator(int id,int flag, string adminid);

        //删除申请
        string delete_applycreator(int id);

        //发送创作者申请id
        string send_creator_apply(string uid,string content,string ctype,string pricerange);

        //调用方法 根据申请创作者表的id返回申请人id
        Users return_user_byAuthenID(int id);

        //根据id返回AuthenApply
        AuthenApply get_AuthenApply_byID(int id);
    }
}
