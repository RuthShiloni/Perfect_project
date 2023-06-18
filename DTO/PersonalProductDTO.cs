using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class PersonalProductDTO
    {
        public int id { get; set; }
        public int? OrderId { get; set; }
        public int ShapeId { get; set; }
        public int ColorId1 { get; set; }
        public int ColorId2 { get; set; }
        public int CreamId { get; set; }
        public int LayersId { get; set; }
        public string Picture { get; set; }
        public string Text { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public int UserId { get; set; }
        public CreamDTO cream { get; set; }
        public LayersDTO layers { get; set; }
        public ShapeDTO shape { get; set; }
        public ColorDTO ColorId1Navigation { get; set; }
        public ColorDTO ColorId2Navigation { get; set; }

    }
}
