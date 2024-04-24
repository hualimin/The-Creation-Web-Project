using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IBlogComment
    {
        //根据博客ID获得对应的评论集合
        IEnumerable<BlogComment> get_BlogComments_byID(long id);

        //插入一条博客评论
        string add_BlogComment(BlogComment blogComment);

        //删除博客评论
        string delete_BlogComment(long id);
    }
}
