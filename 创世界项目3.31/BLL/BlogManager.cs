using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DALFactory;
using IDAL;

namespace BLL
{
    public class BlogManager
    {
        IBlog iblog = DataAccess.CreateBlog();
        IBlogComment iblogComment = DataAccess.CreateBlogComment();

        #region  发布博客
        public string UpBlog(Blog blog)
        {
            return iblog.UpBlog(blog);
        }
        #endregion

        #region  根据不同 的博客 栏目 返回对应博客集合
        public IEnumerable<Blog> get_blog_byType(string typename)
        {
            return iblog.get_blog_byType(typename);
        }
        #endregion

        #region  模糊查询相关博客
        public IEnumerable<Blog> search_blog(string keywords)
        {
            return iblog.search_blog(keywords);
        }
        #endregion

        #region  返回对应ID的博客
        public Blog get_blog_ByID(long id)
        {
            return iblog.get_blog_ByID(id);
        }
        #endregion

        #region  浏览次数+1
        public void ViewCountAdd1(long id)
        {
            iblog.ViewCountAdd1(id);
        }
        #endregion

        #region   返回热门文章
        public IEnumerable<Blog> return_hotView_blog()
        {
            return iblog.return_hotView_blog();
        }
        #endregion

        #region  返回热评文章???
        public IEnumerable<Blog> return_hotComment_blog()
        {
            return iblog.return_hotComment_blog();
        }
        #endregion

        #region  获得所有博客
        public IEnumerable<Blog> return_all_blog()
        {
            return iblog.return_all_blog();
        }
        #endregion

        #region   根据博客ID获得对应的评论集合
        public IEnumerable<BlogComment> get_BlogComments_byID(long id)
        {
            return iblogComment.get_BlogComments_byID(id);
        }
        #endregion

        #region  插入一条博客评论
        public string add_BlogComment(BlogComment blogComment)
        {
            return iblogComment.add_BlogComment(blogComment);
        }
        #endregion

        #region  删除博客评论
        public string delete_BlogComment(long id)
        {
            return iblogComment.delete_BlogComment(id);
        }
        #endregion

        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
