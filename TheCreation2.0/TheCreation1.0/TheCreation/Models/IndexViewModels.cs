using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheCreation.Models
{
    public class IndexViewModels
    {
        //人气佳作(作品热度前三)
        public IEnumerable<Production> Hot_Good_Works { get; set; }

        //最新发表(分类，每类按发布时间降序)
        //全部类，全部中按发布时间降序，前五
        public IQueryable<Production> All_Newest_Works { get; set; }

        //文字类，文字中按发布时间降序，前五
        public IQueryable<Production> Text_Newest_Works { get; set; }

        //图片类，图片中按发布时间降序，前五
        public IQueryable<Production> Img_Newest_Works { get; set; }


        //音乐类，音乐中按发布时间降序，前五
        public IQueryable<Production> Music_Newest_Works { get; set; }

        //视频类，视频中按发布时间降序，前五
        public IQueryable<Production> Video_Newest_Works { get; set; }

        //本周重磅过去七天内，热度前五作品
        public IQueryable<Production> Week_Hot_Works { get; set; }

        //创作者推荐
        //最新注册认证  按认证日期降序前四
        public IEnumerable<Creator> Newest_Creator { get; set; }

        //最受欢迎  按热度降序前四
        public IEnumerable<Creator> Popular_Creator { get; set; }

        //最多评论 按所有发布作品的总评论数降序前四
        public IEnumerable<most_comment_creator> Most_Comment_Creator { get; set; }

        //新人作品 5个
        public IEnumerable<Production> Newest_Creator_Works { get; set; }

        //右侧标签和热度
        public IEnumerable<Tag_Hot> Tag_HotCount { get; set; }


        //右侧标签6个 加热度   待创建标签表
        //public IEnumerable<Creator> Most_Comment_Creator { get; set; }

        //今日最佳
        public IQueryable<Production> Today_Greatest_Works { get; set; }

        //风云用户榜  4个  按用户热度来(用户热度降序，再筛选近七天内)  
        public IEnumerable<tot_hot_users> Popular_Users { get; set; }


        //主题强推
        //视频类型最高推荐
        public IEnumerable<Video_Works_Hot> Video_Works_Hot { get; set; }
        //图片类型最高推荐
        public IEnumerable<Picture_Works_Hot> Picture_Works_Hot { get; set; }
        //文字类型最高推荐
        public IEnumerable<Text_Works_Hot> Text_Works_Hot { get; set; }
        //音乐类型最高推荐
        public IEnumerable<Music_Works_Hot> Music_Works_Hot { get; set; }

        //每日一展 1个
        public EveryImg every_Day_Shows { get; set; }
        //最新评论  6个
        public IEnumerable<newest_comment> Newest_Comments { get; set; }
    }
}