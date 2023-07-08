using BL;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perfect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductToOrderController : ControllerBase
    {
        private IproductToOrderBL ProductToOrderBL;

        public ProductToOrderController(IproductToOrderBL productToOrderBL)
        {
            ProductToOrderBL = productToOrderBL;
        }

        [HttpGet]
        [Route("getAllProductToOrder")]
        public IActionResult GetAllProductToOrder()
        {
            try
            {
                return Ok(ProductToOrderBL.GetAllProductToOrder());
            }

            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPost]
        [Route("addProductToOrder")]
        public IActionResult AddProductToOrder(productToOrderDTO productToOrder)
        {
            try
            {
                return Ok(ProductToOrderBL.AddProductToOrder(productToOrder));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpDelete]
        [Route("deleteProductToOrder")]
        public IActionResult DeleteProductToOrder(int id)
        {

            try
            {
                return Ok(ProductToOrderBL.DeleteProductToOrder( id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpGet]
        [Route("getProductToOrderById/{id}")]
        public IActionResult GetProductToOrderById(int id)
        {
            try
            {
                return Ok(ProductToOrderBL.GetProductToOrderById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPut]
        [Route("updateProductToOrder{id}")]
        public IActionResult UpdateProductToOrder(int id, productToOrderDTO productToOrder)
        {
            try
            {
                return Ok(ProductToOrderBL.UpdateProductToOrder(id,productToOrder));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }


    }
}
