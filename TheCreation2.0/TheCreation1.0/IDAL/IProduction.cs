using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IProduction
    {
        IEnumerable<Production> ShowPersonalPageWorks(string id);//分部视图，返回个人主页分部视图
        string CancelCollect(int id);//个人空间取消收藏

        //发布作品
        long ProductionCreate(Production p, string uid);

        //创社区作品展示
        List<P_Type> ProductionShow();

        //创社区分页展示
        IEnumerable<Production> GetProductions(string typeName);

        //得到production
        IEnumerable<Production> GetProduction();

        //作品详情
        Production WorksDetails(int? id);

        //分部视图展示评论
        IEnumerable<Comments> ProductionComment(int id);

        //添加评论
        string AddComment(Comments c);

        //评论回复
        string AddReply(long cid, string rcontent, string uid, DateTime rdate);

        //收藏
        string CollectIt(Collect c);

        //作品详情取消收藏
        string CancelCollect(int pid, string uid);

        //判断是否已经收藏
        bool judgeCollect(int pid, string uid);

        //查询收藏数
        int Searchcollect(int pid);

        //点赞
        string LikeIt(int pid, string uid);

        //取消点赞
        string CancelLikeIt(int pid, string uid);

        //判断是否已经点赞
        bool judgelike(string uid, int pid);

        //查询点赞数
        int Searchlike(long pid);

        //查询评论数
        int Searchcomment(long pid);

        //删除作品
        string Del_Production(long pid);

        string GetuseridByPID(long pid);

    }
}
