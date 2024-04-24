using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;
using DALFactory;
namespace BLL
{
    public class SearchManager
    {
        ISearch search = DataAccess.Search();
        //首页搜索
        //搜索  用户(根据用户的关键词keywords搜索)
        public IEnumerable<Users> Result_Users(string keywords, string userid)
        {

            IEnumerable<Users> result_Users = search.Result_Users(keywords, userid);
            return result_Users;
        }
        //搜索  作品(根据用户的关键词keywords搜索)
        public IEnumerable<Production> Result_Works(string keywords, string userid)
        {
            IEnumerable<Production> result_Users = search.Result_Works(keywords, userid);
            return result_Users;
        }
        //搜索  可能喜欢的用户
        public IEnumerable<Users> May_Like_Users(string keywords, string userid)
        {
            IEnumerable<Users> may_Like_Users = search.May_Like_Users(keywords, userid);
            return may_Like_Users;
        }
        //搜索  可能喜欢的作品
        public IEnumerable<Production> May_Like_Works(string keywords, string userid)
        {
            IEnumerable<Production> may_Like_Works = search.May_Like_Works(keywords, userid);
            return may_Like_Works;
        }


    }
}
