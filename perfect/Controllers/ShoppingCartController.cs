using BL;
using DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perfect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingCartController : Controller
    {
        private IshoppingCartBL shoppingCartBL;
        public ShoppingCartController(IshoppingCartBL ishoppingCart)
        {
            shoppingCartBL = ishoppingCart;
        }
        [HttpPost]
        [Route("addShoppingCart")]
        public IActionResult AddShoppingCart([FromBody]ShoppingCartDTO shoppingCart)
        {
            try
            {
                return Ok(shoppingCartBL.AddShoppingCart(shoppingCart));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpDelete]
        [Route("deleteShoppingCart/{id}")]
        public IActionResult DeleteShoppingCart(int id)
        {
            try
            {
                return Ok(shoppingCartBL.DeleteShoppingCart(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getShoppingCartById/{id}")]
        public IActionResult GetShoppingCartById(int id)
        {
            try
            {
                return Ok(shoppingCartBL.GetShoppingCartById(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllCartByUserId/{UserId}")]
        public IActionResult GetAllShoppingCartByUserId(int UserId)
        {
            try
            {
                return Ok(shoppingCartBL.GetAllShoppingCartByUserId(UserId));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPut]
        [Route("UpdateShoppingCart/{id}")]
        public IActionResult UpdateShoppingCart(int id , ShoppingCartDTO shoppingCart)
        {
            try
            {
                return Ok(shoppingCartBL.UpdateShoppingCart(id, shoppingCart));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
