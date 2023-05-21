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
    public class CreamsController : ControllerBase
    {
        private ICreamBL creamBL;

        public CreamsController(ICreamBL CreamBL)
        {
            creamBL = CreamBL;
        }

        [HttpGet]
        [Route("getAllCreams")]
        public IActionResult GetAllCreams()
        {
            try
            {
                return Ok(creamBL.GetAllCreams());
            }

            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }





    }
}
