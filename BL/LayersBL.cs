using DAL;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using AutoMapper;
using System.Text;

namespace BL
{
    public class LayersBL : IlayersBL
    {
        private IlayersDAL layersDAL;
        IMapper mapper;
        public LayersBL(IlayersDAL ilayersDAL)
        {
            layersDAL = ilayersDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            mapper = config.CreateMapper();
        }
        public IList<LayersDTO> GetAllLayers()
        {
            return mapper.Map<IList<Layer>, IList<LayersDTO>>(layersDAL.GetAllLayers());
        }

        public LayersDTO GetLayerById(int id)
        {
            LayersDTO currentLayer = mapper.Map<Layer, LayersDTO>(layersDAL.GetLayerById(id));
            return currentLayer;
        }
    }
}
