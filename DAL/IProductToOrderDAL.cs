using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
   public interface IProductToOrderDAL
    {
        public bool AddProductToOrder(ProductToOrder newProductToOrder);

        public bool DeleteProductToOrder(int id);

        public IList<ProductToOrder> GetAllProductToOrder();

        public ProductToOrder GetProductToOrderById(int id);

        public bool UpdateProductToOrder(int id, ProductToOrder productToOrder);




    }
}
