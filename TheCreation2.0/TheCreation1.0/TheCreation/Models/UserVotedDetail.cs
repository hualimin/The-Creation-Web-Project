using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheCreation.Models
{
    public class UserVotedDetail
    {
        public Vote vote { get; set; }
        public IEnumerable<Users> users { get; set; } 
        public int VoteCount { get; set; }
    }
}