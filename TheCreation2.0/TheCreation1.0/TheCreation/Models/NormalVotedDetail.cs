using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheCreation.Models
{
    public class NormalVotedDetail
    {
        public Vote vote { get; set; }
        public IEnumerable<Voted> voteds { get; set; }
        public int VoteCount { get; set; }
    }
}