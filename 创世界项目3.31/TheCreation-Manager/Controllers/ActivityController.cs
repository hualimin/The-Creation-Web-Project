using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Collections;
using System.IO;
using BLL;

namespace TheCreation_Manager.Controllers
{
    public class ActivityController : Controller
    {
        ActivityManager activityManager = new ActivityManager();


        #region   上传每日一个图片
        // GET: Activity
        [ValidateInput(false)]
        public ActionResult UploadImg()
        {
            string adminid = Session["aid"].ToString();
            if (adminid == null)
            {
                return Content("请先登录！");
            }
            string uploadpath, oldName, fileName,dbsrc;
            HttpPostedFileBase uploadFile = Request.Files[0];
            try
            {
                uploadpath = Server.MapPath("/Upload/EveryDayImg/");
                dbsrc = "/Upload/EveryDayImg/";
                uploadFile = Request.Files[0];
                oldName = uploadFile.FileName;
                if (!Directory.Exists(uploadpath))
                {
                    Directory.CreateDirectory(uploadpath);
                }
                fileName = DateTime.Now.ToString("yyyy-MM-dd") + Guid.NewGuid().ToString() + uploadFile.FileName.Substring((uploadFile.FileName.LastIndexOf('.')), (uploadFile.FileName.Length - uploadFile.FileName.LastIndexOf('.')));
                //fileName =DateTime.Now.ToString()+oldName+ Guid.NewGuid().ToString();
                //uploadFile.SaveAs(uploadpath + fileName);
                dbsrc += fileName;

                //插入数据库
                string result = activityManager.UploadImg(adminid,dbsrc);

                Hashtable table = new Hashtable
                {
                    ["code"] = 0,
                    ["msg"] = "上传成功！",
                    ["url"] = dbsrc
                };
                if (result!="success")
                {
                    table["msg"] = result;
                }
                uploadFile.SaveAs(uploadpath + fileName);
                return Json(table, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Code = 1001, Message = "上传失败！" + ex.Message });
            }

           
        }
        #endregion

        #region   获得投票类型值，返回对应分布视图
        public ActionResult GetVoteType(int typeID)
        {
            if (typeID==3)
            {
                return PartialView("ProductionChoose");
            }
            else if (typeID==2)
            {
                return PartialView("UserChoose");              
            }
            else
            {
                return PartialView("NormalChoose");
            }
            
        }
        #endregion

        #region   普通投票选择，部分视图
        public ActionResult NormalChoose()
        {
            return PartialView();
        }
        #endregion

        #region   用户投票选择，部分视图
        public ActionResult UserChoose()
        {
            return PartialView();
        }
        #endregion

        #region   作品投票选择，部分视图
        public ActionResult ProductionChoose()
        {
            return PartialView();
        }
        #endregion

        #region   对-用户类型投票进行处理，切割字符串，获取真正的用户id传给IDal层
        public ActionResult DealUserVoted(string select)
        {
            string[] idList = select.Split(',');
            string result = "";
            foreach (var item in idList)
            {
                if (item != null && item != "")
                {
                    result += "选项ID：" + item + "\n";
                }
            }
            return Content(result);
        }
        #endregion

        #region  一个上传文件方法，根据参数-文件和要存的路径，返回存好的路径
        [ValidateInput(false)]
        public string UploadFile(HttpPostedFileBase file, string path)// string title, string select, string content, DateTime? date, string type,
        {
            string resultPath;
            string uploadpath, oldName, fileName, dbsrc;
            try
            {
                uploadpath = Server.MapPath(path);
                dbsrc = path;
                oldName = file.FileName;
                if (!Directory.Exists(uploadpath))
                {
                    Directory.CreateDirectory(uploadpath);
                }
                fileName = DateTime.Now.ToString("yyyy-MM-dd") + Guid.NewGuid().ToString() + file.FileName.Substring((file.FileName.LastIndexOf('.')), (file.FileName.Length - file.FileName.LastIndexOf('.')));
                //fileName =DateTime.Now.ToString()+oldName+ Guid.NewGuid().ToString();
                //uploadFile.SaveAs(uploadpath + fileName);
                dbsrc += fileName;
                file.SaveAs(uploadpath + fileName);
                return dbsrc;
            }
            catch (Exception ex)
            {
                return "异常：" + ex.Message;
            }

        }
        #endregion

        #region   添加用户类/作品类投票  包括投票选项
        //[ValidateAntiForgeryToken]
        [ValidateInput(false)]
        public ActionResult AddRefVote(FormCollection formB1,int type)// string title, string select, string content, DateTime? date, string type,
        {
            // string adminid = Session["aid"].ToString();
            string adminid = "000000000";
            if (adminid == null)
            {
                return Content("请先登录！");
            }
            HttpPostedFileBase file;
            string select,votetype, date, title, content, result;
            if (type==0)  //参数为0，用户类投票
            {//
                file= Request.Files["UserVoteUp"];
                select = formB1["selectedB1"].ToString();
                date = formB1["date"].ToString();
                votetype = "用户";
            }
            else if (type==1)  //参数为1，作品类投票
            {
                file = Request.Files["productionvoteimg"];
                select = formB1["selectedC1"].ToString();
                date = formB1["date1"].ToString();
                votetype = "作品";
            }
            else
            {
                return Content("参数type错误！");

            }           
            title = formB1["title"].ToString();
            content = formB1["content"].ToString();
            DateTime enddate = Convert.ToDateTime(date);

            //保存文件
            string upResult = UploadFile(file, "/Upload/VoteImg/VoteHeadImg/");
            if (upResult!="")
            {
                //插入数据库
                result = activityManager.AddRefVote(title, content, enddate, upResult, adminid, votetype, select);
                string send = " <script>alert('" + result + "！');history.go(-1);</script>";
                return Content(send);
                //return Content(result);
            }
            else
            {
                //return Content("文件保存失败!");
                result = "文件保存失败！";
                string send = " <script>alert('" + result + "！');history.go(-1);</script>";
                return Content(send);
            }

        }
        #endregion

        #region   添加普通投票  不包括投票选项
        [ValidateInput(false)]
        public ActionResult AddNormalVote(FormCollection formA1,HttpPostedFileBase nor_voteimg)
        {
            string adminid = "000000000";
            if (adminid == null)
            {
                return Content("请先登录！");
            }
            string select, votetype, date, title, content, result;
            date = formA1["date2"].ToString();
            votetype = "普通";
            title = formA1["title"].ToString();
            content = formA1["nor_vote_content"].ToString();
            DateTime enddate = Convert.ToDateTime(date);
            //保存文件
            string upResult = UploadFile(nor_voteimg, "/Upload/VoteImg/VoteHeadImg/");
            if (upResult != "")
            {
                //插入数据库
                result = activityManager.AddNorVote(title, content, enddate, upResult, adminid, votetype);
                string send = " <script>alert('投票ID号为：" + result + "！');history.go(-1);</script>";
                return Content(send);
                //return Content(result);
            }
            else
            {
                //return Content("文件保存失败!");
                result = "文件保存失败！";
                string send = " <script>alert('" + result + "！');history.go(-1);</script>";
                return Content(send);
            }
        }
        #endregion

        #region   添加普通投票 的投票选项
        [ValidateInput(false)]
        public ActionResult AddNormalVoted(FormCollection formA2, HttpPostedFileBase votedfile1)
        {
            string adminid = "000000000";
            if (adminid == null)
            {
                return Content("请先登录！");
            }
            string vid,detail,refid, result;
            vid = formA2["voteId"].ToString();
            long voteid=Convert.ToInt64(vid);
            detail = formA2["content1"].ToString();
            refid = "";
            //保存文件
            string upResult = UploadFile(votedfile1, "/Upload/VoteImg/VotedImg/");
            if (upResult != "")
            {
                //插入数据库
                result = activityManager.AddNorVoted(voteid,detail,upResult,refid);
                string send = " <script>alert('" + result + "！');history.go(-1);</script>";
                return Content(send);
                //return Content(result);
            }
            else
            {
                //return Content("文件保存失败!");
                result = "文件保存失败！";
                string send = " <script>alert('" + result + "！');history.go(-1);</script>";
                return Content(send);
            }
        }
        #endregion


        #region   测试
        public ActionResult TestUpFile()
        {
            //HttpPostedFileBase a = Request.Files["nor_voteimg"];
            //return Content(a.FileName);
            return View();
        }
        #endregion


        #region   测试
        //[HttpPost]
        [ValidateInput(false)]
        public ActionResult TestUp1File()
        {
            HttpPostedFileBase a = Request.Files["nor_voteimg"];
            HttpPostedFileBase b = Request.Files[0];
            
            return Content(a.FileName);
        }
        #endregion
    }
}