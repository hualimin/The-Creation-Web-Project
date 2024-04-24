using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlWorksManage:Basedb,IWorksManage
    {
        //作品管理
        //我的作品
        public IEnumerable<Production> My_Works(string id)
        {
            var my_works = db.Production.Where(b => b.PublisherNo == id).OrderByDescending(b => b.PublishDate).ToList();
            return my_works;
        }

        //我的信息
        public Users My_infos(string id)
        {
            var my_infos = db.Users.Find(id);
            return my_infos;
        }

        //作品数  考虑通过视图，作品表中还选出该用户发布的所有作品
        public int WorksCount(string id)
        {
            var workscount = db.Production.Where(b => b.PublisherNo == id).Count();
            return workscount;
        }

        //热度  存储过程或对上述视图该用户的所有作品热度值求总和
        public int? TotalHotCount(string id)
        {
            var totalHotCount = db.Production.Where(b => b.PublisherNo == id).Sum(b =>(int?) b.HotCount);
            return totalHotCount;
        }

        //评论数
        public int? TotalCommentCount(string id)
        {
            var totalCommentCount = db.Production.Where(b => b.PublisherNo == id).Sum(b => (int?)b.CommentCount);
            return totalCommentCount;
        }

        //粉丝数
        public int TotalFanount(string id)
        {
            var totalFanount = db.Focus.Where(b => b.FocusedUserId == id).Count();
            return totalFanount;
        }

        //我的粉丝，筛选出，所有关注我的人，通过视图(包含用户id,用户名，爱好)  可不建视图
        public IEnumerable<Focus> MyFans(string id)
        {
            var myFans = db.Focus.Where(b => b.FocusedUserId == id).ToList();
            return myFans;
        }

        //我的关注   我关注的人
        public IEnumerable<Focus> MyFocus(string id)
        {
            var myfocus = db.Focus.Where(b => b.UsersId == id).ToList();
            return myfocus;
        }

        //我的收藏 视图选出所有我收藏的作品
        public IEnumerable<Collect> MyCollect(string id)
        {
            var myCollect = db.Collect.Where(b => b.UsersId == id).ToList();
            return myCollect;
        }
    }
}
