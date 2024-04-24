using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlPersonalPageInfo:Basedb,IPersonalPageInfo
    {
        //个人主页展示的用户信息
        public Users PersonalPageInfo(string id)
        {
            var personalpageinfo = db.Users.Find(id);
            return personalpageinfo;
        }
        //关注数
        public int FocusCount(string id)
        {
            var focusCount = db.Focus.Where(b => b.UsersId == id).Count();
            return focusCount;
        }

        //粉丝数
        public int TotalFanount(string id)
        {
            var totalFanount = db.Focus.Where(b => b.FocusedUserId == id).Count();
            return totalFanount;
        }

        //总的作品数
        public int WorksCount(string id)
        {
            var workscount = db.Production.Where(b => b.PublisherNo == id).Count();
            return workscount;
        }

        //创作者相关信息
        public Creator PersonalCreator(string id)
        {
            var personalcreator = db.Creator.Find(id);
            return personalcreator;
        }
        //订单总数
        public int OrderCount(string id)
        {
            var ordercount = db.Orders.Where(b => b.CreatorId== id).Count();
            return ordercount;
        }
    }
}
