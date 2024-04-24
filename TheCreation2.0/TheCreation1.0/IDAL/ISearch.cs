using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace IDAL
{
    public interface ISearch
    {
        IEnumerable<Production> Result_Works(string keywords, string userid);             //搜索  作品

        IEnumerable<Users> Result_Users(string keywords, string userid);                  //搜索  用户

        IEnumerable<Users> May_Like_Users(string keywords, string userid);                //搜索  可能喜欢的用户

        IEnumerable<Production> May_Like_Works(string keywords, string userid);           //搜索  可能喜欢的作品

    }
}
