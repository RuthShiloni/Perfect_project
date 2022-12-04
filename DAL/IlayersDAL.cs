using System;
using System.Collections.Generic;
using System.Text;
using DAL.Models;

namespace DAL
{
    public interface IlayersDAL
    {
        public IList<Layer> GetAllLayers();
        public Layer GetLayerById(int id);
    }
}
