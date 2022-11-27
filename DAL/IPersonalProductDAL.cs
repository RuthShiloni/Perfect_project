using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IPersonalProductDAL
    {
        public IList<PersonalProduct> GetAllPersonalProducts();

        public PersonalProduct GetPersonalProductById(int id);

        public bool UpdatePersonalProduct(int id, PersonalProduct pp);

        public bool DeletePersonalProduct(int id);

        public bool AddPersonalProduct(PersonalProduct pp);
    }
}
