using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation.Models
{
    public class PersonalPageViewModel
    {
       public Users PersonalPageInfo { get; set; }
        //粉丝数
        public int TotalFanount { get; set; }
        //作品数  考虑通过视图，作品表中还选出该用户发布的所有作品
        public int WorksCount { get; set; }
        //关注数
        public int FocusCount { get; set; }
        //订单数
        public int OrderCount { get; set; }

        public Creator PersonalCreator { get; set; }

        public PersonMsg PersonMsg { get; set; }
    }
}