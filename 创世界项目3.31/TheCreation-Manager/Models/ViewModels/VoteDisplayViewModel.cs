using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation_Manager.Models
{
    public class VoteDisplayViewModel
    {
        //普通类型投票
        public IEnumerable<Vote> normal_vote { get; set; }

        //用户类型投票
        public IEnumerable<Vote> user_vote { get; set; }

        //作品类型投票
        public IEnumerable<Vote> work_vote { get; set; }
    }
}