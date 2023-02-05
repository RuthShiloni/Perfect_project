using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IuserDAL
    {
        public IList<User> GetAllUsers();

        public User GetUserById(int id);

        public bool AddUser(User newUser);

        public bool UpdateUser(int id, User user);

        public bool DeleteUser(int id);
        public User Login(string email, string pass);

    }
}
