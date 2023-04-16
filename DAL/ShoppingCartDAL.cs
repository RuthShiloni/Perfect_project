using DAL.Models;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DAL
{
    public class ShoppingCartDAL : IshoppingCartDAL
    {
        PerfectContext contex = new PerfectContext();
        public bool AddShoppingCart(ShoppingCart shoppingCart)
        {
            try
            {
                shoppingCart.IdSizeNavigation = null;
                shoppingCart.Product = null;
                // var existingSizePrice = contex.SizePrices.Find(x => x.sizePrice.Id);
                contex.SizePrices.AsNoTracking();
                contex.ShoppingCarts.Add(shoppingCart);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
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
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ShoppingCart GetShoppingCartById(int id)
        {
            ShoppingCart shoppingCart = contex.ShoppingCarts.SingleOrDefault(x => x.Id == id);
            return shoppingCart;
        }
        public IList<ShoppingCart> GetAllShoppingCartByUserId(int UserId)
        {
            IList<ShoppingCart> allUserCart = contex.ShoppingCarts.Where(x => x.UserId == UserId).Include(s => s.Product).AsNoTracking()
                .Include(x => x.IdSizeNavigation).AsNoTracking().ToList();
            return allUserCart;
        }
        public bool UpdateShoppingCart(int id, ShoppingCart shoppingCart)
        {
            try
            {
                ShoppingCart sp = contex.ShoppingCarts.SingleOrDefault(x => x.Id == id);
                contex.Entry(sp).CurrentValues.SetValues(shoppingCart);
                contex.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
