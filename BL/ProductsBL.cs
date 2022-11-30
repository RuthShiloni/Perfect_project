using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using DAL;
using DAL.Models;
using DTO;

namespace BL
{
    public class ProductsBL: IProductsBL
    {
        private IProductsDAL ProductsDAL;
        IMapper mapper;

        public ProductsBL(IProductsDAL productsDAL)
        {
            ProductsDAL = productsDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }

        public bool AddProduct(ProductsDTO newProduct)
        {
            Product currentProducts = mapper.Map<ProductsDTO, Product>(newProduct);
            return ProductsDAL.AddProduct(currentProducts);
        }

        public bool DeleteProduct(int id)
        {
            return ProductsDAL.DeleteProduct(id);
        }

        public List<ProductsDTO> GetAllProducts()
        {
            return mapper.Map<List<Product>, List<ProductsDTO>>(ProductsDAL.GetAllProducts());
        }

        
        public ProductsDTO GetProductById(int id)
        {
            Product product = ProductsDAL.GetProductById(id);
            return mapper.Map<Product, ProductsDTO>(product);
        }

       
        public bool UpdateProduct(int id, ProductsDTO product)
        {
            Product currentProduct = mapper.Map<ProductsDTO, Product>(product);
            return ProductsDAL.UpdateProduct(id, currentProduct);
        }

    }
}
