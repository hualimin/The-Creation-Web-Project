using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheCreation.Models;

namespace TheCreation.Controllers
{
    public class VoteController : Controller
    {
        VoteManager vm = new VoteManager();
        WorksManageManager worksManageManager = new WorksManageManager();
        // GET: Vote

        #region 全部投票活动
        public ActionResult Index()
        {
            VoteDisplayViewModel vote = new VoteDisplayViewModel();
            vote.normal_vote = vm.get_normal_vote();
            vote.user_vote = vm.get_user_vote();
            vote.work_vote = vm.get_work_vote();
            return View(vote);
        }
        #endregion

        #region 普通投票
        public ActionResult Normal_Vote_Dtail(int id)
        {
            NormalVotedDetail nvd = new NormalVotedDetail();
            nvd.vote = vm.get_vote_byid(id);
            nvd.voteds = vm.GetVotedNormal(id);
            return View(nvd);
        }
        #endregion

        #region 创作者投票
        public ActionResult User_Vote_Dtail(int id)
        {
            UserVotedDetail uvd = new UserVotedDetail();
            uvd.vote = vm.get_vote_byid(id);
            uvd.users = vm.GetVotedUsers(id);
            return View(uvd);
        }
        #endregion

        #region 创作品投票
        public ActionResult Work_Vote_Dtail(int id)
        {
            ProductionVotedDetail pvd = new ProductionVotedDetail();
            pvd.vote = vm.get_vote_byid(id);
            pvd.productions = vm.GetVotedProduction(id);
            return View(pvd);
        }
        #endregion

        #region 投票
        public ActionResult SubmitVote(long vid, long vedid)
        {
            string uid = Session["userid"].ToString();  //改成从session中获取，用户(投票人)ID
            string result = vm.SubmitVote(vid, vedid, uid);
            if(result== "illegal")
            {
                return Content("<script>alert('投票不合法(不具备该资格，或24小时内不能再次投票！)');history.go(-1);</script>");
            }
            else if(result== "false")
            {
                return Content("<script>alert('投票失败！');history.go(-1);</script>");
            }
            else if(result== "success")
            {
                return Content("<script>alert('投票成功！感谢您的支持！');history.go(-1);</script>");
            }
            return Content(result);
        }
        #endregion

        #region 查找关联的ID
        public ActionResult SubmitVoteByReferenceId(int vid, string reference_id)
        {
            string uid = Session["userid"].ToString();  
            string result = vm.VoteByReferenceID(vid, reference_id, uid);
            if (result == "illegal")
            {
                return Content("<script>alert('投票不合法(不具备该资格，或24小时内不能再次投票！)');history.go(-1);</script>");
            }
            else if (result == "false")
            {
                return Content("<script>alert('投票失败！');history.go(-1);</script>");
            }
            else if (result == "success")
            {
                return Content("<script>alert('投票成功！感谢您的支持！');history.go(-1);</script>");
            }
            return Content(result);
        }
        #endregion

        #region 展示单个用户投票内容的投票详情
        public ActionResult DisPlaySingleUserVote(string id,long vid)
        {
            UserVoteDetailViewModel uv = new UserVoteDetailViewModel();
            uv.My_infos= worksManageManager.My_infos(id);
            uv.DisPlaySingleUserVote = vm.DisPlaySingleUserVote(id);
            uv.VoteCount = get_UserVoted_Count(id,vid);
            return View(uv);
        }
        #endregion

        #region  根据被投票选项用户ID获得对应票数
        public long get_UserVoted_Count(string rid,long vid)
        {
            return vm.get_UserVoted_Count(rid,vid);
        }
        #endregion

        #region  根据作品投票选项ID获得对应票数
        public long get_WorkVoted_Count(string rid, long vid)
        {
            return vm.get_UserVoted_Count(rid, vid);
        }
        #endregion

        #region  根据投票选项返回对应投票数
        public long get_Voted_Count(long vedid)
        {
            return vm.get_Voted_Count(vedid);
        }
        #endregion

    }
}