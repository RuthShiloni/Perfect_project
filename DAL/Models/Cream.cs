using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Cream
    {
        public Cream()
        {
            PersonalProducts = new HashSet<PersonalProduct>();
        }

        public int Id { get; set; }
        public string Details { get; set; }
        public int Price { get; set; }

        public virtual ICollection<PersonalProduct> PersonalProducts { get; set; }
    }
}
