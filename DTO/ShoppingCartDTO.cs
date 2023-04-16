using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class ShoppingCartDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int IdSize { get; set; }
        public ProductsDTO product { get; set; }
        public SizePriceDTO IdSizeNavigation { get; set; }

    }
}
