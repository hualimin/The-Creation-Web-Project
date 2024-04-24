using Microsoft.VisualStudio.TestTools.UnitTesting;
using TheCreation.Controllers;
using System.Web.Mvc;

namespace TheCreation.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            int a =1;
            Assert.AreEqual(1,a);
        }

        [TestMethod]
        public void Index()
        {
            HomeController controller = new HomeController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNull(result);
        }

        [TestMethod]
        public void Index1()
        {
            TestController controller = new TestController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.AreEqual("Index", result.ViewName);
        }
    }
}
