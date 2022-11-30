using System;
using System.Collections.Generic;
using System.Text;
using DAL.Models;
namespace DAL
{
    public interface IaddressDAL
    {
        public List<Address> GetAllAdresses();
        public Address GetAdressById(int id);
        public bool AddAdress(Address address);
        public bool UpdateAdress(Address address,int id);
        public bool DeleteAddress(Address adress, int id);
    }
}