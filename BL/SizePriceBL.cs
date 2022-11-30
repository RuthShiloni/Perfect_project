using AutoMapper;
using DAL;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class SizePriceBL : ISizePriceBL
    {
        private ISizePriceDAL SizePriceDAL;
        IMapper mapper;

        public SizePriceBL(ISizePriceDAL sizePriceDAL)
        {
            SizePriceDAL = sizePriceDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }


        public bool AddSizePrice(SizePriceDTO newSizePrice)
        {
            SizePrice currentSizePrice = mapper.Map<SizePriceDTO, SizePrice>(newSizePrice);
            return SizePriceDAL.AddSizePrice(currentSizePrice);         
        }

        public bool DeleteSizePrice(int id)
        {
            return SizePriceDAL.DeleteSizePrice(id);
        }

        public IList<SizePriceDTO> GetAllSizePrice()
        {
            return mapper.Map<IList<SizePrice>, IList<SizePriceDTO>>(SizePriceDAL.GetAllSizePrice());
        }

        public SizePriceDTO GetSizePriceById(int id)
        {
            SizePrice sizePrice  = SizePriceDAL.GetSizePriceById(id);
            return mapper.Map<SizePrice, SizePriceDTO>(sizePrice);
        }

        public bool UpdateSizePrice(int id, SizePriceDTO sizePrice)
        {
            SizePrice currentSizePrice = mapper.Map<SizePriceDTO, SizePrice>(sizePrice);
            return SizePriceDAL.UpdateSizePrice(id, currentSizePrice);
        }
    }
}
