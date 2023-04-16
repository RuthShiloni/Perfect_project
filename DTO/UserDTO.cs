using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class UserDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Password { get; set; }

        public AddressDTO? Address { get; set; }

    }
}
