using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IshapeDAL
    {
        public IList<Shape> GetAllShape();
        public Shape GetShapeById(int id);
    }
}
