using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
   public interface ISizePriceBL
    {
        public bool AddSizePrice(SizePriceDTO newSizePrice);

        public bool DeleteSizePrice(int id);

        public IList<SizePriceDTO> GetAllSizePrice();

        public SizePriceDTO GetSizePriceById(int id);

        public bool UpdateSizePrice(int id, SizePriceDTO sizePrice);
        public IList<SizePriceDTO> getSizeAndPriceByProductId(int productId);


    }
}
