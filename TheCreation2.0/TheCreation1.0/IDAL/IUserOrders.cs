using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Models;

namespace IDAL
{
   public interface IUserOrders
    {
        IList<Creator_Type> Market();//创集市，提交需求，并筛选出合适的创作者     
        IList<Creator> SubmitNeed(string typeName, string uid);//提交需求，筛选数据装入分部视图

        //User 下单管理
        IEnumerable<Orders> All_User_Orders(string id); //全部订单
        IEnumerable<Orders> UnAccepted_User_Orders(string id);//未被接受订单
        IEnumerable<UnEvaluate> UnComment_User_Orders(string id); //待评价订单(但未评价)  创建视图进一步筛选
        IEnumerable<Orders> UnFinished_User_Orders(string id);//进行中订单
        string UrgenOrder(int id);//催促订单
        string AlterOrder(int orderid,string need,string finishdate,string name);//修改订单
        string BackOrder(int id);//撤销订单
        string ApplyBackOrder(string uid,int id,string content);//退单申请
        string FinishOrder(int id);//验收订单
        string SubmitEvaluate(string content,int orderid,string uid);//发表评价
        string SendOrder(string need,string finishdate,decimal price,string uid,string creatorid,string name);//下单
        IEnumerable<Creator_Evaluate> ShowCreatorEvaluates(string creatorid);//展示创作者的所有订单评价
        int EvaluatesCount(string creatorid);//展示评价数量
   }
}
