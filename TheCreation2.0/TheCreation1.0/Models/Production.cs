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
    
    public partial class Production
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Production()
        {
            this.Collect = new HashSet<Collect>();
            this.Comments = new HashSet<Comments>();
            this.likeIt = new HashSet<likeIt>();
        }
    
        public long ProductionId { get; set; }
        public string PublisherNo { get; set; }
        public string ProductionName { get; set; }
        public System.DateTime PublishDate { get; set; }
        public string ProductionContent { get; set; }
        public string ProductionType { get; set; }
        public long ViewCount { get; set; }
        public int LikeCount { get; set; }
        public int CommentCount { get; set; }
        public string Tag { get; set; }
        public string ImgUrl { get; set; }
        public int HotCount { get; set; }
        public string Describe { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Collect> Collect { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Comments> Comments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<likeIt> likeIt { get; set; }
        public virtual Users Users { get; set; }
    }
}
