using System;
using System.Collections.Generic;
using System.Text;
using DTO;
namespace BL
{
   public interface IAddressBL
    {
        public List<AddressDTO> GetAllAdresses();
        public AddressDTO GetAdressById(int id);
        public bool AddAdress(AddressDTO address);
        public bool UpdateAdress(AddressDTO address, int id);
        public bool DeleteAddress(int id);


    }
}
