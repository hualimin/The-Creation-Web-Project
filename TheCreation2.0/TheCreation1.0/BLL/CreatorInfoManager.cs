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
   public class CreatorInfoManager
    {
        ICreatorInfo creatorInfo = DataAccess.CreatorInfo();
        //创作者信息
        public Creator GetCreator(string id)
        {
            var creatorinfo = creatorInfo.CreatorInfo(id);
            return creatorinfo;
        }
        //修改创作者价格区间
        public string AlterPrice(string id, string newprice)
        {
            var alterprice = creatorInfo.AlterPrice(id, newprice);
            return alterprice;
        }
    }
}
