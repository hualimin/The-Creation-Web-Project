using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
using IDAL;

namespace SqlDAL
{
   public class SqlCreatorOrders:Basedb,ICreatorOrders
    {
        //创作者
        //全部订单
        public IEnumerable<Orders> All_Cretor_Orders(string id)
        {
            var allCretor = db.Orders.Where(b => b.CreatorId == id && b.OrderState != "待接受").OrderByDescending(b => b.FinishDate).ToList();
            return allCretor;
        }
        //待接受订单
        public IEnumerable<Orders> UnqAccept_Cretor_Orders(string id)
        {
            var unqAcceptCretor = db.Orders.Where(b => b.CreatorId == id && b.OrderState == "待接受").OrderBy(b => b.BuyDate).ToList();
            return unqAcceptCretor;
        }
        //已完成订单
        public IEnumerable<Orders> Finished_Cretor_Orders(string id)
        {
            var finishedCretor = db.Orders.Where(b => b.CreatorId == id && (b.OrderState == "完美交付" || b.OrderState == "待验收")).OrderByDescending(b => b.BuyDate).ToList();
            return finishedCretor;
        }
        //未完成订单
        public IEnumerable<Orders> UnFinished_Cretor_Orders(string id)
        {
            var unfinishedCretor = db.Orders.Where(b => b.CreatorId == id && b.OrderState == "创作中").OrderBy(b => b.FinishDate).ToList();
            return unfinishedCretor;
        }
        //创作者接受订单
        public string Accept(int id)
        {
            Orders order = db.Orders.Find(id);
            order.OrderState = "创作中".ToString().Trim();
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }
        //创作者交付订单，记录实际完成时间，等待用户验收
        public string SubmitOrder(int id)
        {
            Orders order = db.Orders.Find(id);
            order.OrderState = "待验收".ToString().Trim();
            order.ActualFinishDate = DateTime.Now;
            if (db.SaveChanges() >= 1)
            {
                return "success";
            }
            else
            {
                return "fail";
            }
        }

        public string ShowCreatorEvaluates(string creatorid)
        {
            throw new NotImplementedException();
        }

        //展示创作者的评价
        //public string ShowCreatorEvaluates(string creatorid)
        //{
        //    Creator creator = db.Creator.Find(creatorid);
        //    if (creator == null)
        //    {
        //        return "fail";
        //    }
        //    var Evaluates = db.Creator_Evaluate.Where(b => b.CreatorId == creatorid).ToList();
        //    ViewBag.CreatorNmae = creator.Users.UsersName;
        //    ViewBag.Count = db.Creator_Evaluate.Where(b => b.CreatorId == creatorid).Count();
        //}
    }
}
