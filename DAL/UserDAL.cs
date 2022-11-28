using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class UserDAL : IuserDAL
    {
        PerfectContext contex = new PerfectContext();
        public bool AddUser(User newUser)
        {
            try
            {
                contex.Add(newUser);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteUser(int id)
        {
            try
            {
                User currentUser = contex.Users.SingleOrDefault(x => x.Id == id);
                contex.Remove(currentUser);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public IList<User> GetAllUsers()
        {
            IList<User> allUsers = contex.Users.ToList();
            return allUsers;
        }

        public User GetUserById(int id)
        {
            User currentUser = contex.Users.SingleOrDefault(x => x.Id == id);
            return currentUser;
        }

        public bool UpdateUser(int id, User user)
        {
            try
            {
                User currentUser = contex.Users.SingleOrDefault(x => x.Id == id);
                contex.Entry(currentUser).CurrentValues.SetValues(user);
                user.Id = id;
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
