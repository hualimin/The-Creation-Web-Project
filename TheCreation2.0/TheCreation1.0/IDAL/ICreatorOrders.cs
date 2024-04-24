using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
   public interface ICreatorOrders
   {
        //Creator 订单管理
        IEnumerable<Orders> All_Cretor_Orders(string id);//全部订单
        IEnumerable<Orders> UnqAccept_Cretor_Orders(string id);//待接受订单
        IEnumerable<Orders> Finished_Cretor_Orders(string id);//已完成订单
        IEnumerable<Orders> UnFinished_Cretor_Orders(string id);//未完成订单
        string Accept(int id);//创作者接受订单
        string SubmitOrder(int id);//创作者交付订单，记录实际完成时间，等待用户验收
        string ShowCreatorEvaluates(string creatorid);//展示创作者的评价
    }
}
