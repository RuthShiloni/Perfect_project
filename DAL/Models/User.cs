﻿using System;
using System.Collections.Generic;

#nullable disable

namespace DAL.Models
{
    public partial class User
    {
        public User()
        {
            Addresses = new HashSet<Address>();
            PersonalProducts = new HashSet<PersonalProduct>();
            ShoppingCarts = new HashSet<ShoppingCart>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<PersonalProduct> PersonalProducts { get; set; }
        public virtual ICollection<ShoppingCart> ShoppingCarts { get; set; }
    }
}
