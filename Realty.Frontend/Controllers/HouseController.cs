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
            House firstHouse = new()
            {
                Id = 1,
                CreationDateTime = DateTime.Now,
                Address = "Unknow",
                MaxFloor = 6,
                BuildYear = 1968,
                WallMaterial = "brick"
            };
            House secondHouse = new()
            {
                Id = 2,
                CreationDateTime = DateTime.Now,
                Address = "Unknow2",
                MaxFloor = 25,
                BuildYear = 2005,
                WallMaterial = "brick"
            };
            List<House> houses = new() { firstHouse, secondHouse };

            return Json(new { housesInfo = houses });
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue) return NotFound("Id not provided");
            House houseInfo = new()
            {
                Id = 1, CreationDateTime = DateTime.Now, Address = "Unknow",
                MaxFloor = 6, BuildYear = 1968, WallMaterial = "brick"
            };

            return Json(new { houseInfo = houseInfo });
        }
    }
}
