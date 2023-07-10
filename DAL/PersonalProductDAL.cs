using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class PersonalProductDAL : IPersonalProductDAL
    {
        PerfectContext contex = new PerfectContext();
        public bool AddPersonalProduct(PersonalProduct pp)
        {
            try
            {
                contex.PersonalProducts.Add(pp);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool DeletePersonalProduct(int id)
        {
            try
            {
                PersonalProduct pp = contex.PersonalProducts.SingleOrDefault(x => x.Id == id);
                contex.Remove(pp);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public IList<PersonalProduct> GetAllPersonalProducts()
        {
            IList<PersonalProduct> allPP = contex.PersonalProducts.ToList();
            return allPP;
        }

        public PersonalProduct GetPersonalProductById(int id)
        {
            PersonalProduct curentpp = contex.PersonalProducts.Where(x => x.Id == id).Include(x => x.ColorId1Navigation).Include(x => x.ColorId2Navigation).Include(x => x.Shape).Include(x => x.Layers).Include(x => x.Cream).SingleOrDefault();
            return curentpp;
        }

        public IList<PersonalProduct> GetAllPPByUserId(int UserId)
        {
            return contex.PersonalProducts.Where(x => x.UserId == UserId).Include(x => x.Cream).Include(x => x.Layers).Include(x => x.Shape).Include(x => x.ColorId1Navigation).Include(x => x.ColorId2Navigation)
                .ToList();
        }

        public bool UpdatePersonalProduct(int id, PersonalProduct pp)
        {
            try
            {
                PersonalProduct curentpp = contex.PersonalProducts.SingleOrDefault(x => x.Id == id);
                contex.Entry(curentpp).CurrentValues.SetValues(pp);
                pp.Id = id;
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
