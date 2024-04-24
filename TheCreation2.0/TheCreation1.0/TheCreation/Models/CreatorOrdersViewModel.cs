using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheCreation.Models
{
    public class CreatorOrdersViewModel
    {
        //全部订单
        public IEnumerable<Orders> All_Cretor_Orders { get; set; }

        //待接受订单
        public IEnumerable<Orders> UnqAccept_Cretor_Orders { get; set; }

        //已完成订单
        public IEnumerable<Orders> Finished_Cretor_Orders { get; set; }

        //未完成订单
        public IEnumerable<Orders> UnFinished_Cretor_Orders { get; set; }
    }
}