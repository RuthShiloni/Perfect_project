using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
    public class SizePriceDAL : ISizePriceDAL
    {
        PerfectContext contex = new PerfectContext();
        
        public bool AddSizePrice(SizePrice newSizePrice)
        {
            try
            {
                contex.Add(newSizePrice);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteSizePrice(int id)
        {
            try
            {
                SizePrice currentSizePrice = contex.SizePrices.SingleOrDefault(x => x.Id == id);
                contex.Remove(currentSizePrice);
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<SizePrice> GetAllSizePrice()
        {
            IList<SizePrice> allSizePrice = contex.SizePrices.ToList();
            return allSizePrice;
        }

        public SizePrice GetSizePriceById(int id)
        {
            SizePrice currentSizePrice = contex.SizePrices.SingleOrDefault(x => x.Id == id);
            return currentSizePrice;
        }

        public bool UpdateSizePrice(int id, SizePrice sizePrice)
        {
            try
            {
                SizePrice currentSizePrice = contex.SizePrices.SingleOrDefault(x => x.Id == id);
                contex.Entry(currentSizePrice).CurrentValues.SetValues(currentSizePrice);
                sizePrice.Id = id;
                contex.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IList<SizePrice> getSizeAndPriceByProductId(int productId)
        {
            IList<SizePrice> sizePrice = contex.SizePrices.Where(x => x.ProductId == productId).ToList();
            return sizePrice;
        }

    }
}
