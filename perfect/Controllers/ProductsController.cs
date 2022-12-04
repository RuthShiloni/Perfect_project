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
    public class ProductsController : ControllerBase
    {
        private IProductsBL ProductsBL;

        public ProductsController(IProductsBL productsBL)
        {
            ProductsBL = productsBL;
        }

        [HttpPost]
        [Route("addProduct")]
        public IActionResult AddProduct([FromBody]ProductsDTO newProduct)
        {
            try
            {
                return Ok(ProductsBL.AddProduct(newProduct));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        [Route("deleteProduct")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                return Ok(ProductsBL.DeleteProduct(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("getAllProduct")]
        public IActionResult GetAllProduct()
        {
            try 
            {
                return Ok(ProductsBL.GetAllProducts());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("getProductById/{id}")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                return Ok(ProductsBL.GetProductById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("updateProduct/{id}")]
        public IActionResult UpdateProduct(int id, ProductsDTO product)
        {
            try
            {
                return Ok(ProductsBL.UpdateProduct(id, product));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }



    }
}
