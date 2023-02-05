using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public interface IuserBL
    {
        public IList<UserDTO> GetAllUsers();

        public UserDTO GetUserById(int id);

        public bool AddUser(UserDTO newUser);

        public bool UpdateUser(int id, UserDTO user);

        public bool DeleteUser(int id);
        public UserDTO Login(string email, string pass);
    }
}
