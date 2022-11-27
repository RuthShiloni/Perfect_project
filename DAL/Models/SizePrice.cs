using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class SizePrice
    {
        public SizePrice()
        {
            ShoppingCarts = new HashSet<ShoppingCart>();
        }

        public int Id { get; set; }
        public int ProductId { get; set; }
        public string Size { get; set; }
        public int Price { get; set; }

        public virtual Product Product { get; set; }
        public virtual ICollection<ShoppingCart> ShoppingCarts { get; set; }
    }
}
