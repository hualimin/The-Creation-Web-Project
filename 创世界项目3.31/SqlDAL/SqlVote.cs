using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;
using System.Collections;

namespace SqlDAL
{
    class SqlVote: Basedb, IVote
    {
        public Vote SearchVoteById(long id)
        {
            return db.Vote.Find(id);
        }

        #region  获得普通类型投票
        public IEnumerable<Vote> get_normal_vote()
        {
            var votes = db.Vote.Where(b => b.ReferenceType == "普通").ToList();
            return votes;
        }
        #endregion

        #region  获得用户类型投票
        public IEnumerable<Vote> get_user_vote()
        {
            var votes = db.Vote.Where(b => b.ReferenceType == "用户").ToList();
            return votes;
        }
        #endregion

        #region  获得作品类型投票
        public IEnumerable<Vote> get_work_vote()
        {
            var votes = db.Vote.Where(b => b.ReferenceType == "作品").ToList();
            return votes;
        }
        #endregion

        #region  把参照id转化为对应用户集合的方法
        public IEnumerable<Users> GetVotedUsers(long id)
        {
            Vote vote = db.Vote.Find(id);
            if (vote==null)
            {
                return null;
            }
            List<Users> user = new List<Users>();  
            IEnumerable<Voted> voteds = db.Voted.Where(b=>b.VoteId==id).ToList();
            foreach (var item in voteds)
            {
                Users u = db.Users.Find(item.ReferenceId);
                user.Add(u);
            }
            return user;
        }
        #endregion

        #region  把参照id转化为对应作品集合的方法
        public IEnumerable<Production> GetVotedProduction(long id)
        {
            Vote vote = db.Vote.Find(id);
            if (vote == null)
            {
                return null;
            }
            List<Production> productions = new List<Production>();
            IEnumerable<Voted> voteds = db.Voted.Where(b => b.VoteId == id).ToList();
            foreach (var item in voteds)
            {
                Production p = db.Production.Find(Convert.ToInt64(item.ReferenceId));
                productions.Add(p);
            }
            return productions;
        }
        #endregion

        #region  根据ID返回选项集合
        public IEnumerable<Voted> GetVotedNormal(long id)
        {
            Vote vote = db.Vote.Find(id);
            if (vote == null)
            {
                return null;
            }
            IEnumerable<Voted> voteds = db.Voted.Where(b=>b.VoteId==id);
            return voteds;
        }
        #endregion

        #region  根据ID返回投票
        public Vote get_vote_byid(long id)
        {
            return db.Vote.Find(id);
        }
        #endregion

        #region  添加投票方法-返回结果和id
        public string AddVote(string title, string content, DateTime date, string imgurl, string adminid, string type)
        {
            if (db.Admin.Find(adminid)==null)
            {
                return "未登录，暂无操作权限！";
            }
            Vote vote = new Vote();
            
            vote.Title = title;
            vote.Content = content;
            vote.BeginDate = DateTime.Now;
            vote.EndDate = date;
            vote.ImgUrl = imgurl;
            vote.AdminID = adminid;
            vote.ReferenceType = type;
            db.Vote.Add(vote);
            if (db.SaveChanges()>0)
            {
                string voteid = db.Vote.Where(b => b.ReferenceType == type).OrderByDescending(b => b.BeginDate).FirstOrDefault().VoteId.ToString();
                return voteid;
            }
            else
            {
                return "添加失败！";
            }
        }
        #endregion

        #region 

        #endregion

        #region

        #endregion
    }
}
