using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    public class SqlVoteDetail:Basedb,IVoteDetail
    {
        #region  添加一条投票纪录
        public string Add(long vid, long vedid, string uid)
        {
            if (!CheckIsLeaglVote(vid,uid))
            {
                return "投票不合法(不具备该资格，或24小时内不能再次投票！)";
            }
            VoteDetail vd = new VoteDetail();
            vd.VoteTime = DateTime.Now;
            vd.VoteId = vid;
            vd.VotedId = vedid;
            vd.VoterId = uid;
            db.VoteDetail.Add(vd);
            if (db.SaveChanges() > 0)
            {
                return "success！";
            }
            return "添加失败";
        }
        #endregion

        #region  检查投票是否合法，是否具备资格()，24小时内是否重复投票
        public bool CheckIsLeaglVote(long vid, string uid)
        {
            Users users = db.Users.Find(uid);
            if (users==null)
            {
                return false; //用户不具备资格，返回false
            }
            VoteDetail vd = db.VoteDetail.Where(b => b.VoterId == uid && b.VoteId == vid).OrderByDescending(b => b.VoteTime).FirstOrDefault();
            if (vd != null&&vd.VoteTime.AddDays(1)>DateTime.Now) //24小时内是否重复投票,或者
            {
                return false;
            }
            return true;
        }
        #endregion

        #region  根据ReferenceID和Voteid找到VotedID,进行投票
        public string VoteByReferenceID(long vid, string rid, string voterid)
        {
            //确定投票类型
            Vote vote = db.Vote.Find(vid);
            if (vote==null)
            {
                return "voteid为空！";
            }

            //根据rid和voteid确定唯一的votedid
            Voted voted = db.Voted.Where(b=>b.ReferenceId==rid &&b.VoteId==vid).FirstOrDefault();
            //根据获得的votedid，调用ADD

            return Add(vid,voted.VotedId,voterid);
        }
        #endregion

        #region

        #endregion

        #region

        #endregion

    }
}
