using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class PersonalProduct
    {
        public int Id { get; set; }
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

        public virtual Color ColorId1Navigation { get; set; }
        public virtual Color ColorId2Navigation { get; set; }
        public virtual Cream Cream { get; set; }
        public virtual Layer Layers { get; set; }
        public virtual Order Order { get; set; }
        public virtual Shape Shape { get; set; }
    }
}
