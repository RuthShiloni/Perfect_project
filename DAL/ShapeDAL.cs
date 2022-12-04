using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class ShapeDAL : IshapeDAL
    {
        PerfectContext context = new PerfectContext();
        public IList<Shape> GetAllShape()
        {
            IList<Shape> allShape = context.Shapes.ToList();
            return allShape;
        }

        public Shape GetShapeById(int id)
        {
            Shape currentShape = context.Shapes.SingleOrDefault(x => x.Id == id);
            return currentShape;
        }
    }
}
