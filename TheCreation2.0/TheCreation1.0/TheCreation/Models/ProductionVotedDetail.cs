using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheCreation.Models
{
    public class ProductionVotedDetail
    {
        public Vote vote { get; set; }
        public IEnumerable<Production> productions { get; set; }
        public int VoteCount { get; set; }
    }
}