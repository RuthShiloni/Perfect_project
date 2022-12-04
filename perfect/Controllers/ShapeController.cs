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
    public class ShapeController : Controller
    {
        private IshapeBL shapeBL;
        public ShapeController(IshapeBL ishapeBL)
        {
            shapeBL = ishapeBL;  
        }
        [HttpGet]
        [Route("getAllShapes")]
        public IActionResult GetAllShape()
        {
            try
            {
                return Ok(shapeBL.GetAllShape());
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getShapeById/{id}")]
        public IActionResult GetShapeById(int id)
        {

            try
            {
                return Ok(shapeBL.GetShapeById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
