using Microsoft.AspNetCore.Mvc;
using Realty.Business.Models;

namespace Realty.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : Controller
    {
        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll()
        {
            Apartment firstApartment = new()
            {
                Id = 1,
                CreationDateTime = DateTime.Now,
                HouseId = 1,
                Floor = 4,
                Price = 78000.0f,
                LivingSpace = 42.2,
                RoomAmount = 2
            };
            Apartment secondApartment = new();
            List<Apartment> apartments = new() { firstApartment, secondApartment };

            return Json(new { apartmentsInfo = apartments });
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue) return NotFound("Id not provided");

            Apartment apartment = new()
            {
                Id = 1,
                CreationDateTime = DateTime.Now,
                HouseId = 1,
                Floor = 4,
                Price = 78000.0f,
                LivingSpace = 42.2f,
                RoomAmount = 2
            };

            return Json(new { apartmentInfo = apartment });
        }
    }
}
