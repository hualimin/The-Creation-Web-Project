using IDAL;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SqlDAL
{
    class SqlVoted : Basedb, IVoted
    {
        public IEnumerable<Voted> GetVotedsByVoteId(long id)
        {
            return db.Voted.Where(b => b.VoteId == id).ToList();
        }

        #region    添加参考类型投票(包括 用户型投票和作品投票)
        public string AddRefVote(string[] idlist, long voteid)
        {
            Vote vote = db.Vote.Find(voteid);
            if (vote == null)
            {
                return "该投票不存在！";
            }

            foreach (var item in idlist)
            {
                if (item != null && item != "") //voted插入一条记录
                {
                    Voted voted = new Voted();
                    voted.ReferenceId = item.ToString();
                    voted.VoteId = voteid;
                    db.Voted.Add(voted);
                    if (db.SaveChanges() < 0) return "选项插入异常，添加中断！";
                }
            }

            return "添加成功！";
        }
        #endregion

        #region    添加用户 投票选项
        public string AddVotedUsers(string[] idlist, long voteid)
        {
            Vote vote = db.Vote.Find(voteid);
            if (vote == null)
            {
                return "该投票不存在！";
            }
            if (vote.ReferenceType != "用户") return "投票类型错误！";

            foreach (var item in idlist)
            {
                if (item != null && item != "") //voted插入一条记录
                {
                    Voted voted = new Voted();
                    voted.ReferenceId = item.ToString();
                    voted.VoteId = voteid;
                    db.Voted.Add(voted);
                    if (db.SaveChanges() < 0) return "选项插入异常，添加中断！";
                }
            }

            return "添加成功！";
        }
        #endregion

        #region  添加作品 投票选项
        public string AddVotedProductions(string[] idlist, long voteid)
        {
            Vote vote = db.Vote.Find(voteid);
            if (vote == null)
            {
                return "该投票不存在！";
            }
            if (vote.ReferenceType != "作品") return "投票类型错误！";

            foreach (var item in idlist)
            {
                if (item != null && item != "") //voted插入一条记录
                {
                    Voted voted = new Voted();
                    voted.ReferenceId = item.ToString();
                    voted.VoteId = voteid;
                    db.Voted.Add(voted);
                    if (db.SaveChanges() < 0) return "选项插入异常，添加中断！";
                }
            }

            return "添加成功！";
        }
        #endregion

        public Voted DisPlaySingleUserVote(string id)
        {
            var displaysingleuservote = db.Voted.Where(b=>b.ReferenceId==id).FirstOrDefault();
            return displaysingleuservote;
        }
        
        public Voted DisPlaySingleProductionVote(string id)
        {
            var displaysingleproductionvote = db.Voted.Where(b=>b.ReferenceId==id).FirstOrDefault();
            
            return displaysingleproductionvote;
        }

        #region  根据投票选项ID获得对应票数
        public long get_Voted_Count(long id)
        {
            Voted voted = db.Voted.Find(id);
            if (voted==null)
            {
                return -1;
            }
            var count = db.VoteDetail.Where(b => b.VoteId == voted.VoteId && b.VotedId == voted.VotedId).ToList().Count();
            return count;
        }
        #endregion

        #region   根据用户投票选项ID获得对应票数
        public long get_UserVoted_Count(string rid, long vid)
        {
            Vote vote = db.Vote.Find(vid);
            var voted = db.Voted.Where(b=>b.VoteId==vid && b.ReferenceId==rid).FirstOrDefault();
            return get_Voted_Count(voted.VotedId);
        }
        #endregion

        #region  根据作品投票选项ID获得对应票数
        public long get_WorkVoted_Count(string rid, long vid)
        {
            Vote vote = db.Vote.Find(vid);
            var voted = db.Voted.Where(b => b.VoteId == vid && b.ReferenceId == rid).FirstOrDefault();
            return get_Voted_Count(voted.VotedId);
        }
        #endregion

        #region MyRegion

        #endregion
    }
}
