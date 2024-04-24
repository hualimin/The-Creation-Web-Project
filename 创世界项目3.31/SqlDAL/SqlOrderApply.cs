using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlOrderApply : Basedb, IOrderApply
    {
        //获取所有(未处理的)
        public IEnumerable<OrderApply> get_tot_orderapply()
        {
            var orderapply = db.OrderApply.Where(b=>b.ApplyState== "待审核").ToList();
            return orderapply;
        }

        //查找  按条件查找订单申诉表
        public IEnumerable<OrderApply> serach_orderapply(string name, string ordername)
        {
            var result = db.OrderApply.Where(b => b.Users.UsersName.Contains(name) && b.Orders.Name.Contains(ordername)).ToList();
            return result;
        }

        #region   根据id找对应的订单申请表
        public OrderApply get_orderapply_byid(int id)
        {
            return db.OrderApply.Find(id);
        }
        #endregion

        #region  处理订单申请
        public  string deal_orderapply(int id, int flag, string adminid)
        {
            OrderApply orderApply = db.OrderApply.Find(id);
            Orders orders = db.Orders.Find(orderApply.QOrderId);
            Admin admin = db.Admin.Find(adminid);
            if (admin==null)
            {
                return "请确认管理员身份争取！操作驳回！";
            }
            if (orderApply==null)
            {
                return "找不到该订单申诉记录！";
            }          
            if (flag==0)  //flag==0,驳回退单申请，修改处理人ID，修改退单申请表状态   注意：因为写了触发器，修改退单失败时申请人的信誉度
            {
                orderApply.ApplyState = "已驳回";
                if (db.SaveChanges()>0)
                {
                    return "已成功驳回申请！";
                }
                return "驳回失败，数据库持久化 异常！";
            }
            else if (flag==1)  //flag==1，同意退单，修改订单啊订单状态为-已退单，修改退单数 用户退单数+1，创作者退单数+1，创作者信誉度-1
            {
                if (orders.FinishDate.AddDays(15) < DateTime.Now)   //超过15天，无法申请退单
                {
                    return "超过15天，无法申请退单！";
                }
                //已经有触发器，用户退单成功后，用户退单数+1，创作者信誉度-1，创作者有效退单数+1
                orderApply.ApplyState = "已通过";
                orders.OrderState = "已退单";
                if (db.SaveChanges()>0)
                {
                    return "success";
                }
                return "通过退单过程，数据库操作失败！";
            }
            return "flag值不合法！";
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
