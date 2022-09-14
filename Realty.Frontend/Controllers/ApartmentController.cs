using Microsoft.AspNetCore.Mvc;
using Realty.Business.Models;
using Realty.DAL.Repositories;
using Realty.DAL;

namespace Realty.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : Controller
    {
        private readonly EFGenericRepository<Apartment, RealtyContext> _apartmentRepository;

        public ApartmentController(EFGenericRepository<Apartment, RealtyContext> apartmentRepository)
        {
            _apartmentRepository = apartmentRepository;
        }

        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll()
        {
            List<Apartment> apartments = _apartmentRepository.GetAllWithoutTracking().ToList();

            return Json(new { apartmentsInfo = apartments });
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue) return NotFound("Id not provided");

            Apartment apartment = _apartmentRepository.GetWithoutTracking(x => x.Id == id.Value);

            return Json(new { apartmentInfo = apartment });
        }
    }
}
