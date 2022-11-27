using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class Color
    {
        public Color()
        {
            PersonalProductColorId1Navigations = new HashSet<PersonalProduct>();
            PersonalProductColorId2Navigations = new HashSet<PersonalProduct>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public virtual ICollection<PersonalProduct> PersonalProductColorId1Navigations { get; set; }
        public virtual ICollection<PersonalProduct> PersonalProductColorId2Navigations { get; set; }
    }
}
