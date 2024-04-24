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
   public class HomeManager
    {
        IHome home = DataAccess.Home();


        //人气佳作
        public IEnumerable<Production> Hot_Good_Works()
        {
            IEnumerable<Production> hot_good_works = home.Hot_Good_Works();
            return hot_good_works;
        }
        //最新作品
        public IQueryable<Production> All_Newest_Works()
        {
            IQueryable<Production> all_newest_works = home.All_Newest_Works();
            return all_newest_works;
        }
        //文字类的最新作品
        public IQueryable<Production> Text_Newest_Works()
        {
            IQueryable<Production> text_newest_works = home.Text_Newest_Works();
            return text_newest_works;
        }
        //图片类的最新作品
        public IQueryable<Production> Img_Newest_Works()
        {
            IQueryable<Production> img_newest_works = home.Img_Newest_Works();
            return img_newest_works;
        }
        //音乐类的最新作品
        public IQueryable<Production> Music_Newest_Works()
        {
            IQueryable<Production> music_newest_work = home.Music_Newest_Works();
            return music_newest_work;
        }
        //视频类的最新作品
        public IQueryable<Production> Video_Newest_Works()
        {
            IQueryable<Production> video_newest_works = home.Video_Newest_Works();
            return video_newest_works;
        }
        //一周的最热作品
        public IQueryable<Production> Week_Hot_Works()
        {
            IQueryable<Production> week_hot_works = home.Week_Hot_Works();
            return week_hot_works;
        }
        //最新注册
        public IEnumerable<Creator> Newest_Creator()
        {
            IEnumerable<Creator> newest_creator = home.Newest_Creator();
            return newest_creator;
        }
        //最受好评
        public IEnumerable<Creator> Popular_Creator()
        {
            IEnumerable<Creator> popular_creator = home.Popular_Creator();
            return popular_creator;
        }
        //最多评论
        public IEnumerable<most_comment_creator> Most_Comment_Creator()
        {
            var most_Comment_Creator = home.Most_Comment_Creator();
            return most_Comment_Creator;
        }
        //新人作品
        public IEnumerable<Production> Newest_Creator_Works()
        {
            IEnumerable<Production> new_creator_works = home.New_Creator_Works();
            return new_creator_works;
        }
        //右侧五个标签
        public IEnumerable<Tag_Hot> Tag_Hots()
        {
            IEnumerable<Tag_Hot> tag_hots = home.Tag_Hots();
            return tag_hots;
        }
        //今日最佳
        public IQueryable<Production> Today_Greatest_Works()
        {
            IQueryable<Production> today_greatest_works = home.Today_Greatest_Works();
            return today_greatest_works;
        }
        //风云用户榜 
        public IEnumerable<tot_hot_users> Popular_Users()
        {
            IEnumerable<tot_hot_users> popular_users = home.Popular_Users();
            return popular_users;
        }
        //视频类型最高推荐
        public IEnumerable<Video_Works_Hot> Video_Works_Hot()
        {
            IEnumerable<Video_Works_Hot> video_works_hot = home.Video_Works_Hot();
            return video_works_hot;
        }
        //图片类型最高推荐
        public IEnumerable<Picture_Works_Hot> Picture_Works_Hot()
        {
            IEnumerable<Picture_Works_Hot> picture_work_hot = home.Picture_Works_Hot();
            return picture_work_hot;
        }
        //文字类型最高推荐
        public IEnumerable<Text_Works_Hot> Text_Works_Hot()
        {
            IEnumerable<Text_Works_Hot> text_Works_Hots = home.Text_Works_Hot();
            return text_Works_Hots;
        }
        //音乐类型最高推荐
        public IEnumerable<Music_Works_Hot> Music_Works_Hot()
        {
            IEnumerable<Music_Works_Hot> music_Works_Hots = home.Music_Works_Hot();
            return music_Works_Hots;
        }
        //最新评论
        public IEnumerable<newest_comment> Newest_Comments()
        {
            IEnumerable<newest_comment> newest_Comments = home.Newest_Comments();
            return newest_Comments;
        }


        //每日一展
        public EveryImg every_Day_Shows()
        {
            return home.every_Day_Shows();
        }
    }
}
