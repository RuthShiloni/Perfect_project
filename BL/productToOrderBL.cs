using AutoMapper;
using DAL;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class productToOrderBL : IproductToOrderBL
    {
        private IProductToOrderDAL ProductToOrderDAL;
        IMapper mapper;

        public productToOrderBL(IProductToOrderDAL productToOrderDAL)
        {
            ProductToOrderDAL = productToOrderDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }


        public bool AddProductToOrder(productToOrderDTO newProductToOrder)
        {
            ProductToOrder CurrentProductToOrder = mapper.Map<productToOrderDTO, ProductToOrder>(newProductToOrder);
            return ProductToOrderDAL.AddProductToOrder(CurrentProductToOrder);
        }

        public bool DeleteProductToOrder(int id)
        {
            return ProductToOrderDAL.DeleteProductToOrder(id);
        }

        public IList<productToOrderDTO> GetAllProductToOrder()
        {
            return mapper.Map<IList<ProductToOrder>, IList<productToOrderDTO>>(ProductToOrderDAL.GetAllProductToOrder());
        }

        public productToOrderDTO GetProductToOrderById(int id)
        {
            ProductToOrder productToOrder  = ProductToOrderDAL.GetProductToOrderById(id);
            return mapper.Map<ProductToOrder, productToOrderDTO>(productToOrder);
        }

        public bool UpdateProductToOrder(int id, productToOrderDTO productToOrder)
        {
            ProductToOrder CurrentProductToOrder = mapper.Map<productToOrderDTO, ProductToOrder>(productToOrder);
            return ProductToOrderDAL.UpdateProductToOrder(id, CurrentProductToOrder);
        }
    }
}
