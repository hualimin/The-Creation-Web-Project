using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;
using DALFactory;
namespace BLL
{
    public class JoinManager
    {
        IJoin join = DataAccess.Join();
        public string Help()
        {
            var help = join.Help();
            return help;
        }

        public string TheFascinatingCreation()
        {
            var t = join.TheFascinatingCreation();
            return t;
        }
    }
}
