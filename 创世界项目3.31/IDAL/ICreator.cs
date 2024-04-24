using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface ICreator
    {
        //获取所有创作者
        IEnumerable<Creator> Get_tot_creator();

        //删除创作者ById
        string delete_creator(string cid);

        //修改(针对系统属性可修改)  alter_creatorsp
        string alter_creatorsp(Creator creator);

        //添加创作者
        string add_creatorp(string id,string type, string pricerange);

        //查找创作者
        IEnumerable<Creator> serach_creator(string name, string type, DateTime? date);

        //根据ID查找对应创作者
        Creator get_creator_byid(string id);

        //根据订单申请表编号找—创作者
        Creator get_creator_byoaid(int id);

        //test
        IEnumerable<Creator> get_creators_byoaid(int id);

        //冻结创作者
        string freeze_creator(string cid);

        //解冻创作者
        string unfreeze_creator(string cid);

        //获取首页 所有创作者的创作类型及对应数量，生成列返回
        List<object> get_index_p1_json();

    }
}
