using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
   public class productToOrderDTO
    {

        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public int SizeId { get; set; }


    }
}
