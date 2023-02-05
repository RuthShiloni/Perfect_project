using DAL;
using DTO;
using System;
using System.Collections.Generic;
using AutoMapper;
using System.Text;
using DAL.Models;

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

            mapper = config.CreateMapper();
        }

        public bool AddUser(UserDTO newUser)
        {
            User currentUser = mapper.Map<UserDTO, User>(newUser);
            return userDAL.AddUser(currentUser);
        }

        public bool DeleteUser(int id)
        {
            return userDAL.DeleteUser(id);
        }

        public IList<UserDTO> GetAllUsers()
        {
            return mapper.Map<IList<User>, IList<UserDTO>>(userDAL.GetAllUsers());
        }

        public UserDTO GetUserById(int id)
        {
            User user = userDAL.GetUserById(id);
            return mapper.Map<User, UserDTO>(user);
        }

        public bool UpdateUser(int id, UserDTO user)
        {
            User currentUser = mapper.Map<UserDTO, User>(user);
            return userDAL.UpdateUser(id , currentUser);
        }

        public UserDTO Login(string email, string pass)
        {
            UserDTO user = mapper.Map<User, UserDTO>(userDAL.Login(email, pass));
            return user;
        }
    }
}
