//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ShopOrder
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ShopOrder()
        {
            this.ShopEvaluate = new HashSet<ShopEvaluate>();
            this.ShopOrderDetail = new HashSet<ShopOrderDetail>();
        }
    
        public long OrderID { get; set; }
        public string UsersId { get; set; }
        public long AddID { get; set; }
        public System.DateTime BuyDate { get; set; }
        public string BuyState { get; set; }
        public decimal TotAmt { get; set; }
        public string PayMethod { get; set; }
        public string SendBy { get; set; }
    
        public virtual RcptAddress RcptAddress { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ShopEvaluate> ShopEvaluate { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ShopOrderDetail> ShopOrderDetail { get; set; }
        public virtual Users Users { get; set; }
    }
}
