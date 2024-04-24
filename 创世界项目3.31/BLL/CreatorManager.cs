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
    public class CreatorManager
    {
        ICreator icreator = DataAccess.CreateCreator();

        #region  获取所有创作者
        public IEnumerable<Creator> Get_tot_creator()
        {
            return icreator.Get_tot_creator();
        }
        #endregion

        #region   修改创作者信息(修改不可修改的部分)  alter_creatorsp
        public string alter_creatorsp(Creator creator)
        {
            return icreator.alter_creatorsp(creator);
        }
        #endregion

        #region  查找相关创作者
        public IEnumerable<Creator> serach_creator(string name, string type, DateTime? date)
        {
            return icreator.serach_creator(name, type, date);
        }
        #endregion

        #region  冻结创作者身份
        public string freeze_creator(string cid)
        {
            return icreator.freeze_creator(cid);
        }
        #endregion

        #region  恢复创作者身份
        public string unfreeze_creator(string cid)
        {
            return icreator.unfreeze_creator(cid);
        }
        #endregion

        #region 删除创作者
        public string delete_creator(string cid)
        {
            return icreator.delete_creator(cid);
        }
        #endregion

        #region  添加创作者
        public string add_creatorp(string id, string type, string pricerange)
        {
            return icreator.add_creatorp(id,type,pricerange);
        }
        #endregion

        #region 根据ID查找对应创作者
        public Creator get_creator_byid(string id)
        {
            return icreator.get_creator_byid(id);
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
