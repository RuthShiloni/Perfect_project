using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using DAL;
using DTO;

namespace BL
{
   public class AddressBL: IAddressBL
    {
        private IaddressDAL addressDAL;
        IMapper mapper;

        public AddressBL(IaddressDAL AddressDAL)
        {
            addressDAL = AddressDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }



        public bool AddAdress(AddressDTO address)
        {
            throw new NotImplementedException();
        }

        public bool DeleteAddress(AddressDTO adress, int id)
        {
            throw new NotImplementedException();
        }

        public AddressDTO GetAdressById(int id)
        {
            throw new NotImplementedException();
        }

        public List<AddressDTO> GetAllAdresses()
        {
            throw new NotImplementedException();
        }

        public bool UpdateAdress(AddressDTO address, int id)
        {
            throw new NotImplementedException();
        }
    }
}
