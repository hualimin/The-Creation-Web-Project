using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DALFactory;
using Models;
using IDAL;

namespace BLL
{
   public class ShowPersonalPageWorksManager
    {
        IShowPersonalPageWorks showPersonalPageWorks = DataAccess.ShowPersonalPageWorks();
        //个人主页展示的作品信息
        public IEnumerable<Production> ShowPersonalPageWorks(string id)
        {
            var works = showPersonalPageWorks.ShowPersonalPageWorks(id);
            return works;
        }
    }
}
