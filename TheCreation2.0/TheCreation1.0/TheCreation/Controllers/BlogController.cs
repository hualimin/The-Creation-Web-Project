using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using BLL;

namespace TheCreation_Manager.Controllers
{
    public class BlogController : Controller
    {
        BlogManager blogManager = new BlogManager();

        #region  首页
        // GET: Blog
        public ActionResult Index()
        {
            //var result= blogManager.return_hotView_blog().Take(5);
            //ViewBag.HotCommentBlog = blogManager.return_hotComment_blog().Take(5);
            //return View(result);
            var result = blogManager.return_all_blog();
            return View(result);
        }
        #endregion

        #region  返回热门文章
        public ActionResult HotViewBlog()
        {
            var result = blogManager.return_hotView_blog().Take(5);
            //return View(result);
            return PartialView("BlogList1", result);
        }
        #endregion

        #region  返回热评文章
        public ActionResult HotCommentBlog()
        {
            var result = blogManager.return_hotComment_blog().Take(5);
            //return View(result);
            return PartialView("BlogList1", result);
        }
        #endregion

        #region    经验分享
        public ActionResult Exp_Share()
        {
            string typename = "经验分享";
            var result = blogManager.get_blog_byType(typename);
            return View(result);
        }
        #endregion

        #region    干货分享
        public ActionResult UsefulInfo_Share()
        {
            string typename = "干货分享";
            var result = blogManager.get_blog_byType(typename);
            return View(result);
        }
        #endregion

        #region    资源分享
        public ActionResult Source_Share()
        {
            string typename = "资源分享";
            var result = blogManager.get_blog_byType(typename);
            return View(result);
        }
        #endregion

        #region   发布博客
        public ActionResult Up_Blog()
        {
            return View();
        }
        #endregion

        #region  一个上传文件方法，根据参数-文件和要存的路径，返回存好的路径
        [ValidateInput(false)]
        public string UploadFile(HttpPostedFileBase file, string path)// string title, string select, string content, DateTime? date, string type,
        {
            //string resultPath;
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

        #region   发布博客
        [HttpPost]
        [ValidateAntiForgeryToken]
        [ValidateInput(false)]
        public ActionResult Upload_Blog(Blog blog, HttpPostedFileBase cover_up)
        {
            string uid = Session["userid"].ToString();
            if (uid == null)
            {
                return Content("<script>alert('请先登录！');history.go(-1);</script>");
            }

            string upResult = UploadFile(cover_up, "/Upload/BlogImg/BlogCoverImg/");
            blog.CoverImg = upResult;
            blog.PublishDate = DateTime.Now;
            blog.PublisherID = uid.ToString().Trim();

            string result = blogManager.UpBlog(blog);
            if (result== "success")
            {
                return Content("<script>alert('发表成功！');history.go(-1);</script>");
            }

            return Content("<script>alert(' " +result+ " ');history.go(-1);</script>");
        }
        #endregion

        #region  在线留言
        public ActionResult Online()
        {
            return View();
        }
        #endregion

        #region  博客详情
        public ActionResult BlogDetail(int id)
        {
            var result = blogManager.get_blog_ByID(id);
            //浏览次数+1
            blogManager.ViewCountAdd1(id);
            return View(result);
        }
        #endregion

        #region   样式1显示blog集合
        public ActionResult BlogList1()
        {            
            return View();
        }
        #endregion


        #region  返回评论内容ByID
        public ActionResult GetComments(long id)
        {
            var result = blogManager.get_BlogComments_byID(id);
            return PartialView(result);
        }
        #endregion

        #region 分享测试
        public ActionResult BShare()
        {
            return View();
        }
        #endregion

        #region

        #endregion

        #region
        public ActionResult Test()
        {
            return View();
        }
        #endregion

        #region
        [HttpPost]  //发布评论测试
        public ActionResult Test1(string content,long id)
        {
            string uid = Session["userid"].ToString();
            if (uid == null)
            {
                return Content("<script>alert('请先登录！');history.go(-1);</script>");
            }

            BlogComment blogComment = new BlogComment();
            blogComment.BlogID = id;
            blogComment.Content = content;
            blogComment.CommenterID = uid.ToString().Trim();
            blogComment.CommentDate = DateTime.Now;
            string result=blogManager.add_BlogComment(blogComment);
            if (result=="success")
            {
                var view= blogManager.get_BlogComments_byID(id);
                return PartialView("GetComments", view);
            }
            return Content(result);
        }
        #endregion

        #region SearchResult
        public ActionResult SearchResult(string keywords)
        {
            ViewBag.keywords = keywords;
            var result = blogManager.search_blog(keywords);
            return View(result);
        }
        #endregion

    }
}