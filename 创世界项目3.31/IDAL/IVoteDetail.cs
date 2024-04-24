using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IVoteDetail
    {
        //添加一条投票纪录
        string Add(long vid, long vedid,string uid);

        //检查24小时内是否重复投票
        bool CheckIsLeaglVote(long vid, string uid);

        //根据ReferenceID和Voteid找到VotedID,进行投票
        string VoteByReferenceID(long vid, string rid, string voterid);

    }
}
