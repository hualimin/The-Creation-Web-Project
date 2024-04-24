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
    public class AffairManager
    {
        //事务管理，包含投诉和申请创作者处理

        IApplys iapplys = DataAccess.CreateApplys();
        IAuthenApply iauthenApply = DataAccess.CreateAuthenApply();

        //普通投诉部分

        #region 获得所有普通投诉
        public IEnumerable<Applys> get_tot_applys()
        {
            return iapplys.get_tot_applys();
        }
        #endregion

        #region  按条件查找普通投诉
        public IEnumerable<Applys> serach_apply(string name, string content, DateTime? date)
        {
            return iapplys.serach_apply(name, content, date);
        }
        #endregion

        #region    根据ID返回Apply
        public Applys get_apply_byid(int id)
        {
            return iapplys.get_apply_byid(id);
        }
        #endregion

        #region  删除投诉
        public string delete_apply(int id)
        {
            return iapplys.delete_apply(id);
        }
        #endregion

        #region  处理投诉  即修改投诉状态为 已审核
        public string deal_apply(int id, string adminid)
        {
            return iapplys.deal_apply(id,adminid);
        }
        #endregion 

        #region  发送消息  便于和投诉人沟通
        public string send_msg_touser(string uid, string adminid, string content)
        {
            return iapplys.send_msg_touser(uid, adminid, content);
        }
        #endregion

        //创作者申请部分

        #region  获得所有创作者申请
        public IEnumerable<AuthenApply> get_tot_authenapply()
        {
            return iauthenApply.get_tot_authenapply();
        }
        #endregion

        #region   按条件查找创作者申请  
        public IEnumerable<AuthenApply> serach_authenapply(string name, string type, int? min, int? max)
        {
            return iauthenApply.serach_authenapply(name, type, min, max);
        }
        #endregion

        #region   确认处理申请   修改状态为 已驳回 或 已通过，若为已通过则同时创建创作者
        public string deal_applycreator(int id,int flag, string adminid)
        {
            return iauthenApply.deal_applycreator(id,flag,adminid);
        }
        #endregion

        #region  处理创作者申请
        public string delete_applycreator(int id)
        {
            return iauthenApply.delete_applycreator(id);
        }
        #endregion

        #region  发送投诉消息
        public string send_apply(string uid, string content)
        {
            return iapplys.send_apply(uid,content);
        }
        #endregion

        #region 发送创作者申请id
        public string send_creator_apply(string uid, string content, string ctype, string pricerange)
        {
            return iauthenApply.send_creator_apply(uid,content,ctype,pricerange);
        }

        #endregion

        #region    调用方法 根据申请创作者表的id返回申请人id
        public Users return_user_byAuthenID(int id)
        {           
            return iauthenApply.return_user_byAuthenID(id);
        }
        #endregion

        #region   根据id返回AuthenApply
        public AuthenApply get_AuthenApply_byID(int id)
        {
            return iauthenApply.get_AuthenApply_byID(id);
        }
        #endregion


    }
}
