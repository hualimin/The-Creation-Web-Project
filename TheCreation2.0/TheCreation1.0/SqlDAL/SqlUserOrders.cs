using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;
using System.Windows.Forms;

namespace SqlDAL
{
   public class SqlUserOrders:Basedb,IUserOrders
    {

        #region 创集市，提交需求，并筛选出合适的创作者,返回类型为一个包含该类型创作者的列表
        public IList<Creator_Type> Market()
        {
            return db.Creator_Type.ToList();
        }
        #endregion

        #region 提交需求，筛选数据装入分部视图
        public IList<Creator> SubmitNeed(string typeName, string uid)
        {

            if (typeName == "all")
                return db.Creator.Where(b => b.CreatorId != uid).OrderByDescending(b => b.GoodRate).ToList();
            else
                return db.Creator.Where(b => b.CreateType == typeName).OrderByDescending(b => b.GoodRate).ToList();
        }

        #endregion
        //用户
        //全部订单
        public IEnumerable<Orders> All_User_Orders(string id)
        {
            var alluserOrder = db.Orders.Where(b => b.UsersId == id).OrderByDescending(b => b.BuyDate).ToList();
            return alluserOrder;
        }

        //未被接受
        public IEnumerable<Orders> UnAccepted_User_Orders(string id)
        {
            var unAcceptUserOrder = db.Orders.Where(b => b.UsersId == id && b.OrderState == "待接受").OrderByDescending(b => b.BuyDate).ToList();
            return unAcceptUserOrder;
        }
        //待评价订单  要建立视图
        public IEnumerable<UnEvaluate> UnComment_User_Orders(string id)
        {
            var unevaluateOrder = db.UnEvaluate.Where(b => b.UsersId == id && b.OrderState == "完美交付").OrderByDescending(b => b.FinishDate).ToList();
            return unevaluateOrder;
        }
        //进行中订单订单
        public IEnumerable<Orders> UnFinished_User_Orders(string id)
        {
            var unfinishedUserOrder = db.Orders.Where(b => b.UsersId == id && (b.OrderState == "创作中" || b.OrderState == "待验收")).OrderBy(b => b.FinishDate).ToList();
            return unfinishedUserOrder;
        }
        //催促订单
        public string UrgenOrder(int id)
        {
            Orders order = db.Orders.Find(id);
            SysMsg sysMsg = new SysMsg();
            sysMsg.SenderId = "000000000".ToString();
            sysMsg.ReceptId = order.Creator.Users.UsersId.ToString();
            sysMsg.SysMsgContent = string.Format("尊敬的创作者，您有一份来自{0}的订单，请尽快处理哦。", order.Users.UsersName);
            sysMsg.SendTime = DateTime.Now;
            db.SysMsg.Add(sysMsg);
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        //修改订单
        public string AlterOrder(int orderid,string need,string finishdate,string name)
        {
            //找到对应订单进行修改
            Orders order = db.Orders.Find(orderid);
            order.Name = name;
            order.FinishDate = Convert.ToDateTime(finishdate);
            order.NeedDescrib = need;
            db.Orders.Add(order);
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        //撤销订单
        public string BackOrder(int id)
        {
            Orders order = db.Orders.Find(id);
            db.Orders.Remove(order);
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        //退单申请
        public string ApplyBackOrder(string uid,int id,string content)
        {
            Orders order = db.Orders.Find(id);
            OrderApply orderApply = new OrderApply();
            orderApply.UsersId =uid;
            orderApply.QOrderId = id;
            orderApply.ApplyDescrib = content;
            orderApply.ApplyDate = DateTime.Now;
            orderApply.ApplyState = "待审核".ToString();
            db.OrderApply.Add(orderApply);

            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        //验收订单
        public string FinishOrder(int id)
        {
            Orders order = db.Orders.Find(id);
            order.OrderState = "完美交付".ToString();
            if (order.Users.Credit < 100)
            {
                order.Users.Credit += 1;
            }
            if (order.Creator.CreatorCredit < 100)
            {
                order.Creator.CreatorCredit += 1;
            }
            order.Users.OrderCount += 1;
            order.Users.Exp += 5;
            order.Creator.FinishedCount += 1;

            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        //发表评价
        public string SubmitEvaluate(string content, int orderid, string uid)
        {
            Evaluate evaluate = new Evaluate();
            evaluate.OrderId = orderid;
            evaluate.UsersId = uid;
            evaluate.Content = content;
            evaluate.EvaluateDate = DateTime.Now;
            db.Evaluate.Add(evaluate);
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        //展示创作者的所有订单评价
        public IEnumerable<Creator_Evaluate> ShowCreatorEvaluates(string creatorid)
        {
            var showcreatorevaluates = db.Creator_Evaluate.Where(b => b.CreatorId == creatorid).OrderByDescending(b => b.EvaluateDate).ToList();
            return showcreatorevaluates;
        }
        //展示创作者的所有订单评价数量
        public int EvaluatesCount(string creatorid)
        {
            var evaluatescount = db.Creator_Evaluate.Where(b => b.CreatorId == creatorid).Count();
            return evaluatescount;
        }
        //下单
        public string SendOrder(string need, string finishdate, decimal price, string uid, string creatorid, string name)
        {
            Orders order = new Orders();
            order.UsersId = uid;
            order.Name = name;
            order.CreatorId = creatorid;
            order.total_amt = price;
            order.BuyDate = DateTime.Now;
            order.FinishDate = Convert.ToDateTime(finishdate);
            order.OrderState = "待接受".Trim();
            order.NeedDescrib = need;
            db.Orders.Add(order);
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }
    }
}
