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
   public class PersonalCenterManager
    {
        IPersonalCenter personalCenter = DataAccess.PersonalCenter();
        //个人空间框架
        public Users PersonalCenter(string userid)
        {
            var us = personalCenter.us(userid);
            return us;
        }
    }
}
