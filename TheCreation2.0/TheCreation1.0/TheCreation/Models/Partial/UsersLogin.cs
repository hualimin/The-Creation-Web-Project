using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;

namespace TheCreation.Models.Partial
{
    public class UsersLogin
    {
        [MetadataType(typeof(UserMetadata))]
        public partial class Users
        {
            public string Repwd { get; set; }
        }
        public class UserMetadata
        {
            [DisplayName("用户名")]
            [Required(ErrorMessage = "用户名不能为空！")]
            [Remote("NotExitesUserName", "Home", ErrorMessage = "用户账号已存在")]
            public string userid { get; set; }
            [DisplayName("密码")]
            [Required(ErrorMessage = "密码不能为空！")]
            [RegularExpression("^[0-9a-zA-Z]{6,10}", ErrorMessage = "密码必须由6-10位的字母和数字组成！")]
            public string password { get; set; }
            [DisplayName("确认密码")]
            [Required(ErrorMessage = "确认密码不能为空！")]
            [System.ComponentModel.DataAnnotations.Compare("password", ErrorMessage = "确认密码必须与密码一致！")]
            public string Repwd { get; set; }
        }
    }
}