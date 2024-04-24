using System.Collections.Generic;
using Models;
namespace TheCreation.Models
{


    public class SearchResultViewModel
    {
        //结果 相关作品
        public IEnumerable<Production> Result_Works { get; set; }

        //结果 相关用户
        public IEnumerable<Users> Result_Users { get; set; }

        //猜你喜欢
        public IEnumerable<Users> May_Like_Users { get; set; }

        //猜你喜欢
        public IEnumerable<Production> May_Like_Works { get; set; }

        //结果数
        public int Result_Count { get; set; }


    }

}