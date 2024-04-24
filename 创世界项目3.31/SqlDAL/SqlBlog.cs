using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlBlog : Basedb, IBlog
    {
        #region   发布博客
        public string UpBlog(Blog blog)
        {
            blog.BlogType = blog.BlogType.ToString().Trim();
            db.Blog.Add(blog);
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "发表博客失败！";
        }
        #endregion

        #region  根据不同 的博客 栏目 返回对应博客集合
        public IEnumerable<Blog> get_blog_byType(string typename)
        {
            var blogs = db.Blog.Where(b => b.BlogType == typename).OrderByDescending(b=>b.ViewCount).ToList();
            return blogs;
        }
        #endregion

        #region  模糊查询相关博客
        public IEnumerable<Blog> search_blog(string keywords)
        {
            var blogs = db.Blog.Where(b => b.Title.Contains(keywords) || b.BlogType.Contains(keywords) ||b.Describe.Contains(keywords) || b.BlogContent.Contains(keywords)).OrderByDescending(b => b.PublishDate).ToList();
            return blogs;
        }
        #endregion

        #region  返回对应ID的博客
        public Blog get_blog_ByID(long id)
        {
            return db.Blog.Find(id);
        }
        #endregion

        #region  浏览次数+1
        public void ViewCountAdd1(long id)
        {
            var b = db.Blog.Find(id);
            b.ViewCount += 1;
            db.SaveChanges();
        }
        #endregion
       
        #region   返回热门文章
        public IEnumerable<Blog> return_hotView_blog()
        {
            var result = db.Blog.OrderByDescending(b=>b.ViewCount);
            return result;
        }
        #endregion

        #region  返回热评文章???
        public IEnumerable<Blog> return_hotComment_blog()
        {
            var result = db.Blog.OrderByDescending(b => b.PublishDate);
            return result;
        }
        #endregion

        #region  获得所有博客
        public IEnumerable<Blog> return_all_blog()
        {
            return db.Blog.ToList();
        }
        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion

    }
}
