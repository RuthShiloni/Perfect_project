using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using DTO;
namespace BL
{
   public interface IProductsBL
    {
        public bool AddProduct(ProductsDTO newProduct);
        public bool DeleteProduct(int id);
        public List<ProductsDTO> GetAllProducts();
        public ProductsDTO GetProductById(int id);
        public bool UpdateProduct(int id, ProductsDTO product);


    }
}
