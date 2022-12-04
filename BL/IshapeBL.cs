using System;
using System.Collections.Generic;
using DTO;
using System.Text;

namespace BL
{
    public interface IshapeBL
    {
        public IList<ShapeDTO> GetAllShape();
        public ShapeDTO GetShapeById(int id);
    }
}
