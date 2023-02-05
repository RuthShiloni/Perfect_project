using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IshoppingCartDAL
    {
        public ShoppingCart GetShoppingCartById(int id);
        public bool DeleteShoppingCart(int id);
        public bool AddShoppingCart(ShoppingCart shoppingCart);
        public IList<ShoppingCart> GetAllShoppingCartByUserId(int UserId);
    }
}
