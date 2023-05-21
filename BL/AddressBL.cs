using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using DAL;
using DAL.Models;
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
            Address add = mapper.Map<AddressDTO, Address>(address);
            return addressDAL.AddAdress(add);
        }

        public bool DeleteAddress(int id)
        {
            return addressDAL.DeleteAddress(id);
        }

        public AddressDTO GetAdressById(int id)
        {
            return mapper.Map<Address, AddressDTO>(addressDAL.GetAdressById(id));
        }

        public List<AddressDTO> GetAllAdresses()
        {
            return mapper.Map<List<Address>,List< AddressDTO>>(addressDAL.GetAllAdresses());
        }

        public bool UpdateAdress(AddressDTO address, int id)
        {
            Address add = mapper.Map<AddressDTO, Address>(address);
            return addressDAL.UpdateAdress(add, id);
        }
    }
}
