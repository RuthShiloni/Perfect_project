using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DAL
{
    public class AddressDAL : IaddressDAL
    {
        PerfectContext contex = new PerfectContext();

        public bool AddAdress(Address newAddress)
        {
            try
            {
                contex.Add(newAddress);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        

        public bool DeleteAddress(int id)
        {
            try
            {
                Address currentAddress = contex.Addresses.SingleOrDefault(x => x.Id == id);
                contex.Remove(currentAddress);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       
        public Address GetAdressById(int id)
        {
            Address currentAddress = contex.Addresses.SingleOrDefault(x => x.Id == id);
            return currentAddress;
        }

        public List<Address> GetAllAdresses()
        {
            List<Address> allAddress = contex.Addresses.ToList();
            return allAddress;
        }

      

        public bool UpdateAdress(Address address, int id)
        {
            try
            {
                Address currentAddress = contex.Addresses.SingleOrDefault(x => x.Id == id);
                contex.Entry(currentAddress).CurrentValues.SetValues(address);
                address.Id = id;
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       

        
    }
}
