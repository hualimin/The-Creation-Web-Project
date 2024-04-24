using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IBlog
    {
        //发布博客
        string UpBlog(Blog blog);

        //根据不同 的博客 栏目 返回对应博客集合
        IEnumerable<Blog> get_blog_byType(string typename);

        //模糊查询相关博客
        IEnumerable<Blog> search_blog(string keywords);

        //返回对应ID的博客
        Blog get_blog_ByID(long id);

        //浏览次数+1
        void ViewCountAdd1(long id);

        //返回热门文章
        IEnumerable<Blog> return_hotView_blog();

        //返回热评文章
        IEnumerable<Blog> return_hotComment_blog();

        //获得所有博客
        IEnumerable<Blog> return_all_blog();

    }
}
