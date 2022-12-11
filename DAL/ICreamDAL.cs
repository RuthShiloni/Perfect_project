using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public interface ICreamDAL
    {

        public IList<Cream> GetAllCreams();

        public Cream GetCreamById(int id);

    }
}
