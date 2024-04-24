using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using System.Configuration;
using Models;
using IDAL;

namespace DALFactory
{
    public class DataAccess   //记得声明public
    {
        private static string AssemblyName = ConfigurationManager.AppSettings["Path"].ToString();
        private static string SpaceName = ConfigurationManager.AppSettings["Space"].ToString();
        private static string db = ConfigurationManager.AppSettings["DB"].ToString();

        public static IUsersLogin CreateUsersLogin()
        {
            string classname = SpaceName + "." + db + "UsersLogin";
            return (IUsersLogin)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IUsers CreateUsers()
        {
            string classname = SpaceName + "." + db + "Users";
            return (IUsers)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static ICreator CreateCreator()
        {
            string classname = SpaceName + "." + db + "Creator";
            return (ICreator)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IOrders CreateOrders()
        {
            string classname = SpaceName + "." + db + "Orders";
            return (IOrders)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IProduction CreateProduction()
        {
            string classname = SpaceName + "." + db + "Production";
            return (IProduction)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IOrderApply CreateOrderApply()
        {
            string classname = SpaceName + "." + db + "OrderApply";
            return (IOrderApply)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IApplys CreateApplys()
        {
            string classname = SpaceName + "." + db + "Applys";
            return (IApplys)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IAdmin CreateAdmin()
        {
            string classname = SpaceName + "." + db + "Admin";
            return (IAdmin)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IAuthenApply CreateAuthenApply()
        {
            string classname = SpaceName + "." + db + "AuthenApply";
            return (IAuthenApply)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IPublicMsg CreatePublicMsg()
        {
            string classname = SpaceName + "." + db + "PublicMsg";
            return (IPublicMsg)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static ISysMsg CreateSysMsg()
        {
            string classname = SpaceName + "." + db + "SysMsg";
            return (ISysMsg)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IVote CreateVote()
        {
            string classname = SpaceName + "." + db + "Vote";
            return (IVote)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IVoted CreateVoted()
        {
            string classname = SpaceName + "." + db + "Voted";
            return (IVoted)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IVoteDetail CreateVoteDetail()
        {
            string classname = SpaceName + "." + db + "VoteDetail";
            return (IVoteDetail)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IEveryImg CreateEveryImg()
        {
            string classname = SpaceName + "." + db + "EveryImg";
            return (IEveryImg)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopProductType CreateShopProductType()
        {
            string classname = SpaceName + "." + db + "ShopProductType";
            return (IShopProductType)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopProductTag CreateShopProductTag()
        {
            string classname = SpaceName + "." + db + "ShopProductTag";
            return (IShopProductTag)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopProduct CreateShopProduct()
        {
            string classname = SpaceName + "." + db + "ShopProduct";
            return (IShopProduct)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopInfoMore CreateShopInfoMore()
        {
            string classname = SpaceName + "." + db + "ShopInfoMore";
            return (IShopInfoMore)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static ISProductSubClass CreateSProductSubClass()
        {
            string classname = SpaceName + "." + db + "SProductSubClass";
            return (ISProductSubClass)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IRcptAddress CreateRcptAddress()
        {
            string classname = SpaceName + "." + db + "RcptAddress";
            return (IRcptAddress)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopOrder CreateShopOrder()
        {
            string classname = SpaceName + "." + db + "ShopOrder";
            return (IShopOrder)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopOrderDetail CreateShopOrderDetail()
        {
            string classname = SpaceName + "." + db + "ShopOrderDetail";
            return (IShopOrderDetail)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopEvaluate CreateShopEvaluate()
        {
            string classname = SpaceName + "." + db + "ShopEvaluate";
            return (IShopEvaluate)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IShopCart CreateShopCart()
        {
            string classname = SpaceName + "." + db + "ShopCart";
            return (IShopCart)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IBlog CreateBlog()
        {
            string classname = SpaceName + "." + db + "Blog";
            return (IBlog)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IBlogComment CreateBlogComment()
        {
            string classname = SpaceName + "." + db + "BlogComment";
            return (IBlogComment)Assembly.Load(AssemblyName).CreateInstance(classname);
        }
    }

}
