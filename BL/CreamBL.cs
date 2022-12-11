using AutoMapper;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class CreamBL : ICreamBL
    {
        private ICreamDAL CreamDAL;

        IMapper mapper;

        public CreamBL(ICreamDAL creamDAL)
        {
            CreamDAL = creamDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }

        public IList<CreamDTO> GetAllCreams()
        {
            return mapper.Map<IList<Cream>, IList<CreamDTO>>(CreamDAL.GetAllCreams());
        }

        public CreamDTO GetCreamById(int id)
        {
            Cream cream = CreamDAL.GetCreamById(id);
            return mapper.Map<Cream, CreamDTO>(cream);
        }
         
    

    }
}
