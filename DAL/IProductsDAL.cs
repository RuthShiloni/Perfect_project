using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
   public interface IProductsDAL
    {
        public bool AddProduct(Product newProduct);
        public bool DeleteProduct(int id);
        public List<Product> GetAllProducts();
        public Product GetProductById(int id);
        public bool UpdateProduct(int id, Product product);
        public IList<Product> GetAllProductByCate(int categoryId);

    }
}
