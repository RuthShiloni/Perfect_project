﻿using AutoMapper;
using DAL;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class OrdersBL : IordersBL
    {
        private IordersDAL ordersDAL;
        IMapper mapper;

        public OrdersBL(IordersDAL orders)
        {
            ordersDAL = orders;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            mapper = config.CreateMapper();
        }
        public OrdersDTO AddOrder(OrdersDTO newOrder)
        {
            Order currentOrder = mapper.Map<OrdersDTO, Order>(newOrder);
            return mapper.Map<Order , OrdersDTO>(ordersDAL.AddOrder(currentOrder));
        }

        public bool DeleteOrder(int id)
        {
            return ordersDAL.DeleteOrder(id);
        }

        public IList<OrdersDTO> GetAllOrders()
        {
            return mapper.Map<IList<Order>, IList<OrdersDTO>>(ordersDAL.GetAllOrders());
        }

        public OrdersDTO GetOrderById(int id)
        {
            Order currentOrder = ordersDAL.GetOrderById(id);
            return mapper.Map<Order, OrdersDTO>(currentOrder);
        }
        public IList<OrdersDTO> GetAllOrdersByUserId(int id)
        {
            IList<OrdersDTO> allOrders = mapper.Map<IList<Order>, IList<OrdersDTO>>(ordersDAL.GetAllOrdersByUserId(id));
            return allOrders;
        }
    }
}
