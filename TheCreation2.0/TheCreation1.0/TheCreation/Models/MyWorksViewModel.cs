using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation.Models
{
    public class MyWorksViewModel
    {//我的作品
        public IEnumerable<Production> My_Works { get; set; }

        //我的信息
        public Users My_infos { get; set; }

        //作品数  考虑通过视图，作品表中还选出该用户发布的所有作品
        public int WorksCount { get; set; }

        //热度  存储过程或对上述视图该用户的所有作品热度值求总和
        public int? TotalHotCount { get; set; }

        //评论数
        public int? TotalCommentCount { get; set; }

        //粉丝数
        public int TotalFanount { get; set; }

        //我的粉丝，筛选出，所有关注我的人，通过视图(包含用户id,用户名，爱好)  可不建视图
        public IEnumerable<Focus> MyFans { get; set; }

        //我的关注   我关注的人
        public IEnumerable<Focus> MyFocus { get; set; }

        //我的收藏 视图选出所有我收藏的作品
        public IEnumerable<Collect> MyCollect { get; set; }
    }
}