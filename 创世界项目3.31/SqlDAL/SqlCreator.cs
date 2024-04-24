using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IDAL;
using Models;


namespace SqlDAL
{
    class SqlCreator : Basedb, ICreator
    {
        #region  获取所有创作者
        public IEnumerable<Creator> Get_tot_creator()
        {
            var creators = db.Creator.ToList();
            return creators;
        }
        #endregion

        #region  删除创作者ById
        public string delete_creator(string cid)
        {
            var creator = db.Creator.Find(cid);
            ////不能直接删除，创作者涉及订单表等相关，需要级联删除
            //db.Creator.Remove(creator);
            return string.Format("调用存储过程删除创作者 {0}", cid) ;
        }
        #endregion

        #region  修改(针对系统属性可修改)
        public string alter_creatorsp(Creator creator)
        {
            string id = creator.CreatorId;
            Creator c1 = db.Creator.Find(id);
            if (c1 == null)
            {
                return "未收到主键创作者ID！";
            }
            else
            {
                c1.CreatorLevel = creator.CreatorLevel;
                c1.State = creator.State;
                c1.CreatorCredit = creator.CreatorCredit;
                c1.FinishedCount = creator.FinishedCount;
                c1.EfctCmpltCnt = creator.EfctCmpltCnt;
                if (c1.CreatorLevel == creator.CreatorLevel && c1.State == creator.State && c1.CreatorCredit == creator.CreatorCredit && c1.FinishedCount == creator.FinishedCount && c1.EfctCmpltCnt == creator.EfctCmpltCnt)
                {
                    return "你好像没有修改噢！";
                }

                if (db.SaveChanges() > 0)
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

        #region  添加创作者
        public string add_creatorp(string id, string type, string pricerange)
        {
            //判断是否是已存在用户
            if (db.Users.Find(id)==null)
            {
                return "该ID还不是现有用户，无资格申请创作者噢！";
            }
            //判断是否已经是创作者
            if (db.Creator.Find(id)!=null)
            {
                return "该用户已经是创作者，不可重复申请！";
            }

            Creator creator = new Creator();
            creator.CreatorId = id.ToString();
            creator.CertificationDate = DateTime.Now;
            creator.CreateType = type;
            creator.CreatorCredit = (int)100;
            creator.State = "正常";
            creator.CreatorLevel = (int)1;
            creator.FinishedCount = (int)0;
            creator.GoodRate = (decimal)0;
            creator.EfctCmpltCnt = (int)0;
            creator.PriceRange = pricerange;
            db.Creator.Add(creator);
            if (db.SaveChanges() > 0)
            {
                return "添加成功！";
            }
            return "添加失败";
        }
        #endregion

        #region 查找创作者
        public IEnumerable<Creator> serach_creator(string name, string type, DateTime? date)
        {
            var creators = db.Creator.Where(b => b.Users.UsersName.Contains(name) && b.CreateType.Contains(type) && (b.CertificationDate < date || date==null)).ToList();
            return creators;
        }
        #endregion

        #region 根据ID查找对应创作者
        public Creator get_creator_byid(string id)
        {
            return db.Creator.Find(id);
        }
        #endregion

        #region  根据订单申请表编号找—创作者
        public Creator get_creator_byoaid(int id)
        {
            //先找到其相关联订单
            var oa = db.OrderApply.Find(id);
            var od = db.Orders.Find(oa.QOrderId);
            //var creator = db.Creator.Where(b => b.CreatorId == od.CreatorId).FirstOrDefault();
            //return creator;

            return db.Creator.Where(b => b.CreatorId == od.CreatorId).FirstOrDefault();
        }
        #endregion

        #region get_creators_byoaid
        public IEnumerable<Creator> get_creators_byoaid(int id)
        {
            var result = db.Creator.OrderByDescending(b => b.CertificationDate).Take(1).ToList();
            return result;
            ////先找到其相关联订单
            //var oa = db.OrderApply.Find(id);
            //var od = db.Orders.Find(oa.QOrderId);
            //var creator = db.Creator.Where(b => b.CreatorId == od.CreatorId).ToList();
            ////return db.Creator.Find(od.CreatorId);
            //return creator;
        }
        #endregion
        
       
        #region  冻结创作者
        public string freeze_creator(string cid)
        {
            var creator = db.Creator.Find(cid);
            if (creator==null)
            {
                return "该创作者不存在！";
            }
            if (creator.State=="冻结")
            {
                return "已冻结，不用重复冻结！";
            }
            creator.State = "冻结";
            if (db.SaveChanges()>0)
            {
                return "success";
            }
            return "冻结失败！";
        }
        #endregion

        #region  解冻创作者
        public string unfreeze_creator(string cid)
        {
            var creator = db.Creator.Find(cid);
            if (creator == null)
            {
                return "该创作者不存在！";
            }
            if (creator.State == "正常")
            {
                return "状态正常，无需解冻！";
            }
            creator.State = "正常";
            if (db.SaveChanges() > 0)
            {
                return "success";
            }
            return "解冻失败！";
        }
        #endregion

        #region   获取首页 所有创作者的创作类型及对应数量，生成列返回
        public List<object> get_index_p1_json()
        {
            //查找所有创作者，返回列表
            //筛选出所有非空的不同创作类型，存入列表
            //依次遍历 创作类型列表，获得每个类型的已有创作者人数  和对应类型一同放入匿名类，add进object列表

            List<object> result = new List<object>();
            IEnumerable<Creator> creators = db.Creator.ToList();
            IEnumerable<string> types = db.Creator.Select(b => b.CreateType).Distinct().ToList();
            foreach (var item in types)
            {
                int count = db.Creator.Where(b => b.CreateType == item).Count();
                result.Add(new { value = count, name = item });
            }

            return result;
        }
        #endregion



        #region

        #endregion

        #region

        #endregion

        #region

        #endregion
    }
}
