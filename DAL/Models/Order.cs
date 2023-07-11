using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Order
    {
        public Order()
        {
            PersonalProducts = new HashSet<PersonalProduct>();
            ProductToOrders = new HashSet<ProductToOrder>();
        }

        public int Id { get; set; }
        public int UserId { get; set; }
        public string Delivery { get; set; }
        public DateTime Date { get; set; }
        public DateTime PickupDate { get; set; }
        public int DeliveryPrice { get; set; }
        public bool Delivered { get; set; }
        public int SumPrice { get; set; }

        public virtual ICollection<PersonalProduct> PersonalProducts { get; set; }
        public virtual ICollection<ProductToOrder> ProductToOrders { get; set; }
    }
}
