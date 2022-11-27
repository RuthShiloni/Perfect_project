using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Product
    {
        public Product()
        {
            ProductToOrders = new HashSet<ProductToOrder>();
            ShoppingCarts = new HashSet<ShoppingCart>();
            SizePrices = new HashSet<SizePrice>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public string Allergens { get; set; }
        public string Img { get; set; }
        public int CategId { get; set; }
        public string Type { get; set; }

        public virtual Category Categ { get; set; }
        public virtual ICollection<ProductToOrder> ProductToOrders { get; set; }
        public virtual ICollection<ShoppingCart> ShoppingCarts { get; set; }
        public virtual ICollection<SizePrice> SizePrices { get; set; }
    }
}
