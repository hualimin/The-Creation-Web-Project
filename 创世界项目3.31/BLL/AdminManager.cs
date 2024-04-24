using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using DALFactory;
using IDAL;

namespace BLL
{
    public class AdminManager
    {
        IAdmin iadmin=DataAccess.CreateAdmin();
        IUsers iusers = DataAccess.CreateUsers();
        ICreator icreator = DataAccess.CreateCreator();
        IOrders iorders = DataAccess.CreateOrders();
        IProduction iproduction = DataAccess.CreateProduction();
        IApplys iapplys = DataAccess.CreateApplys();

        #region 管理员登陆，暂时把名字设为密码
        public Admin AdminLogin(string id,string pwd)
        {
            var ad = iadmin.AdminLogin(id, pwd);
            if (ad != null)
            {
                return ad;
            }
            return null;
        }
        #endregion

        #region  获得所有用户
        public IEnumerable<Users> Get_tot_user()
        {
            return iusers.Get_tot_user();
        }
        #endregion

        #region  获得所有创作者
        public IEnumerable<Creator> Get_tot_creator()
        {
            return icreator.Get_tot_creator();
        }
        #endregion

        #region 获得所有作品
        public IEnumerable<Production> Get_tot_work()
        {
            return iproduction.get_tot_production();
        }
        #endregion

        #region
        public int Get_tot_action()
        {
            return 0;
        }
        #endregion

        #region
        public IEnumerable<Orders> Get_tot_order()
        {
            return iorders.Get_tot_orders();
        }
        #endregion

        

        #region  得到最新注册前十用户
        public IEnumerable<Users> Get_newes_10_users()
        {
            return iusers.Get_newes_10_users();
        }
        #endregion

        #region  获取最新 前十的投诉信息
        public IEnumerable<Applys> get_newest_10_apply()
        {
            return iapplys.get_newest_10_apply() ;
        }
        #endregion

        #region  获得最新 前十订单
        public IEnumerable<Orders> get_newest_10_order()
        {
            return iorders.get_newest_10_order();
        }
        #endregion

        #region   获取首页 所有创作者的创作类型及对应数量，生成列返回
        public List<object> get_index_p1_json()
        {
            return icreator.get_index_p1_json();
        }
        #endregion

        #region   获取首页 所有作品的作品类型及对应数量，生成列返回
        public List<object> get_index_p3_json()
        {
            return iproduction.get_index_p3_json();
        }
        #endregion


    }
}
