using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class PersonalProductDTO
    {
        public int OrderId { get; set; }
        public int ShapeId { get; set; }
        public int ColorId1 { get; set; }
        public int? ColorId2 { get; set; }
        public int CreamId { get; set; }
        public int LayersId { get; set; }
        public string Picture { get; set; }
        public string Text { get; set; }
        public int Price { get; set; }
        public int? Quantity { get; set; }
    }
}
