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
        public IActionResult GetAll(int? page, int? pageSize)
        {
            int targetPage = page.GetValueOrDefault(1);
            int targetPageSize = pageSize.GetValueOrDefault(10);

            IQueryable<Apartment> allEntities = _apartmentRepository.GetAllWithoutTracking();

            int totalCount = allEntities.Count();

            List<Apartment> apartmentsInfo = allEntities
                .Skip((targetPage - 1) * targetPageSize)
                .Take(targetPageSize)
                .ToList();

            return Json(new { apartmentsInfo, totalCount });
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
