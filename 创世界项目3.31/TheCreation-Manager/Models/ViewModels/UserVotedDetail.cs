using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation_Manager.Models
{
    public class UserVotedDetail
    {
        public Vote vote { get; set; }
        public IEnumerable<Users> users { get; set; }
    }
}