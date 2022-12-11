using AutoMapper;
using DAL;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class ColorBL : IColorBL
    {
        private IColorDAL ColorDAL;
        IMapper mapper;

        public ColorBL(IColorDAL ColorDAL)
        {
            ColorDAL = ColorDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }

        public IList<ColorDTO> GetAllColors()
        {
            return mapper.Map<IList<Color>, IList<ColorDTO>>(ColorDAL.GetAllColors());
        }

        public ColorDTO GetColorById(int id)
        {
            Color color = ColorDAL.GetColorById(id);
            return mapper.Map<Color, ColorDTO>(color);
        }


    }
}
