using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
   public interface IShowPersonalPageWorks
    {
        IEnumerable<Production> ShowPersonalPageWorks(string id);//个人主页展示的作品
    }
}
