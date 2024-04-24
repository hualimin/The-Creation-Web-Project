using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
   public class SqlHome: Basedb, IHome
    {

        //人气佳作(作品热度前三)
        public IEnumerable<Production> Hot_Good_Works()
        {
            var hot_good_works = db.Production.OrderByDescending(o => o.HotCount).Take(3).ToList();
            return hot_good_works;
        }

        //依据PublishDate来查找最新作品
        public IQueryable<Production> All_Newest_Works()
        {
            var all_newest_works = db.Production.OrderByDescending(o => o.PublishDate).Take(5);
            return all_newest_works;
        }

        //依据ProductionType == "文字"来查找文字类型的最新作品
        public IQueryable<Production> Text_Newest_Works()
        {
            var text_newest_works = db.Production.Where(o => o.ProductionType == "文字").OrderByDescending(o => o.PublishDate).Take(5);
            return text_newest_works;
        }

        //依据ProductionType == "图片"来查找图片类型的最新作品
        public IQueryable<Production> Img_Newest_Works()
        {
            var img_newest_works = db.Production.Where(o => o.ProductionType == "图片").OrderByDescending(o => o.PublishDate).Take(5);
            return img_newest_works;
        }

        //依据ProductionType == "音乐"来查找音乐类型的最新作品
        public IQueryable<Production> Music_Newest_Works()
        {
            var music_newest_works = db.Production.Where(o => o.ProductionType == "音乐").OrderByDescending(o => o.PublishDate).Take(5);
            return music_newest_works;
        }

        //依据ProductionType == "视频"来查找视频类型的最新作品
        public IQueryable<Production> Video_Newest_Works()
        {
            var video_newest_works = db.Production.Where(o => o.ProductionType == "视频").OrderByDescending(o => o.PublishDate).Take(5);
            return video_newest_works;
        }


        //本周重磅
        //依据一周时间来查找最热作品
        public IQueryable<Production> Week_Hot_Works()
        {
            DateTime date = DateTime.Now;
            date = date.AddDays(-7);
            var week_hot_works = db.Production.OrderByDescending(o => o.PublishDate == date).Take(5);
            return week_hot_works;
        }


        //创作者推荐栏
        //创作者推荐  最新注册  认证时间降序前四
        public IEnumerable<Creator> Newest_Creator()
        {
            var newest_creaor = db.Creator.OrderByDescending(o => o.CertificationDate).Take(4).ToList();
            return newest_creaor;
        }
        //创作者推荐  最受好评  好评率降序前4
        public IEnumerable<Creator> Popular_Creator()
        {
            var popular_creator = db.Creator.OrderByDescending(o => o.GoodRate).Take(4).ToList();
            return popular_creator;
        }
        ////创作者推荐   最多评论 按所有发布作品的总评论数降序前四   待修改，有问题
        
        
            //IHome Most_Comment_Creator = db.most_comment_creator().Tolist();
           
        


        //新人作品 5个
        public IEnumerable<Production> New_Creator_Works()
        {
            //先根据注册时间查找最新的创作者，再根据创作者id通过HotCount来降序排序选出前5名
            Creator newestCreator = db.Creator.OrderByDescending(o => o.CertificationDate).Take(5).FirstOrDefault();
            var new_creator_works = db.Production.Where(o => o.PublisherNo == newestCreator.CreatorId).OrderByDescending(o => o.HotCount).Take(5);
            return new_creator_works;
        }

        //右侧五个标签
        public IEnumerable<Tag_Hot> Tag_Hots()
        {
            var tag_hots = db.Tag_Hot.OrderByDescending(o => o.tot_hot).ToList();
            return tag_hots;
        }


        //今日最佳
        public IQueryable<Production> Today_Greatest_Works()
        {
            DateTime today = DateTime.Now;
            today = today.AddDays(-1);
            var Today_Greatest_Works = db.Production.Where(o => o.PublishDate >= today).OrderBy(o => o.HotCount).Take(6);
            return Today_Greatest_Works;
        }

        //风云用户榜  4个  用户所有作品热度和降序前四    考虑写视图
        public IEnumerable<tot_hot_users> Popular_Users()
        {
            var popular_users = db.tot_hot_users.ToList();
            return popular_users;
        }


        //主题强推
        //视频类型最高推荐
        public IEnumerable<Video_Works_Hot> Video_Works_Hot()
        {
            var video_works_hot = db.Video_Works_Hot.OrderByDescending(o => o.HotCount).Take(4).ToList();
            return video_works_hot;
        }
        //图片类型最高推荐
        public IEnumerable<Picture_Works_Hot> Picture_Works_Hot()
        {
            return db.Picture_Works_Hot.OrderByDescending(o => o.HotCount).Take(4).ToList();
        }
        //文字类型最高推荐
        public IEnumerable<Text_Works_Hot> Text_Works_Hot()
        {
            return db.Text_Works_Hot.OrderByDescending(o => o.HotCount).Take(4).ToList();
        }
        //音乐类型最高推荐
        public IEnumerable<Music_Works_Hot> Music_Works_Hot()
        {
            return db.Music_Works_Hot.OrderByDescending(o => o.HotCount).Take(4).ToList();
        }

        //最新评论  6个
        public IEnumerable<newest_comment> Newest_Comments()
        {
            return db.newest_comment.ToList();
        }

        //创作者推荐   最多评论 按所有发布作品的总评论数降序前四
        public IEnumerable<most_comment_creator> Most_Comment_Creator()
        {
            var most_Comment_Creators = db.most_comment_creator.OrderByDescending(o => o.comt_count).ToList().Take(4);
            return most_Comment_Creators;
        }

        //每日一展
        public EveryImg every_Day_Shows()
        {
            EveryImg everyImg = db.EveryImg.OrderByDescending(o => o.UploadDate).Take(1).FirstOrDefault();
            return everyImg;
        }
    }
}
