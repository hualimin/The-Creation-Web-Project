using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
    class SqlVoted:Basedb,IVoted
    {
        public IEnumerable<Voted> GetVotedsByVoteId(long id)
        {
            return db.Voted.Where(b=>b.VoteId==id).ToList();
        }

        #region    添加参考类型投票(包括 用户型投票和作品投票)
        public string AddRefVote(string[] idlist, long voteid)
        {
            string result = "";
            Vote vote = db.Vote.Find(voteid);
            if (vote == null)
            {
                return "该投票不存在！";
            }

            foreach (var item in idlist)
            {
                if (item != null && item != "") //voted插入一条记录
                {
                    //核实一下是否是用户或作品
                    if (vote.ReferenceType=="用户") {
                         if(db.Users.Find(item)==null)
                        {
                            result += item+"添加异常\n";
                            continue;// 结束本次循环
                        }
                    }
                    else
                    {
                        if (db.Production.Find(Convert.ToInt64(item)) == null)
                        {
                            result += item + "添加异常\n";
                            continue;// 结束本次循环
                        }
                    }
                    Voted voted = new Voted();
                    voted.ReferenceId = item.ToString();
                    voted.VoteId = voteid;
                    db.Voted.Add(voted);
                    if (db.SaveChanges() < 0) return "选项插入异常，添加中断！";
                }
            }
            if (result != "") return result;
            return "添加成功！";
        }
        #endregion

        #region    添加普通 投票选项
        public string AddNorVoted(long voteid,string detail,string imgurl,string refID)
        {
            string result = "";
            Vote vote = db.Vote.Find(voteid);
            if (vote == null)
            {
                return "该投票不存在！";
            }
            //判断是否已有该选项
            if (db.Voted.Where(b=>b.VoteId==vote.VoteId && b.ReferenceId==refID).FirstOrDefault()!=null)
            {
                return "选项已存在，不可重复添加！";
            }
            Voted voted = new Voted();
            voted.VoteId = voteid;
            voted.Detail = detail;
            voted.ImgUrl = imgurl;
            voted.ReferenceId = refID;

            db.Voted.Add(voted);
            if (db.SaveChanges()>0)
            {
                return "添加成功！";
            }
            return "添加失败！";

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
    }
}
