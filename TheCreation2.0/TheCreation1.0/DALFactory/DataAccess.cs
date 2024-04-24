using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Reflection;
using IDAL;

namespace DALFactory
{
   public class DataAccess
    {
        private static string AssemblyName = ConfigurationManager.AppSettings["Path"].ToString();
        private static string db = ConfigurationManager.AppSettings["DB"].ToString();

        public static IUsersLogin UsersLogin()
        {
            string className = AssemblyName + "." + db + "UsersLogin";
            IUsersLogin usersLogin = (IUsersLogin)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlUsersLogin对象
            return usersLogin;
        }

        public static IUserManage UserManage()
        {
            string className = AssemblyName + "." + db + "UserManage";
            IUserManage userManage = (IUserManage)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlUserManage对象
            return userManage;
        }

        public static IPersonalCenter PersonalCenter()
        {
            string className = AssemblyName + "." + db + "PersonalCenter";
            IPersonalCenter personalCenter = (IPersonalCenter)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlPersonalCenter对象
            return personalCenter;
        }

        public static IMessages Messages()
        {
            string className = AssemblyName + "." + db + "Messages";
            IMessages messages = (IMessages)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlMessages对象
            return messages;
        }

        public static ICreatorOrders CreatorOrders()
        {
            string className = AssemblyName + "." + db + "CreatorOrders";
            ICreatorOrders creatorOrders = (ICreatorOrders)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlCreatorOrders对象
            return creatorOrders;
        }

        public static IUserOrders UserOrders()
        {
            string className = AssemblyName + "." + db + "UserOrders";
            IUserOrders userOrders = (IUserOrders)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlUserOrders对象
            return userOrders;
        }

        public static ICreatorInfo CreatorInfo()
        {
            string className = AssemblyName + "." + db + "CreatorInfo";
            ICreatorInfo creatorInfo = (ICreatorInfo)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlCreatorInfo对象
            return creatorInfo;
        }

        public static IWorksManage WorksManage()
        {
            string className = AssemblyName + "." + db + "WorksManage";
            IWorksManage worksManage = (IWorksManage)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlWorksManage对象
            return worksManage;
        }

        public static IPersonalPageInfo PersonalPageInfo()
        {
            string className = AssemblyName + "." + db + "PersonalPageInfo";
            IPersonalPageInfo personalPageInfo = (IPersonalPageInfo)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlPersonalPageInfo对象
            return personalPageInfo;
        }

        public static IShowPersonalPageWorks ShowPersonalPageWorks()
        {
            string className = AssemblyName + "." + db + "ShowPersonalPageWorks";
            IShowPersonalPageWorks showPersonalPageWorks = (IShowPersonalPageWorks)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlShowPersonalPageWorks对象
            return showPersonalPageWorks;
        }

        public static IProduction Production()
        {
            string className = AssemblyName + "." + db + "Production";
            IProduction production = (IProduction)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlProduction对象
            return production;
        }

        public static IHome Home()
        {
            string className = AssemblyName + "." + db + "Home";
            IHome home = (IHome)Assembly.Load(AssemblyName).CreateInstance(className); //返回一个SqlHome对象
            return home;
        }
        public static IVote CreateVote()
        {
            string classname = AssemblyName + "." + db + "Vote";
            return (IVote)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IVoted CreateVoted()
        {
            string classname = AssemblyName + "." + db + "Voted";
            return (IVoted)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IVoteDetail CreateVoteDetail()
        {
            string classname = AssemblyName + "." + db + "VoteDetail";
            return (IVoteDetail)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static ISearch Search()
        {
            string className = AssemblyName + "." + db + "Search";
            ISearch search = (ISearch)Assembly.Load(AssemblyName).CreateInstance(className);    //返回一个SqlSearch对象
            return search;
        }

        public static IJoin Join()
        {
            string className = AssemblyName + "." + db + "Join";
            IJoin join = (IJoin)Assembly.Load(AssemblyName).CreateInstance(className);
            return join;
        }

        public static IApplys Applys()
        {
            string className = AssemblyName + "." + db + "Applys";
            IApplys applys = (IApplys)Assembly.Load(AssemblyName).CreateInstance(className);
            return applys;
        }

        public static IBlog CreateBlog()
        {
            string classname = AssemblyName + "." + db + "Blog";
            return (IBlog)Assembly.Load(AssemblyName).CreateInstance(classname);
        }

        public static IBlogComment CreateBlogComment()
        {
            string classname = AssemblyName + "." + db + "BlogComment";
            return (IBlogComment)Assembly.Load(AssemblyName).CreateInstance(classname);
        }
    }
}
