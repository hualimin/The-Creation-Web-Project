using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation.Models
{
    public class UserVoteDetailViewModel
    {
        public Users My_infos { get; set; }
        public long VoteCount { get; set; }
        public Voted DisPlaySingleUserVote { get; set; }
    }
}