using DTO;
using DAL;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;

namespace BL
{
    public class PersonalProductBL : IpersonalProductBL
    {
        private IPersonalProductDAL ppDAL;
        IMapper mapper;
        public PersonalProductBL(IPersonalProductDAL personalProduct)
        {
            ppDAL = personalProduct;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            mapper = config.CreateMapper();
        }
        public bool AddPersonalProduct(PersonalProductDTO pp)
        {
            PersonalProduct currentPp = mapper.Map<PersonalProductDTO, PersonalProduct>(pp);
            return ppDAL.AddPersonalProduct(currentPp);
        }

        public bool DeletePersonalProduct(int id)
        {
            return ppDAL.DeletePersonalProduct(id);
        }

        public IList<PersonalProductDTO> GetAllPersonalProducts()
        {
            return mapper.Map<IList<PersonalProduct>, IList<PersonalProductDTO>>(ppDAL.GetAllPersonalProducts());
        }

        public PersonalProductDTO GetPersonalProductById(int id)
        {
            PersonalProduct currentPp = ppDAL.GetPersonalProductById(id);
            return mapper.Map<PersonalProduct, PersonalProductDTO>(currentPp);
        }

        public bool UpdatePersonalProduct(int id, PersonalProductDTO pp)
        {
            PersonalProduct currentPp = mapper.Map<PersonalProductDTO, PersonalProduct>(pp);
            return ppDAL.UpdatePersonalProduct(id, currentPp);
        }
    }
}
