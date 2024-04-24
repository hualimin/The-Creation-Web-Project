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
   public  class ActivityManager
    {
        IEveryImg ieveryImg = DataAccess.CreateEveryImg();
        IVote ivote = DataAccess.CreateVote();
        IVoted ivoted = DataAccess.CreateVoted();

        #region   上传每日一展图片，修改数据库
        public string UploadImg(string adminid, string imgurl)
        {
            return ieveryImg.UploadImg(adminid,imgurl);
        }
        #endregion

        #region  添加投票方法-返回结果和id
        public string AddRefVote(string title, string content, DateTime date, string imgurl, string adminid, string type,string select)
        {
            string voteid = ivote.AddVote(title,content,date,imgurl,adminid,type);
            string[] idlist = select.Split(',');
            if (voteid== "添加失败！")
            {
                return "投票添加失败！";
            }

            long vid = Convert.ToInt64(voteid);

            return ivoted.AddRefVote(idlist, vid);

            //if (type=="用户")
            //{
            //    //添加用户  投票选项
            //    return ivoted.AddVotedUsers(idlist, vid); ;
            //}
            //else
            //{
            //    return ivoted.AddVotedProductions(idlist, vid); ;
            //}
        }
        #endregion

        #region  添加普通投票方法-返回结果和id
        public string AddNorVote(string title, string content, DateTime date, string imgurl, string adminid, string type)
        {
            string voteid = ivote.AddVote(title, content, date, imgurl, adminid, type);
            return voteid;
        }
        #endregion

        #region    添加普通 投票选项
        public string AddNorVoted(long voteid, string detail, string imgurl, string refID)
        {
            return ivoted.AddNorVoted(voteid,detail,imgurl,refID);
        }
        #endregion

    }
}
