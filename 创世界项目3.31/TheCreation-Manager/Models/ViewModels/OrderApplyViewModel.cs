using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;


namespace TheCreation_Manager.Models
{
    public class OrderApplyViewModel
    {
        //投诉人信息
        public Users users { get; set; }

        //创作人信息
        //public IEnumerable<Creator> creator { get; set; }
        public Creator creator { get; set; }

        //对应订单信息
        public Orders  orders { get; set; }

        //申请订单信息
        public OrderApply  orderApply { get; set; }
    }
}