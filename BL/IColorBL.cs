using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public interface IColorBL
    {
        public IList<ColorDTO> GetAllColors();

        public ColorDTO GetColorById(int id);
    }
}
