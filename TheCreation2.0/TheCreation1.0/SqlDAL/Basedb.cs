using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace SqlDAL
{
   public class Basedb
    {
        public TheCreationEntities db
        {
            get
            {
                TheCreationEntities db = CallContext.GetData("DB") as TheCreationEntities;
                if (db == null)
                {
                    db = new TheCreationEntities();
                    CallContext.SetData("DB", db);
                }
                return db;
            }
        }
    }
}
