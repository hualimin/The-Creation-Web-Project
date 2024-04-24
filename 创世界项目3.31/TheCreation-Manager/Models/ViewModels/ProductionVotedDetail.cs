using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation_Manager.Models
{
    public class ProductionVotedDetail
    {
        public Vote vote { get; set; }
        public IEnumerable<Production> productions { get; set; }
    }
}