using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public interface IproductToOrderBL
    {
        public bool AddProductToOrder(productToOrderDTO newProductToOrder);

        public bool DeleteProductToOrder(int id);

        public IList<productToOrderDTO> GetAllProductToOrder();

        public productToOrderDTO GetProductToOrderById(int id);

        public bool UpdateProductToOrder(int id, productToOrderDTO productToOrder);


    }
}
