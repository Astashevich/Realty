using Microsoft.AspNetCore.Mvc;

namespace Realty.Frontend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
