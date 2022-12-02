using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class ProductToOrderDAL
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
            IList<ProductToOrder> allProductToOrder = context.ProductToOrders.ToList();
            return allProductToOrder;
        }

        public ProductToOrder GetProductToOrderById(int id)
        {
            ProductToOrder currentProductToOrder = context.ProductToOrders.SingleOrDefault(x => x.Id == id);
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
