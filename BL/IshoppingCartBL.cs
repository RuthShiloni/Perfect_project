using System;
using System.Collections.Generic;
using System.Text;
using DTO;


namespace BL
{
    public interface IshoppingCartBL
    {
        public ShoppingCartDTO GetShoppingCartById(int id);
        public bool DeleteShoppingCart(int id);
        public bool AddShoppingCart(ShoppingCartDTO shoppingCart);
    }
}
