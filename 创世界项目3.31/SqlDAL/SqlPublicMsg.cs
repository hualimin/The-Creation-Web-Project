using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlPublicMsg : Basedb, IPublicMsg
    {
        //获取所有
        public IEnumerable<PublicMsg> get_tot_publicmsg(string id)
        {
            var publicmsg = db.PublicMsg.Where(b=>b.SenderId==id).ToList();
            return publicmsg;
        }

        //删除
        public int DeletePublic(string id)
        {
            var publicmsg = db.PublicMsg.Find(id);
            db.PublicMsg.Remove(publicmsg);           
            return db.SaveChanges();
        }

        //添加
        public PublicMsg add_publicMsg(string senderid, string content, DateTime endtime)
        {
            PublicMsg publicMsg = new PublicMsg();
            publicMsg.SenderId = senderid;
            publicMsg.PublicMsgContent = content;
            publicMsg.SendTime = DateTime.Now;
            if (endtime==null)
            {
                publicMsg.EndTime = DateTime.Now.AddDays(15);
            }
            else
            {
                publicMsg.EndTime = endtime;
            }
            db.PublicMsg.Add(publicMsg);
            if (db.SaveChanges()>0)
            {
                return publicMsg;
            }
            return null;
        }

        //查找

        #region  发布公告消息  需要密码验证权限
        public string send_public_msg(string content, DateTime enddate, string pwd,string adminid)
        {
            var admin = db.Admin.Where(b =>b.AdminId==adminid &&b.AdminName==pwd).FirstOrDefault();
            if (admin==null)
            {
                return "账号密码错误！操作失败！";
            }
            PublicMsg publicMsg = new PublicMsg();
            publicMsg.SenderId = adminid;
            publicMsg.PublicMsgContent = content;
            publicMsg.SendTime = DateTime.Now;
            publicMsg.EndTime = enddate;

            db.PublicMsg.Add(publicMsg);

            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "发布失败！";
        }
        #endregion

    }
}
