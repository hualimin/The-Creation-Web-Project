using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALFactory;
using Models;
using IDAL;

namespace BLL
{
   public class PersonalPageInfoManager
    {
        IPersonalPageInfo personalPageInfo = DataAccess.PersonalPageInfo();
        //个人主页展示的用户信息
        public Users PersonalPageInfo(string id)
        {
            var personalpageinfo = personalPageInfo.PersonalPageInfo(id);
            return personalpageinfo;
        }

        //关注数
        public int FocusCount(string id)
        {
            var focusCount = personalPageInfo.FocusCount(id);
            return focusCount;
        }

        //粉丝数
        public int TotalFanount(string id)
        {
            var totalFanount = personalPageInfo.TotalFanount(id);
            return totalFanount;
        }

        //作品数  考虑通过视图，作品表中还选出该用户发布的所有作品
        public int WorksCount(string id)
        {
            var workscount = personalPageInfo.WorksCount(id);
            return workscount;
        }
        //订单总数
        public int OrderCount(string id)
        {
            var ordercount = personalPageInfo.OrderCount(id);
            return ordercount;
        }
        //个人主页的创作者相关信息
        public Creator PersonalCreator(string id)
        {
            var personalcreator = personalPageInfo.PersonalCreator(id);
            return personalcreator;
        }

    }
}
