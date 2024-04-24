using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlPersonalCenter:Basedb,IPersonalCenter
    {
        //个人空间框架
        public Users us(string userid)
        {
            var us = db.Users.Where(b => b.UsersId == userid).FirstOrDefault();
            return us;
        }
    }
}
