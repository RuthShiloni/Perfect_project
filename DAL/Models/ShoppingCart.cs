﻿using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class ShoppingCart
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int IdSize { get; set; }

        public virtual SizePrice IdSizeNavigation { get; set; }
        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
