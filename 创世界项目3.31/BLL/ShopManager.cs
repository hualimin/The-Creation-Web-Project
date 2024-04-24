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
    public class ShopManager
    {
        IShopProductType ishopProductType = DataAccess.CreateShopProductType();
        IShopProductTag ishopProductTag = DataAccess.CreateShopProductTag();
        IShopProduct ishopProduct = DataAccess.CreateShopProduct();
        IShopInfoMore ishopInfoMore = DataAccess.CreateShopInfoMore();
        ISProductSubClass isProductSubClass = DataAccess.CreateSProductSubClass();
        IRcptAddress ircptAddress = DataAccess.CreateRcptAddress();
        IShopOrder ishopOrder = DataAccess.CreateShopOrder();
        IShopOrderDetail ishopOrderDetail = DataAccess.CreateShopOrderDetail();
        IShopEvaluate ishopEvaluate = DataAccess.CreateShopEvaluate();
        IShopCart ishopCart = DataAccess.CreateShopCart();



    }
}
