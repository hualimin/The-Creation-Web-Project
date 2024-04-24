using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDAL
{
    public interface IVoted
    {
        IEnumerable<Voted> GetVotedsByVoteId(long id);
        string AddVotedUsers(string[] idlist, long voteid);//添加用户 投票选项
        string AddVotedProductions(string[] idlist, long voteid);//添加作品 投票选项
        string AddRefVote(string[] idlist, long voteid);//添加参考类型投票(包括 用户型投票和作品投票)
        Voted DisPlaySingleUserVote(string id);//展示单个用户投票的详情

        //根据投票选项ID获得对应票数
        long get_Voted_Count(long id);

        //根据用户投票选项ID获得对应票数
        long get_UserVoted_Count(string rid, long vid);

        //根据作品投票选项ID获得对应票数
        long get_WorkVoted_Count(string rid, long vid);
    }
}
