using Microsoft.EntityFrameworkCore;
using Realty.Business.Models;

namespace Realty.DAL.Repositories
{
    public class EFGenericRepository<TEntity, TContext> : IDisposable
        where TEntity : class
        where TContext : DbContext
    {
        private TContext _dbContext;
        private DbSet<TEntity> _dbSet;
        private bool _disposed;

        public EFGenericRepository(TContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = dbContext.Set<TEntity>();
        }

        public TEntity Get(int id)
        {
            return _dbSet.Find(id);
        }

        public TEntity GetWithoutTracking(Func<TEntity, bool> condition)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(condition);
        }

        public IQueryable<TEntity> GetAll()
        {
            return _dbSet;
        }

        public IQueryable<TEntity> GetAllWithoutTracking()
        {
            return _dbSet.AsNoTracking();
        }

        public void Add(TEntity house)
        {
            _dbSet.Add(house);
        }

        public void Delete(TEntity house)
        {
            _dbSet.Remove(house);
        }

        public void Update(TEntity house)
        {
            _dbContext.Entry(house).State = EntityState.Modified;
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if(!_disposed)
            {
                if(disposing)
                {
                    _dbContext.Dispose();
                }
            }
            _disposed = true;

        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
