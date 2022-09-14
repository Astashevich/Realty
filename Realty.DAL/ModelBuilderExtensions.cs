using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Realty.DAL
{
    public static class ModelBuilderExtensions
    {
        public static void RemovePluralizingTableNameConventions(this ModelBuilder modelBuilder)
        {
            foreach(IMutableEntityType entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.SetTableName(entity.DisplayName());
            }
        }
    }
}
