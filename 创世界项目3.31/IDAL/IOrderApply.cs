using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IOrderApply
    {
        //获取所有(未处理的)
        IEnumerable<OrderApply> get_tot_orderapply();

        //查找  按条件查找订单申诉表
        IEnumerable<OrderApply> serach_orderapply(string name,string ordername);

        //根据id找对应的订单申请表
        OrderApply get_orderapply_byid(int id);

        //处理订单申请
        string deal_orderapply(int id,int flag,string adminid);
    }
}
