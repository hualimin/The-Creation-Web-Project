using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheCreation_Manager.Models;
using Models;
using BLL;


namespace TheCreation_Manager.Controllers
{ 
    public class VoteController : Controller
    {
        VoteManager vm = new VoteManager();
        // GET: Vote
        public ActionResult Index()
        {
            VoteDisplayViewModel vote = new VoteDisplayViewModel();
            vote.normal_vote = vm.get_normal_vote();
            vote.user_vote = vm.get_user_vote();
            vote.work_vote = vm.get_work_vote();
            return View(vote);
        }

        public ActionResult Normal_Vote_Dtail(int id)
        {
            NormalVotedDetail nvd = new NormalVotedDetail();
            nvd.vote = vm.get_vote_byid(id);
            nvd.voteds= vm.GetVotedNormal(id);
            return View(nvd);
        }

        #region

        #endregion

        public ActionResult User_Vote_Dtail(int id)
        {
            UserVotedDetail uvd = new UserVotedDetail();
            uvd.vote= vm.get_vote_byid(id);
            uvd.users = vm.GetVotedUsers(id);
            return View(uvd);
        }
        public ActionResult Work_Vote_Dtail(int id)
        {
            ProductionVotedDetail pvd = new ProductionVotedDetail();
            pvd.vote= vm.get_vote_byid(id);
            pvd.productions= vm.GetVotedProduction(id);
            return View(pvd);
        }

        public ActionResult SubmitVote(int vid, string reference_id)
        {
            string uid = "10240005";  //改成从session中获取，用户(投票人)ID
            string result = vm.VoteByReferenceID(vid, reference_id, uid);
            return Content(result);
        }

        public ActionResult SubmitVoteByReferenceId(int vid, string reference_id)
        {
            string uid = "10240005";  //改成从session中获取，用户(投票人)ID
            string result = vm.VoteByReferenceID(vid, reference_id, uid); 
            return Content(result);
        }
    }
}