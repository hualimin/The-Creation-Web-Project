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
    public class MessageManager
    {
        ISysMsg isysmsg = DataAccess.CreateSysMsg();
        IPublicMsg ipublicMsg = DataAccess.CreatePublicMsg();
        public IEnumerable<SysMsg> get_tot_my_sysmsg(string id)
        {
            return isysmsg.get_tot_my_sysmsg(id);
        }

        #region  删除消息  （要判断，七天内的消息不能删除）
        public string delete_sys_msg(int id, string adminid)
        {
            return isysmsg.delete_sys_msg(id,adminid);
        }
        #endregion

        #region  条件查找(接收人名称，关键内容，截止日期)
        public IEnumerable<SysMsg> serach_sys_msg(string rname, string keycontent, DateTime? endtime)
        {
            return isysmsg.serach_sys_msg(rname,keycontent,endtime);
        }
        #endregion

        #region  添加系统消息
        public string send_sys_msg(string senderid, string receptid, string content)
        {
            return isysmsg.send_sys_msg(senderid,receptid,content);
        }
        #endregion

        #region  发布公告消息  需要密码验证权限
        public string send_public_msg(string content, DateTime enddate, string pwd, string adminid)
        {
            return ipublicMsg.send_public_msg(content,enddate,pwd,adminid);
        }
        #endregion
    }
}
