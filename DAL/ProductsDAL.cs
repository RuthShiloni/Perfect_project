using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
   public class ProductsDAL: IProductsDAL
    {

        PerfectContext contex = new PerfectContext();
        public bool AddProduct(Product newProduct)
        {
            try
            {
                contex.Add(newProduct);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteProduct(int id)
        {
            try
            {
                Product currentProduct = contex.Products.SingleOrDefault(x => x.Id == id);
                contex.Remove(currentProduct);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Product> GetAllProducts()
        {
            List<Product> allProduct = contex.Products
                .Include(x => x.SizePrices)
                .AsNoTracking()
                .ToList();
            return allProduct;
        }

        public Product GetProductById(int id)
        {
            Product currentProduct = contex.Products.Where(x => x.Id == id).Include(x => x.SizePrices).AsNoTracking().SingleOrDefault();
            return currentProduct;
        }

        public bool UpdateProduct(int id, Product product)
        {
            try
            {
                Product currentProduct = contex.Products.SingleOrDefault(x => x.Id == id);
                contex.Entry(currentProduct).CurrentValues.SetValues(product);
                product.Id = id;
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<Product> GetAllProductByCate(int categoryId)
        {
            IList<Product> product = contex.Products.Where(x => x.CategId == categoryId).Include(x => x.SizePrices).AsNoTracking().ToList();
            return product;
        }



    }
}
