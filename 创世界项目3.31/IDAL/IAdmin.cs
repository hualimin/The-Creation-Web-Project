using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IAdmin
    {
        //管理员登陆
        Admin AdminLogin(string id,string pwd);
    }
}
