using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class LayersDAL : IlayersDAL
    {
        PerfectContext context = new PerfectContext();
        public IList<Layer> GetAllLayers()
        {
            IList<Layer> allLayers = context.Layers.ToList();
            return allLayers;
        }

        public Layer GetLayerById(int id)
        {
            Layer currentLayer = context.Layers.SingleOrDefault(x => x.Id == id);
            return currentLayer;
        }
    }
}
