using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IProduction
    {
        //获取所有
        IEnumerable<Production> get_tot_production();

        //查找

        //删除
        int DeleteProduction(int id);

        //获取首页 所有作品的作品类型及对应数量，生成列返回
        List<object> get_index_p3_json();
    }
}
