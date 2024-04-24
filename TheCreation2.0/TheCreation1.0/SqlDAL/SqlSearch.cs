using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;
namespace SqlDAL
{
    public class SqlSearch:Basedb,ISearch
    {
        #region 搜索
        //搜索相关用户
        public IEnumerable<Users> Result_Users(string keywords, string userid)
        {
            var result_Users = db.Users.Where(o => o.UsersName.Contains(keywords) || o.Creator.CreateType.Contains(keywords)).ToList();
            return result_Users;
        }

        //搜索  作品
        public IEnumerable<Production> Result_Works(string keywords, string userid)
        {

            var result_Works = db.Production.Where(o => o.Tag.Contains(keywords) || o.ProductionName.Contains(keywords) || o.ProductionType.Contains(keywords)).OrderByDescending(o => o.PublishDate).ToList();
            return result_Works;
        }

        //搜索  可能喜欢的用户
        public IEnumerable<Users> May_Like_Users(string keywords, string userid)
        {
            var may_Like_Users = db.Users.OrderByDescending(o => o.OrderCount).Take(5).ToList();
            return may_Like_Users;
        }

        //搜索  可能喜欢的作品
        public IEnumerable<Production> May_Like_Works(string keywords, string userid)
        {
            var may_Like_Works = db.Production.OrderByDescending(o => o.HotCount).Take(5).ToList();
            return may_Like_Works;
        }


        #endregion
    }
}
