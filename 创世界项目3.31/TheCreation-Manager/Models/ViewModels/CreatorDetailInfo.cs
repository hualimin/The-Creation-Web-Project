using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Models;

namespace TheCreation_Manager.Models
{
    public class CreatorDetailInfo
    {
        public Users user { get; set; }
        public Creator creator { get; set; }
    }
}