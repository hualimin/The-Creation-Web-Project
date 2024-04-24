using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface ICreatorInfo
    {
        Creator CreatorInfo(string id);//创作者信息
        string AlterPrice(string id,string newprice);//修改创作者价格区间
    }
}
