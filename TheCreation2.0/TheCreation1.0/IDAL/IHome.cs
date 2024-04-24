using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IHome
    {
        IEnumerable<Production> Hot_Good_Works();                          //人气佳作

        IQueryable<Production> All_Newest_Works();                         //最新作品

        IQueryable<Production> Text_Newest_Works();                        //文字类的最新作品

        IQueryable<Production> Img_Newest_Works();                         //图片类的最新作品

        IQueryable<Production> Music_Newest_Works();                       //音乐类的最新作品

        IQueryable<Production> Video_Newest_Works();                       //视频类的最新作品

        IQueryable<Production> Week_Hot_Works();                           //一周的最热作品

        IEnumerable<Creator> Newest_Creator();                             //最新注册 

        IEnumerable<Creator> Popular_Creator();                            //最受好评

        IEnumerable<most_comment_creator> Most_Comment_Creator();                     //最多评论

        IEnumerable<Production> New_Creator_Works();                       //新人作品

        IEnumerable<Tag_Hot> Tag_Hots();                                   //右侧五个标签

        IQueryable<Production> Today_Greatest_Works();                     //今日最佳

        IEnumerable<tot_hot_users> Popular_Users();                        //风云用户榜 

        IEnumerable<Video_Works_Hot> Video_Works_Hot();                    //视频类型最高推荐

        IEnumerable<Picture_Works_Hot> Picture_Works_Hot();                //图片类型最高推荐

        IEnumerable<Text_Works_Hot> Text_Works_Hot();                      //文字类型最高推荐

        IEnumerable<Music_Works_Hot> Music_Works_Hot();                    //音乐类型最高推荐

        IEnumerable<newest_comment> Newest_Comments();                     //最新评论

        EveryImg every_Day_Shows();                                        //每日一展

        
    }
}
