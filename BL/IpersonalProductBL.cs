using System;
using System.Collections.Generic;
using DTO;
using System.Text;

namespace BL
{
    public interface IpersonalProductBL
    {
        public IList<PersonalProductDTO> GetAllPersonalProducts();

        public PersonalProductDTO GetPersonalProductById(int id);

        public bool UpdatePersonalProduct(int id, PersonalProductDTO pp);

        public bool DeletePersonalProduct(int id);
        public IList<PersonalProductDTO> GetAllPPByUserId(int UserId);
        public bool AddPersonalProduct(PersonalProductDTO pp);
    }
}
