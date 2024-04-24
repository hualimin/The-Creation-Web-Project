using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
   public interface IWorksManage
    {
        //作品管理
        IEnumerable<Production> My_Works(string id);//我关注的作品
        Users My_infos(string id); //我的信息
        int WorksCount(string id);//作品数  考虑通过视图，作品表中还选出该用户发布的所有作品
        int? TotalHotCount(string id);//热度  存储过程或对上述视图该用户的所有作品热度值求总和
        int? TotalCommentCount(string id);//评论数
        int TotalFanount(string id); //粉丝数
        IEnumerable<Focus> MyFans(string id);//我的粉丝，筛选出，所有关注我的人，通过视图(包含用户id,用户名，爱好)  可不建视图
        IEnumerable<Focus> MyFocus(string id);//我的关注   我关注的人
        IEnumerable<Collect> MyCollect(string id); //我的收藏 视图选出所有我收藏的作品  
    }
}
