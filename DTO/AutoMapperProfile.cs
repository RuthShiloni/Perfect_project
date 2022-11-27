using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class AutoMapperProfile : AutoMapper.Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User , UserDTO>();
            CreateMap<UserDTO , User>();
            CreateMap<Order, OrdersDTO>();
            CreateMap<OrdersDTO, Order>();
            CreateMap<PersonalProduct, PersonalProductDTO>();
            CreateMap<PersonalProductDTO, PersonalProduct>();
        }
    }
}
