using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Layer
    {
        public Layer()
        {
            PersonalProducts = new HashSet<PersonalProduct>();
        }

        public int Id { get; set; }
        public int Number { get; set; }
        public int Price { get; set; }

        public virtual ICollection<PersonalProduct> PersonalProducts { get; set; }
    }
}
