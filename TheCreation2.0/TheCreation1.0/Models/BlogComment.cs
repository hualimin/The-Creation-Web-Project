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
    
    public partial class BlogComment
    {
        public long CommentID { get; set; }
        public string CommenterID { get; set; }
        public long BlogID { get; set; }
        public string Content { get; set; }
        public System.DateTime CommentDate { get; set; }
    
        public virtual Blog Blog { get; set; }
        public virtual Users Users { get; set; }
    }
}
