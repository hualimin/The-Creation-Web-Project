using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace IDAL
{
    public interface IApplys
    {
        #region   申请创作者相关
        //添加新的创作者申请
        string add_authen_apply(AuthenApply apply);

        #endregion

        #region   投诉相关
        //添加新的用户投诉
        string add_apply(Applys applys);
        #endregion
    }
}
