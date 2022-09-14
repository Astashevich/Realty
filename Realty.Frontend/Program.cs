using Microsoft.EntityFrameworkCore;
using Realty.DAL;
using Realty.DAL.Repositories;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("RealtyContext");

builder.Services.AddDbContext<RealtyContext>(options => 
    options.UseSqlServer(connectionString));
builder.Services.AddScoped(typeof(EFGenericRepository<,>));
builder.Services.AddMvc();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseWebpackDevMiddleware();
}

app.UseRouting();
app.UseStaticFiles();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");

    endpoints.MapControllerRoute(
        name: "api",
        pattern: "api/{controller=Default}/{action=Index}/{id?}"
        );

    endpoints.MapFallbackToController("Index", "Home");
});

app.Run();
