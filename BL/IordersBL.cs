using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public interface IordersBL
    {
        public IList<OrdersDTO> GetAllOrders();

        public OrdersDTO GetOrderById(int id);

        public bool DeleteOrder(int id);

        public bool AddOrder(OrdersDTO newOrder);
    }
}
