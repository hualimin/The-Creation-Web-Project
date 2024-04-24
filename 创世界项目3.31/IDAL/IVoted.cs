using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IVoted
    {
        IEnumerable<Voted> GetVotedsByVoteId(long id);

        //添加用户 投票选项
        string AddVotedUsers(string[] idlist, long voteid);

        //添加作品 投票选项
        string AddVotedProductions(string[] idlist, long voteid);

        //添加参考类型投票(包括 用户型投票和作品投票)
        string AddRefVote(string[] idlist, long voteid);

        //添加普通 投票选项
        string AddNorVoted(long voteid, string detail, string imgurl, string refID);
    }
}
