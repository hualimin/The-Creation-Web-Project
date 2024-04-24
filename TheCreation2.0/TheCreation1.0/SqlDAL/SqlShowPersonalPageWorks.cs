using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlShowPersonalPageWorks:Basedb,IShowPersonalPageWorks
    {
        //个人主页展示的作品信息
        public IEnumerable<Production> ShowPersonalPageWorks(string id)
        {
            var works = db.Production.Where(b => b.PublisherNo == id).OrderByDescending(b => b.PublishDate).ToList();
            return works;
        }
    }
}
