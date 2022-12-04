using DTO;
using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using DAL.Models;
using DAL;

namespace BL
{
    public class ShapeBL : IshapeBL
    {
        private IshapeDAL shapeDAL;
        IMapper mapper;
        public ShapeBL(IshapeDAL ishapeDAL)
        {
            shapeDAL = ishapeDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            mapper = config.CreateMapper();
        }
        public IList<ShapeDTO> GetAllShape()
        {
            return mapper.Map<IList<Shape>, IList<ShapeDTO>>(shapeDAL.GetAllShape());
        }

        public ShapeDTO GetShapeById(int id)
        {
            ShapeDTO currentShape = mapper.Map<Shape, ShapeDTO>(shapeDAL.GetShapeById(id));
            return currentShape;
        }
    }
}
