using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Shape
    {
        public Shape()
        {
            PersonalProducts = new HashSet<PersonalProduct>();
        }

        public int Id { get; set; }
        public string Shape1 { get; set; }
        public string Size { get; set; }
        public int Price { get; set; }

        public virtual ICollection<PersonalProduct> PersonalProducts { get; set; }
    }
}
