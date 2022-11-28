using Microsoft.AspNetCore.Mvc;
using DTO;
using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perfect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
        private IordersBL ordersBL;
        public OrdersController(IordersBL orderBL)
        {
            ordersBL = orderBL;
        }
        [HttpPost]
        [Route("addOrder")]
        public IActionResult AddOrder([FromBody]OrdersDTO newOrder)
        {
            try
            {
                return Ok(ordersBL.AddOrder(newOrder));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpDelete]
        [Route("deleteOrder/{id}")]
        public IActionResult DeleteOrder(int id)
        {
            try
            {
                return Ok(ordersBL.DeleteOrder(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getAllOrders")]
        public IActionResult GetAllOrders()
        {
            try
            {
                return Ok(ordersBL.GetAllOrders());
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getOrderById/{id}")]
        public IActionResult GetOrderById(int id)
        {
            try
            {
                return Ok(ordersBL.GetOrderById(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
