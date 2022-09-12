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
            Apartment firstApartment = new();
            Apartment secondApartment = new();
            List<Apartment> apartments = new() { firstApartment, secondApartment };

            return Json(apartments);
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue) return NotFound("Id not provided");

            Apartment apartment = new();

            return Json(apartment);
        }
    }
}
