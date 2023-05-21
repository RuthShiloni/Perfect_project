
using AutoMapper;
using BL;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace perfect
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddScoped<IuserBL, UserBL>();
            services.AddScoped<IuserDAL, UserDAL>();
            services.AddScoped<IpersonalProductBL, PersonalProductBL>();
            services.AddScoped<IPersonalProductDAL, PersonalProductDAL>();
            services.AddScoped<IordersDAL, OrdersDAL>();
            services.AddScoped<IordersBL, OrdersBL>();
            services.AddScoped<IshoppingCartBL, ShoppingCartBL>();
            services.AddScoped<IshoppingCartDAL, ShoppingCartDAL>();
            services.AddScoped<IshapeBL, ShapeBL>();
            services.AddScoped<IshapeDAL, ShapeDAL>();
            services.AddScoped<IlayersBL, LayersBL>();
            services.AddScoped<IlayersDAL, LayersDAL>();
            services.AddScoped<IProductsBL, ProductsBL>();
            services.AddScoped<IProductsDAL, ProductsDAL>();
            services.AddScoped<ICategoriesBL, CategoriesBL>();
            services.AddScoped<ICategoriesDAL, CategoriesDAL>();
            services.AddScoped<IaddressDAL, AddressDAL>();
            services.AddScoped<IAddressBL, AddressBL>();
            services.AddScoped<IProductsBL, ProductsBL>();
            services.AddScoped<IProductsDAL, ProductsDAL>();
            services.AddScoped<ISizePriceBL, SizePriceBL>();
            services.AddScoped<ISizePriceDAL, SizePriceDAL>();
           
            services.AddScoped<IColorBL, ColorBL>();
            services.AddScoped<IColorDAL, ColorDAL>();

            services.AddScoped<ICreamBL, CreamBL>();
            services.AddScoped<ICreamDAL, CreamDAL>();


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "perfect", Version = "v1" });
            });
            services.AddCors();
            services.Configure<FormOptions>(o => 
            { 
                o.ValueLengthLimit = int.MaxValue; 
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
           options.WithOrigins("http://localhost:4200")
           .AllowAnyMethod()
           .AllowAnyHeader());

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions() { 
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                RequestPath = new PathString("/Resources") });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "perfect v1"));
            }   

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
