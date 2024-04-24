using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlAdmin : Basedb, IAdmin
    {
        public Admin AdminLogin(string id, string pwd)
        {
            var ad = db.Admin.Where(b => b.AdminId == id && b.AdminName == pwd).FirstOrDefault();
            if (ad!=null)
            {
                return ad;
            }
            return null;
        }

        public Admin AddAdmin(string id, string pwd)
        {
            Admin login = new Admin();
            login.AdminId = id;
            login.AdminName = pwd;
            db.Admin.Add(login);
            if (db.SaveChanges() > 0)
            {
                return login;
            }

            return null;
        }

        public bool IdExist(string id)
        {
            var result = db.Admin.Where(b => b.AdminId == id).FirstOrDefault();
            if (result != null)
            {
                return true;
            }
            return false;
        }
    }
}
