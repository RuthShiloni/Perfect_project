using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class OrdersDAL : IordersDAL
    {
        PerfectContext context = new PerfectContext();
        public bool AddOrder(Order newOrder)
        {
            try
            {
                context.Orders.Add(newOrder);
                context.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteOrder(int id)
        {
            try
            {
                Order currentOrder = context.Orders.SingleOrDefault(x => x.Id == id);
                context.Remove(currentOrder);
                context.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public IList<Order> GetAllOrders()
        {
            IList<Order> allOrders = context.Orders.ToList();
            return allOrders;
        }

        public Order GetOrderById(int id)
        {
            Order order = context.Orders.SingleOrDefault(x => x.Id == id);
            return order;
        }
    }
}
