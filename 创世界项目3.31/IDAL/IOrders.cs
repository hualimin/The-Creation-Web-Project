using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IOrders
    {
        //获取所有
        IEnumerable<Orders> Get_tot_orders();

        //删除

        //添加
        string add_order(string uid,string cid, string name, decimal tot,string describ, DateTime finishdate);

        //修改

        //条件查找订单
        IEnumerable<Orders> serach_order(string name,string state);

        //根据ID返回对应的订单
        Orders get_orders_byid(int id);

        //根据订单申请表编号找—订单ID
        Orders get_orders_byoaid(int id);

        //获得最新 前十订单
        IEnumerable<Orders> get_newest_10_order();
    }
}
