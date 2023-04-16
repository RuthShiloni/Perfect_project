using BL;
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
    public class ColorsController : ControllerBase
    {
        private IColorBL colorBL;

        public ColorsController(IColorBL ColorBL)
        {
            colorBL = ColorBL;
        }

        [HttpGet]
        [Route("getAllColors")]
        public IActionResult GetAllColors()
        {
            try
            {
                return Ok(colorBL.GetAllColors());
            }

            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

       
       

        [HttpGet]
        [Route("getColorById{id}")]
        public IActionResult GetColorById(int id)
        {
            try
            {
                return Ok(colorBL.GetColorById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        


    }
}
