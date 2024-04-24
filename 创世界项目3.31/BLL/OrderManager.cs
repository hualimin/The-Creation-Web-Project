using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DALFactory;
using IDAL;


namespace BLL
{
    public class OrderManager
    {
        IOrders iorders = DataAccess.CreateOrders();
        IOrderApply iorderapply = DataAccess.CreateOrderApply();
        IUsers iusers = DataAccess.CreateUsers();
        ICreator icreator = DataAccess.CreateCreator();

        #region 获取全部订单
        public IEnumerable<Orders> Get_tot_orders()
        {
            return iorders.Get_tot_orders();
        }
        #endregion

        #region  获取所有(未处理的)订单申请表
        public IEnumerable<OrderApply> get_tot_orderapply()
        {
            return iorderapply.get_tot_orderapply();
        }
        #endregion

        #region  条件查找订单
        public IEnumerable<Orders> serach_order(string name,string state)
        {
            return iorders.serach_order(name,state);
        }
        #endregion

        #region  根据订单号找订单
        public Orders get_orders_byid(int id)
        {
            return iorders.get_orders_byid(id);
        }
        #endregion

        #region  插入订单
        public string add_order(string uid, string cid, string name, decimal tot, string describ, DateTime finishdate)
        {
            return iorders.add_order(uid,cid,name,tot,describ,finishdate);
        }
        #endregion

        #region  条件查找订单申请
        public IEnumerable<OrderApply> serach_orderapply(string name, string ordername)
        {
            return iorderapply.serach_orderapply(name, ordername);
        }
        #endregion

        #region 根据订单申请号 找用户
        public Users get_user_byoaid(int id)
        {
            return iusers.get_user_byoaid(id);
        }
        #endregion

        #region 根据订单申请号 找订单
        public Orders get_orders_byoaid(int id)
        {
            return iorders.get_orders_byoaid(id);
        }
        #endregion

        #region 根据订单申请号 找订单申请表
        public OrderApply get_orderapply_byoaid(int id)
        {
            return iorderapply.get_orderapply_byid(id);
        }
        #endregion

        #region 根据订单申请号 找创作者
        public Creator get_creator_byoaid(int id)
        {
            return icreator.get_creator_byoaid(id);
        }
        #endregion

        #region get_creators_byoaid
        public IEnumerable<Creator> get_creators_byoaid(int id)
        {
            return icreator.get_creators_byoaid(id);
        }
        #endregion

        #region  处理订单申请
        public string deal_orderapply(int id, int flag, string adminid)
        {
            return iorderapply.deal_orderapply(id,flag,adminid);
        }
        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
