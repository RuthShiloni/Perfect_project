using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace DAL
{
    public class ProductToOrderDAL : IProductToOrderDAL
    {
        PerfectContext context = new PerfectContext();

        public bool AddProductToOrder(ProductToOrder newProductToOrder)
        {
            try
            {
                context.Add(newProductToOrder);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteProductToOrder(int id)
        {
            try
            {
                ProductToOrder currentProductToOrder = context.ProductToOrders.SingleOrDefault(x => x.Id == id);
                context.Remove(currentProductToOrder);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<ProductToOrder> GetAllProductToOrder()
        {
            IList<ProductToOrder> allProductToOrder = context.ProductToOrders.Include(x => x.Product).ToList();
            return allProductToOrder;
        }

        public ProductToOrder GetProductToOrderById(int id)
        {
            ProductToOrder currentProductToOrder = context.ProductToOrders.Where(x => x.Id == id).Include(x => x.Product).Include(x => x.Size).SingleOrDefault();
            return currentProductToOrder;
        }

        public bool UpdateProductToOrder(int id, ProductToOrder productToOrder)
        {
            try
            {
                ProductToOrder currentProductToOrder = context.ProductToOrders.SingleOrDefault(x => x.Id == id);
                context.Entry(currentProductToOrder).CurrentValues.SetValues(currentProductToOrder);
                productToOrder.Id = id;
                context.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                throw ex;
            }
        }





    }
}
