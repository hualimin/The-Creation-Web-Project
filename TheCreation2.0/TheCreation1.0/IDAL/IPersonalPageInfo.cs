using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
   public interface IPersonalPageInfo
    {
        Users PersonalPageInfo(string id);//主页展示的用户信息  
        Creator PersonalCreator(string id);//个人主页的创作者相关信息
        int TotalFanount(string id);//粉丝数
        int WorksCount(string id);  //作品数  考虑通过视图，作品表中还选出该用户发布的所有作品
        int FocusCount(string id); //关注数
        int OrderCount(string id);//接单数
    }
}
