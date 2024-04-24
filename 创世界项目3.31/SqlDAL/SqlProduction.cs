using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlProduction : Basedb, IProduction
    {
        //获取所有
        public IEnumerable<Production> get_tot_production()
        {
            var productions = db.Production.ToList();
            return productions;
        }

        //查找

        //删除
        public int DeleteProduction(int id)
        {
            var production = db.Production.Find(id);
            db.Production.Remove(production);
            return db.SaveChanges();
        }

        #region   获取首页 所有作品的作品类型及对应数量，生成列返回
        public List<object> get_index_p3_json()
        {
            //查询所有作品列表
            //查找所有不重复的作品类型
            //查找对应类型下拥有的是作品数，加入匿名类列表
            List<object> result = new List<object>();
            IEnumerable<string> types = db.Production.Select(b => b.ProductionType).Distinct().ToList();
            IEnumerable<Production> productions = db.Production.ToList();

            foreach (var item in types)
            {
                int count = db.Production.Where(b => b.ProductionType == item).Count();
                result.Add(new { name = item, value = count });
            }
            return result;
        }
        #endregion
    }
}
