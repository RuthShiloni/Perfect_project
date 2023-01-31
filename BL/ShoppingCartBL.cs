using DAL;
using DTO;
using System;
using AutoMapper;
using DAL.Models;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class ShoppingCartBL : IshoppingCartBL
    {
        private IshoppingCartDAL shoppingCartDAL;
        IMapper mapper;
        public ShoppingCartBL(IshoppingCartDAL ishoppingCart)
        {
            shoppingCartDAL = ishoppingCart;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();
            });
            mapper = config.CreateMapper();
        }
        public bool AddShoppingCart(ShoppingCartDTO shoppingCart)
        {
            ShoppingCart currentShoppingCart = mapper.Map<ShoppingCartDTO, ShoppingCart>(shoppingCart);
            return shoppingCartDAL.AddShoppingCart(currentShoppingCart);
        }

        public bool DeleteShoppingCart(int id)
        {
            return shoppingCartDAL.DeleteShoppingCart(id);
        }

        public ShoppingCartDTO GetShoppingCartById(int id)
        {
            ShoppingCartDTO shoppingCart = mapper.Map<ShoppingCart, ShoppingCartDTO>(shoppingCartDAL.GetShoppingCartById(id));
            return shoppingCart;
        }
        public IList<ShoppingCartDTO> GetAllShoppingCartByUserId(int UserId)
        {
            IList<ShoppingCartDTO> allUserCart = mapper.Map<IList<ShoppingCart>, IList<ShoppingCartDTO>>(shoppingCartDAL.GetAllShoppingCartByUserId(UserId));
            return allUserCart;
        }
    }
}
