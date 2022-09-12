using Microsoft.AspNetCore.Mvc;
using Realty.Business.Models;

namespace Realty.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseController : Controller
    {
        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll()
        {
            House firstHouse = new();
            House secondHouse = new();
            List<House> houses = new() { firstHouse, secondHouse };

            return Json(houses);
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue) return NotFound("Id not provided");
            House house = new();

            return Json(house);
        }
    }
}
