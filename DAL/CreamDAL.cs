using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class CreamDAL : ICreamDAL
    {
        PerfectContext contex = new PerfectContext();

        public IList<Cream> GetAllCreams()
        {
            IList<Cream> allCreams = contex.Creams.ToList();
            return allCreams;
        }

        public Cream GetCreamById(int id)
        {
            Cream currentCream = contex.Creams.SingleOrDefault(x => x.Id == id);
            return currentCream;
        }


    }
}
