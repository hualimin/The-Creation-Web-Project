using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlEveryImg : Basedb, IEveryImg
    {
        #region   上传每日一展图片，修改数据库
        public string UploadImg(string adminid, string imgurl)
        {
            //查找最近一个
            EveryImg everyImg = db.EveryImg.OrderByDescending(b =>b.UploadDate).FirstOrDefault();
            //判断 每日一展 今天未重复发布
            if (everyImg!=null &&DateTime.Now.Date< everyImg.UploadDate)
            {
                return "今天已发布过图片了哦！";
            }
            //创建 新图片记录插入数据库
            EveryImg newimg = new EveryImg();
            newimg.AdminID = adminid;
            newimg.ImgUrl = imgurl;
            newimg.UploadDate = DateTime.Now;

            db.Configuration.ValidateOnSaveEnabled = false;
            db.EveryImg.Add(newimg);
            int count = db.SaveChanges();
            if (count > 0)
            {
                db.Configuration.ValidateOnSaveEnabled = true;
                return "success";
            }
            return "数据库插入失败！";
        }
        #endregion
    }
}
