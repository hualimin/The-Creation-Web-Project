using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IEveryImg
    {
        //上传每日一展图片，修改数据库
        string UploadImg(string adminid,string imgurl);
    }
}
