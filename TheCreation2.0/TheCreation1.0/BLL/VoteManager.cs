using DALFactory;
using IDAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class VoteManager
    {
        IVote iv = DataAccess.CreateVote();
        IVoted ivd = DataAccess.CreateVoted();
        IVoteDetail ivdl = DataAccess.CreateVoteDetail();

        #region  ID获取投票主题
        public Vote SearchVoteById(int id)
        {
            return iv.SearchVoteById(id);
        }
        #endregion 

        #region  通过投票ID获取 被投票对象
        public IEnumerable<Voted> GetVotedsByVoteId(int id)
        {
            return ivd.GetVotedsByVoteId(id);
        }
        #endregion

        #region  添加一条投票纪录明细
        public string SubmitVote(long vid, long vedid, string uid)
        {
            return ivdl.Add(vid, vedid, uid);
        }
        #endregion

        #region  根据ReferenceID和Voteid找到VotedID,进行投票
        public string VoteByReferenceID(int vid, string rid, string voterid)
        {
            return ivdl.VoteByReferenceID(vid, rid, voterid);
        }
        #endregion

        #region  获得普通类型投票
        public IEnumerable<Vote> get_normal_vote()
        {
            return iv.get_normal_vote();
        }
        #endregion

        #region  获得用户类型投票
        public IEnumerable<Vote> get_user_vote()
        {
            return iv.get_user_vote();
        }
        #endregion

        #region  获得作品类型投票
        public IEnumerable<Vote> get_work_vote()
        {
            return iv.get_work_vote();
        }
        #endregion

        #region  把参照id转化为对应用户集合的方法
        public IEnumerable<Users> GetVotedUsers(int id)
        {
            return iv.GetVotedUsers(id);
        }
        #endregion

        #region  把参照id转化为对应作品集合的方法
        public IEnumerable<Production> GetVotedProduction(int id)
        {
            return iv.GetVotedProduction(id);
        }
        #endregion

        #region  根据ID返回选项集合
        public IEnumerable<Voted> GetVotedNormal(int id)
        {
            return iv.GetVotedNormal(id);
        }
        #endregion

        #region  根据ID返回投票
        public Vote get_vote_byid(int id)
        {
            return iv.get_vote_byid(id);
        }
        #endregion

        #region 计算投票数
        public int VoteCount(string rid)
        {
            var votecount = ivdl.VoteCount(rid);
            return votecount;
        }
        #endregion

        #region 展示单个用户投票内容的投票详情
        public Voted DisPlaySingleUserVote(string id)
        {
            var displaysinglevote = ivd.DisPlaySingleUserVote(id);
            return displaysinglevote;
        }
        #endregion

        #region  根据投票选项ID获得对应票数
        public long get_Voted_Count(long id)
        {
            return ivd.get_Voted_Count(id);
        }
        #endregion

        #region   根据用户投票选项ID获得对应票数
        public long get_UserVoted_Count(string rid, long vid)
        {
            return ivd.get_UserVoted_Count(rid,vid);
        }
        #endregion

    }
}
