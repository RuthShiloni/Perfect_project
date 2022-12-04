using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class ShoppingCartDTO
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int IdSize { get; set; }

    }
}
