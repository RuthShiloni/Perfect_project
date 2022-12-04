using System;
using System.Collections.Generic;
using DTO;
using System.Text;

namespace BL
{
    public interface IlayersBL
    {
        public IList<LayersDTO> GetAllLayers();
        public LayersDTO GetLayerById(int id);
    }
}
