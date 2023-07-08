using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class ProductToOrder
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int SizeId { get; set; }

        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
        public virtual SizePrice Size { get; set; }
    }
}
