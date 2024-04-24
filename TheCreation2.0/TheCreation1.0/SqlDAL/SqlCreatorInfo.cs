using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlCreatorInfo:Basedb,ICreatorInfo
    {
        //创作者信息
        public Creator CreatorInfo(string id)
        {
            var creatorinfo = db.Creator.Find(id);
            return creatorinfo;
        }
        
        //修改创作者价格区间
        public string AlterPrice(string id, string newprice)
        {
            Creator creator = db.Creator.Find(id);
            creator.PriceRange = newprice.ToString();          
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "fail";
        }
    }
}
