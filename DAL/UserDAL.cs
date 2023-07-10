using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace DAL
{
    public class UserDAL : IuserDAL
    {
        PerfectContext contex = new PerfectContext();

        public bool AddUser(User newUser)
        {
            using (var contex = new PerfectContext())
            {
                var user = contex.Users.Where(u => u.Email == newUser.Email).FirstOrDefault();
                if (user == null)
                {
                    try
                    {
                        contex.Add(newUser);
                        contex.SaveChanges();
                        return true;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error adding user");
                        return false;
                    }
                }
                Console.WriteLine("Error- user exist");
                return false;
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
            catch (Exception ex)
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
            User currentUser = contex.Users.Where(x => x.Id == id).Include(x => x.Addresses).AsNoTracking().SingleOrDefault();

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
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public User Login(string email, string pass)
        {
            User user = contex.Users.Where(x => x.Email == email && x.Password == pass).Include(x => x.Addresses).SingleOrDefault();

            return user;
        }
    }
}
