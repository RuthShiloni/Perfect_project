using DAL.Models;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class ShoppingCartDAL : IshoppingCartDAL
    {
        PerfectContext contex = new PerfectContext();
        public bool AddShoppingCart(ShoppingCart shoppingCart)
        {
            try
            {
                contex.ShoppingCarts.Add(shoppingCart);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteShoppingCart(int id)
        {
            try
            {
                ShoppingCart shoppingCart = contex.ShoppingCarts.SingleOrDefault(x => x.Id == id);
                contex.ShoppingCarts.Remove(shoppingCart);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public ShoppingCart GetShoppingCartById(int id)
        {
            ShoppingCart shoppingCart = contex.ShoppingCarts.SingleOrDefault(x => x.Id == id);
            return shoppingCart;
        }
    }
}
