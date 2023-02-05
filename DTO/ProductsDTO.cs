using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class ProductsDTO
    {

        public int id { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public string Allergens { get; set; }
        public string Img { get; set; }
        public int CategId { get; set; }
        public string Type { get; set; }
        public SizePriceDTO[] SizePrices { get; set; }

    }
}
