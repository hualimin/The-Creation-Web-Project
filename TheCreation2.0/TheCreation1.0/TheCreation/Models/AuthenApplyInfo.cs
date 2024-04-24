using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation.Models
{
    public class AuthenApplyInfo
    {
        //累计发布文章数
        public int Tot_Productions { get; set; }

        //注册天数
        public int RegisterDays { get; set; }

        //关联粉丝
        public int MyFansCount { get; set; }

        //累计点赞数
        public int Tot_LikeCount { get; set; }

        //总评论数
        public int CommentCount { get; set; }
    }
}