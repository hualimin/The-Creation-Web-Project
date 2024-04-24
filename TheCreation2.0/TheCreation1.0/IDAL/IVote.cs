using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDAL
{
    public interface IVote
    {
        Vote SearchVoteById(long id);

        //根据ID返回投票
        Vote get_vote_byid(long id);

        //获得普通类型投票
        IEnumerable<Vote> get_normal_vote();

        //获得用户类型投票
        IEnumerable<Vote> get_user_vote();

        //获得作品类型投票
        IEnumerable<Vote> get_work_vote();

        //把参照id转化为对应用户集合的方法
        IEnumerable<Users> GetVotedUsers(long id);

        //把参照id转化为对应作品集合的方法
        IEnumerable<Production> GetVotedProduction(long id);

        //根据ID返回选项集合
        IEnumerable<Voted> GetVotedNormal(long id);

        //添加投票方法-返回结果和id
        string AddVote(string title, string content, DateTime date, string imgurl, string adminid, string type);
    }
}
