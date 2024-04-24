using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation.Models
{
    public class UserOrdersViewModel
    {
        //全部订单
        public IEnumerable<Orders> All_User_Orders { get; set; }

        //未被接受订单
        public IEnumerable<Orders> UnAccepted_User_Orders { get; set; }

        //待评价订单(但未评价)  创建视图进一步筛选
        public IEnumerable<UnEvaluate> UnComment_User_Orders { get; set; }

        //进行中订单
        public IEnumerable<Orders> UnFinished_User_Orders { get; set; }
    }
}