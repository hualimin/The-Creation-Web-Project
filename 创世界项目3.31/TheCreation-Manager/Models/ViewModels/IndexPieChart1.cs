using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheCreation_Manager.Models
{
    public class IndexPieChart1
    {
        public int value { get; set; }
        public string name { get; set; }

        public IndexPieChart1(int value,string name)
        {
            this.value = value;
            this.name = name;
        }
    }
}