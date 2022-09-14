using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Realty.Business.Models;
using Realty.DAL;
using Realty.DAL.Repositories;
using Xunit;

namespace Realty.Tests
{
    public class ConnectionTest
    {
        public IConfiguration Configuration { get;}
        public ConnectionTest(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private RealtyContext GetContext()
        {
            string connectionString = Configuration.GetConnectionString("RealtyContext");
            DbContextOptionsBuilder<RealtyContext> optionsBuilder = new DbContextOptionsBuilder<RealtyContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new RealtyContext(optionsBuilder.Options);
        }

        //[Fact]
        public void HouseConnectionTest()
        {
            using (var realtyContext = GetContext())
            {
                House foundHouse = realtyContext.Houses.Find(1);
                Assert.NotNull(foundHouse);
            }
        }

        [Fact]
        public void House_GetWithRepository()
        {
            using (var realtyContext = GetContext())
            using (EFGenericRepository<House, RealtyContext> houseRepository = new EFGenericRepository<House, RealtyContext>(realtyContext))
            {
                List<House> houses = houseRepository.GetAllWithoutTracking()
                    .Take(2)
                    .ToList();

                Assert.NotEmpty(houses);
            }
        }

        [Fact]
        public void Apartment_GetWithRepository()
        {
            using (var realtyContext = GetContext())
            using (EFGenericRepository<Apartment, RealtyContext> apartmentRepository = new EFGenericRepository<Apartment, RealtyContext>(realtyContext))
            {
                List<Apartment> apartments = apartmentRepository.GetAllWithoutTracking()
                    .Take(3)
                    .ToList();

                Assert.NotEmpty(apartments);
            }
        }
    }
}
