using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Realty.Business.Models;
using Realty.DAL;
using Realty.DAL.Repositories;

namespace Realty.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HouseController : Controller
    {
        private readonly EFGenericRepository<House, RealtyContext> _houseRepository;

        public HouseController(EFGenericRepository<House, RealtyContext> houseRepository)
        {
            _houseRepository = houseRepository;
        }

        [Route("getall")]
        [HttpGet]
        public IActionResult GetAll()
        {
            List<House> houses = _houseRepository.GetAllWithoutTracking().ToList();

            return Json(new { housesInfo = houses });
        }

        [Route("get")]
        [HttpGet]
        public IActionResult GetSingle(int? id)
        {
            if (!id.HasValue) return NotFound("Id not provided");
            House houseInfo = _houseRepository.GetWithoutTracking(x => x.Id == id.Value);

            return Json(new { houseInfo = houseInfo });
        }
    }
}
