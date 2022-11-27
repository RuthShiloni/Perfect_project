using DAL;
using DTO;
using System;
using System.Collections.Generic;
using AutoMapper;
using System.Text;

namespace BL
{
    public class UserBL : IuserBL
    {
        private IuserDAL userDAL;
        IMapper mapper;
        public UserBL(IuserDAL UserDAL)
        {
            userDAL = UserDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });


        }
        public bool AddUser(UserDTO newUser)
        {
            throw new NotImplementedException();
        }

        public bool DeleteUser(int id)
        {
            throw new NotImplementedException();
        }

        public IList<UserDTO> GetAllUsers()
        {
            throw new NotImplementedException();
        }

        public UserDTO GetUserById(int id)
        {
            throw new NotImplementedException();
        }

        public bool UpdateUser(int id, UserDTO user)
        {
            throw new NotImplementedException();
        }
    }
}
