﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class OrdersDTO
    {   
        public int id { get; set; }
        public int UserId { get; set; }
        public string Delivery { get; set; }
        public DateTime Date { get; set; }
        public DateTime PickupDate { get; set; }
        public int DeliveryPrice { get; set; }
        public bool Delivered { get; set; }
        public int SumPrice { get; set; }
        public PersonalProductDTO[] PersonalProducts { get; set; }
        public productToOrderDTO[] ProductToOrders { get; set; }

    }
}
