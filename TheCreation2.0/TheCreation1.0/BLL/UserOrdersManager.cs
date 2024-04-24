using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALFactory;
using Models;
using IDAL;
using System.Windows.Forms;

namespace BLL
{
    public class UserOrdersManager
    {
        IUserOrders userOrders = DataAccess.UserOrders();

        #region 创集市，提交需求，并筛选出合适的创作者   
        public IList<Creator_Type> Market()
        {
            return userOrders.Market();
        }
        #endregion

        #region  提交需求，筛选数据装入分部视图
        public IList<Creator> SubmitNeed(string typeName, string uid)
        {
            return userOrders.SubmitNeed(typeName, uid);
        }
        #endregion

        //用户
        //全部订单
        public IEnumerable<Orders> All_User_Orders(string id)
        {
            var alluserOrder = userOrders.All_User_Orders(id);
            return alluserOrder;
        }
        //未被接受
        public IEnumerable<Orders> UnAccepted_User_Orders(string id)
        {
            var unAcceptUserOrder = userOrders.UnAccepted_User_Orders(id);
            return unAcceptUserOrder;
        }
        //待评价订单  要建立视图
        public IEnumerable<UnEvaluate> UnComment_User_Orders(string id)
        {
            var unevaluateOrder = userOrders.UnComment_User_Orders(id);
            return unevaluateOrder;
        }
        //进行中订单订单
        public IEnumerable<Orders> UnFinished_User_Orders(string id)
        {
            var unfinishedUserOrder = userOrders.UnFinished_User_Orders(id);
            return unfinishedUserOrder;
        }
        //催促订单
        public string UrgenOrder(int id)
        {
            var urgernorder = userOrders.UrgenOrder(id);
            return urgernorder;
        }
        //修改订单
       public string AlterOrder(int orderid, string need,string finishdate, string name)
        {
            var alterorder = userOrders.AlterOrder(orderid,need, finishdate,name);
            return alterorder;
        }
        //撤销订单
        public string BackOrder(int id)
        {
            var backorder = userOrders.BackOrder(id);
            return backorder;
        }
        //退单申请
        public string ApplyBackOrder(string uid,int id,string content)
        {
            var applybackorder = userOrders.ApplyBackOrder(uid,id, content);
            return applybackorder;
        }
        //验收订单
        public string FinishOrder(int id)
        {
            var finishorder = userOrders.FinishOrder(id);
            return finishorder;
        }
        //评价订单
        public string SubmitEvaluate(string content, int orderid, string uid)
        {
            var submitevaluate = userOrders.SubmitEvaluate(content, orderid, uid);
            return submitevaluate;
        }
        //展示创作者的所有订单评价
        public IEnumerable<Creator_Evaluate> ShowCreatorEvaluates(string creatorid)
        {
            var showcreatorevaluates = userOrders.ShowCreatorEvaluates(creatorid);
            return showcreatorevaluates;
        }
        //展示创作者的所有订单评价数量
        public int EvaluatesCount(string creatorid)
        {
            var evaluatescount = userOrders.EvaluatesCount(creatorid);
            return evaluatescount;
        }
        //下单
        public string SendOrder(string need, string finishdate, decimal price, string uid, string creatorid, string name)
        {
            var sendorder = userOrders.SendOrder(need, finishdate, price, uid, creatorid, name);
            return sendorder;
        }
    }
}
