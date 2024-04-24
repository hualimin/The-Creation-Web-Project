using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DALFactory;
using Models;
using BLL;
using TheCreation_Manager.Models;
using System.Collections;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Runtime.Serialization;

namespace TheCreation_Manager.Controllers
{
    public class UserController : Controller
    {
        UserManager userManager = new UserManager();
        CreatorManager creatorManager = new CreatorManager();

        #region  冻结用户
        public ActionResult Freeze(string id)
        {
            string result = userManager.freeze_user(id);
            return Content(result);
        }
        #endregion

        #region 解冻用户
        public ActionResult UnFreeze(string id)
        {
            string result = userManager.unfreeze_user(id);
            return Content(result);
        }
        #endregion

        #region 添加用户  get
        public ActionResult add_users()
        {
            return View();
        }
        #endregion

        #region 添加用户  post
        [HttpPost]
        public ActionResult add_usersp(string uid,string pwd)
        {
            var u = userManager.add_users(uid, pwd);
            return Content(u);
            //return Content(uid+pwd);
        }
        #endregion

        #region 查找四个条件用户
        public ActionResult serach_users(string name,string sex,string hobby,string state)
        {
            var searched_users = userManager.serach_users(name,sex,hobby,state);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = searched_users.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = searched_users.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  修改用户--获取id修改对应用户信息
        public ActionResult alter_users(string id)
        {
            ViewBag.uid = id;
            return View();
        }
        #endregion

        #region  一个把前端穿的json字符串序列化的方法
        public static T ParseFromJson<T>(string szJson)
        {
            T obj = Activator.CreateInstance<T>();  //注意 要有T类型要有无参构造函数
            using (MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(szJson)))
            {
                DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());
                return (T)serializer.ReadObject(ms);
            }
        }
        #endregion

        #region  Post修改用户--获取id修改对应用户信息
        [HttpPost]
        public ActionResult alter_usersp(string json)
        {
            Users j = ParseFromJson<Users>(json);
            string result = userManager.alter_user(j);
            //string id = form["uid"].ToString();

            //ViewBag.uid = id;
            return Content(result);
        }
        #endregion

        #region 删除用户
        public ActionResult delete_user(string id)
        {
            string result= userManager.delete_users(id);
            return Content(result);
        }
        #endregion

        #region 批量删除用户———根据选中的id列表循环调用删除方法 ????待修改
        public ActionResult delete_users(string idlist)
        {
            List<Users> _Test = new List<Users>();

            DataContractJsonSerializer _Json = new DataContractJsonSerializer(_Test.GetType());
            byte[] _Using = System.Text.Encoding.UTF8.GetBytes(idlist);
            System.IO.MemoryStream _MemoryStream = new System.IO.MemoryStream(_Using);
            _MemoryStream.Position = 0;

            _Test = (List<Users>)_Json.ReadObject(_MemoryStream);

            Hashtable result=new Hashtable();
            foreach (var id in _Test)
            {
                result.Add(id,userManager.delete_users(id.UsersId));
            }

            //return Content(result.ToString());
            return Content("待完善");
        }
        #endregion

        #region  冻结创作者
        public ActionResult freeze_creator(string cid)
        {
            string result = creatorManager.freeze_creator(cid);
            return Content(result);
        }
        #endregion

        #region 解冻创作者
        public ActionResult unfreeze_creator(string cid)
        {
            string result = creatorManager.unfreeze_creator(cid);
            return Content(result);
        }
        #endregion

        #region   查找创作者
        public ActionResult serach_creator(string name, string type,DateTime? date)
        {
            var serach_creator = creatorManager.serach_creator(name, type, date);
            int page = Convert.ToInt32(Request["page"]);
            int limit = Convert.ToInt32(Request["limit"]);


            //真分页 根据page limit来进行分页
            var page_list = serach_creator.Skip((page - 1) * limit).Take(limit).ToList();
            //var page_list = searched_users.Take(limit).ToList();
            Hashtable table = new Hashtable
            {
                ["code"] = 0,
                ["msg"] = "数据获取成功！",
                ["count"] = serach_creator.Count(),//总条数
                ["data"] = page_list//分页数据
            };
            return Json(table, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  添加创作者 get
        public ActionResult add_creator()
        {
            return View();
        }
        #endregion

        #region  添加创作者 post
        [HttpPost]
        public ActionResult add_creatorp(string cid, string ctype, string price_min, string price_max)
        {
            string price_range = price_min + "-" + price_max;
            string result = creatorManager.add_creatorp(cid, ctype, price_range);
            return Content(result);
         }
        #endregion

        #region  修改创作者--获取id修改对应创作者信息
        public ActionResult alter_creators(string id)
        {
            return View();
        }
        #endregion

        #region  Post修改创作者--获取id修改对应创作者信息
        [HttpPost]
        public ActionResult alter_creatorsp(string json)
        {
            Creator j = ParseFromJson<Creator>(json);
            string result = creatorManager.alter_creatorsp(j);
            //string id = form["uid"].ToString();

            //ViewBag.uid = id;
            return Content(result);
        }
        #endregion

        #region 删除创作者身份
        public ActionResult delete_creator(string cid)
        {
            string result = creatorManager.delete_creator(cid);
            return Content(result);
        }
        #endregion

        #region  

        #endregion

        #region

        #endregion

    }
}
