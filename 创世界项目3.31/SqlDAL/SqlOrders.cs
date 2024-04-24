using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlOrders : Basedb,IOrders
    {
        //获取所有
        public IEnumerable<Orders> Get_tot_orders()
        {
            var orders = db.Orders.ToList();
            return orders;
        }

        //删除

        //添加  string add_order(string uid,string cid,decimal tot,string describ);
        #region
        public string add_order(string uid, string cid, string name,decimal tot, string describ,DateTime finishdate)
        {
            Orders orders = new Orders();
            orders.UsersId = uid;
            orders.CreatorId = cid;
            orders.BuyDate = DateTime.Now;
            orders.NeedDescrib = describ;
            orders.Name = name;
            orders.OrderState = "待接受";
            orders.FinishDate = finishdate;
            orders.total_amt = tot;
            db.Orders.Add(orders);
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "添加失败！";
        }
        #endregion

        //修改

        //查找
        public IEnumerable<Orders> serach_order(string name, string state)
        {
            var resluts = db.Orders.Where(b => b.Name.Contains(name) && b.OrderState.Contains(state)).ToList();
            return resluts;
        }

        #region 根据ID返回对应的订单
        public Orders get_orders_byid(int id)
        {
            return db.Orders.Find(id);
            // return db.Orders.Where(b => b.OrderId == id).FirstOrDefault();
            //var a = db.Orders.Where(b => b.OrderId == id).ToList().Take(1);
            //return (Orders)a;
        }
        #endregion

        #region  根据订单申请表编号找—订单ID
        public Orders get_orders_byoaid(int id)
        {
            var oa = db.OrderApply.Find(id);
           // return db.Orders.Find(oa.QOrderId);
           return db.Orders.Where(b => b.OrderId == oa.QOrderId).FirstOrDefault();
        }
        #endregion

        #region  获得最新 前十订单
        public IEnumerable<Orders> get_newest_10_order()
        {
            var result = db.Orders.OrderByDescending(b => b.BuyDate).Take(10).ToList();
            return result;
        }
        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
