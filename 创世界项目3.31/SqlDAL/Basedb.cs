using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using System.Runtime.Remoting.Messaging;

namespace SqlDAL
{
    public class Basedb  //一定要声明public，便于外部引用
    {
        public TheCreationEntities db
        {
            get
            {
                //从当前线程中获取 TheCreationEntities对象
                TheCreationEntities db = CallContext.GetData("DB") as TheCreationEntities;
                if (db == null)
                {
                    db = new TheCreationEntities();
                    db.Configuration.ProxyCreationEnabled = false;
                    db.Configuration.ValidateOnSaveEnabled = false;
                    CallContext.SetData("DB", db);
                }
                return db;
            }
        }
    }
}

