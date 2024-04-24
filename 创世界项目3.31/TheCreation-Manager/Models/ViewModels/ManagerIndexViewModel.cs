using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation_Manager.Models
{
    public class ManagerIndexViewModel
    {
        //首页展示总用户数
        public int tot_user { get; set; }

        //首页展示总创作者数
        public int tot_creator { get; set; }

        //首页展示总作品数
        public int tot_work { get; set; }

        //首页展示总活动数
        public int tot_action { get; set; }

        //首页展示总订单数
        public int tot_order { get; set; }

        //最新注册前十个用户数据
        public IEnumerable<Users> newes_10_users { get; set; }

        //测试数据-小区人数A区
        public int ACount { get; set; }

        //展示最新投诉信息
        public IEnumerable<Applys> newest_10_apply { get; set; }

        //展示最新订单信息
        public IEnumerable<Orders> newest_10_order { get; set; }

        //数据放在图标二里面
        public List<IndexPieChart1> indexp1 { get; set; }
    }
}