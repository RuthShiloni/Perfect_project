using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class ColorDAL : IColorDAL
    {
        PerfectContext contex = new PerfectContext();

        public IList<Color> GetAllColors()
        {
            IList<Color> allColors = contex.Colors.ToList();
            return allColors;
        }

        public Color GetColorById(int id)
        {
            Color currentColor = contex.Colors.SingleOrDefault(x => x.Id == id);
            return currentColor;
        }

        


    }
}
