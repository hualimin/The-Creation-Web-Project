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
   public class CreatorOrdersManager
    {
        ICreatorOrders creatorOrders = DataAccess.CreatorOrders();
        //创作者
        //全部订单
        public IEnumerable<Orders> All_Cretor_Orders(string id)
        {
            var allCretor = creatorOrders.All_Cretor_Orders(id);
            return allCretor;
        }
        //待接受订单
        public IEnumerable<Orders> UnqAccept_Cretor_Orders(string id)
        {
            var unqAcceptCretor = creatorOrders.UnqAccept_Cretor_Orders(id);
            return unqAcceptCretor;
        }
        //已完成订单
        public IEnumerable<Orders> Finished_Cretor_Orders(string id)
        {
            var finishedCretor = creatorOrders.Finished_Cretor_Orders(id);
            return finishedCretor;
        }
        //未完成订单
        public IEnumerable<Orders> UnFinished_Cretor_Orders(string id)
        {
            var unfinishedCretor = creatorOrders.UnFinished_Cretor_Orders(id);
            return unfinishedCretor;
        }
        //创作者接受订单
        public string Accept(int id)
        {
            var accept = creatorOrders.Accept(id);
            return accept;
        }
        //创作者交付订单，记录实际完成时间，等待用户验收
        public string SubmitOrder(int id)
        {
            var submitorder = creatorOrders.SubmitOrder(id);
            return submitorder;
        }
    }
}
