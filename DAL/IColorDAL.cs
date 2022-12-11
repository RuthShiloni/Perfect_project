using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IColorDAL
    {
        public IList<Color> GetAllColors();

        public Color GetColorById(int id);


    }
}
