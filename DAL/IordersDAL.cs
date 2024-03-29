﻿using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IordersDAL
    {
        public IList<Order> GetAllOrders();

        public Order GetOrderById(int id);

        public bool DeleteOrder(int id);

        public Order AddOrder(Order newOrder);
        public IList<Order> GetAllOrdersByUserId(int id);
    }
}
