using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlBlogComment : Basedb, IBlogComment
    {
        #region   根据博客ID获得对应的评论集合（时间降序排序）
        public IEnumerable<BlogComment> get_BlogComments_byID(long id)
        {
            Blog blog = db.Blog.Find(id);
            if (blog==null)
            {
                return null;
            }
            var comments = db.BlogComment.Where(b=>b.BlogID==id).OrderByDescending(b=>b.CommentDate).ToList();
            return comments;
        }
        #endregion

        #region  插入一条博客评论
        public string add_BlogComment(BlogComment blogComment)
        {
            db.BlogComment.Add(blogComment);
            if(db.SaveChanges()>0)
            {
                return "success";
            }
            return "评论插入失败！";
        }
        #endregion

        #region  删除博客评论
        public string delete_BlogComment(long id)
        {
            BlogComment comment = db.BlogComment.Find(id);
            db.BlogComment.Remove(comment);
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "评论删除失败！";
        }
        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
