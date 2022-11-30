using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
   public interface ISizePriceDAL
    {
        public bool AddSizePrice(SizePrice newSizePrice);

        public bool DeleteSizePrice(int id);

        public IList<SizePrice> GetAllSizePrice();

        public SizePrice GetSizePriceById(int id);

        public bool UpdateSizePrice(int id, SizePrice sizePrice);




    }
}
