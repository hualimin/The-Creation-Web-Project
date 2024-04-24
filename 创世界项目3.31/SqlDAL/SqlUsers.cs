using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;

namespace SqlDAL
{
    class SqlUsers : Basedb, IUsers
    {
        #region 添加用户
        public string AddUsers(string id)
        {
            Users user = new Users();
            user.UsersId = id.ToString().Trim();

            user.UsersName = "未命名";
            user.Credit = 100;
            user.Hobby = "未填写";
            user.State = "正常";
            user.HeadUrl = "/image/index_img/图片一.jpg";
            user.RegisteDate = DateTime.Now;
            db.Users.Add(user);
            db.Configuration.ValidateOnSaveEnabled = false;
            int r = db.SaveChanges();
            if (r> 0)
            {
                db.Configuration.ValidateOnSaveEnabled = true;
                return "user_success";
            }
            return "用户表添加失败！";
        }
        #endregion

        #region  获取前10最新用户
        public IEnumerable<Users> Get_newes_10_users()
        {
            var users = db.Users.OrderByDescending(b => b.RegisteDate).Take(10).ToList();
            return users;
        }
        #endregion

        #region 获取总用户
        public IEnumerable<Users> Get_tot_user()
        {
            db.Configuration.ProxyCreationEnabled = false;
            var users = db.Users.ToList();
            return users;
        }
        #endregion

        #region  按条件查找用户，返回结果
        public IEnumerable<Users> serach_users(string name, string sex, string hobby, string state)
        {  
            return db.Users.Where(b => b.UsersName.Contains(name)&& b.Sex.Contains(sex) && b.Hobby.Contains(hobby) &&b.State.Contains(state)).ToList();
        }
        #endregion

        #region  删除用户- 调存储过程级联删除用户
        public string delete_users(string id)
        {
            //Users users = db.Users.Find(id);
            //db.Users.Remove(users);
            //if (db.SaveChanges() > 0)
            //{
            //    return "success";
            //}
            return "删除id为"+id+"用户。还没删除。思路：调用存储过程，级联删除.";
        }
        #endregion

        #region 冻结用户
        public string freeze_user(string id)
        {
            Users users = db.Users.Find(id);
            if (users.State == "冻结")
            {
                return "该用户已被冻结，无需再次冻结！";
            }

            users.State = "冻结";
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "错误";
        }

        #endregion

        #region 解冻用户
        public string unfreeze_user(string id)
        {
            Users users = db.Users.Find(id);
            if (users.State== "正常")
            {
                return "该用户已正常，无需解冻！";
            }

            users.State = "正常";
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "错误";
        }

        #endregion

        #region  修改用户 仅修改用户等级，经验值，信誉度，下单数，退单数
        public string alter_user(Users users)
        {
            string id = users.UsersId;
            Users u1 = db.Users.Find(id);
            if (u1==null)
            {
                return "你这是传了什么给我？ID都没有？";
            }
            else{
                u1.UsersLevel = users.UsersLevel;
                u1.Exp = users.Exp;
                u1.Credit = users.Credit;
                u1.OrderCount = users.OrderCount;
                u1.ChargebackCount = users.ChargebackCount;

                if (db.SaveChanges()>0)
                {
                    return "success";
                }
                else
                {
                    return "怎么修改失败了嘞？你再看看哪里错了。";
                }
            }
        }
        #endregion

        #region   根据ID返回对应的用户
        public Users get_user_byid(string id)
        {
            return db.Users.Find(id);
        }
        #endregion

        #region   根据订单申请表编号找—用户
        public Users get_user_byoaid(int id)
        {
            //找到对应申诉订单的申诉人对象
            //return db.OrderApply.Where(b => b.ApplyId == id).FirstOrDefault().Users;
            var or = db.OrderApply.Find(id);
            return db.Users.Find(or.UsersId);
        }
        #endregion

    }
}
