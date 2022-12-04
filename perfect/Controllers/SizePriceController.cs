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
    public class SizePriceController : ControllerBase
    {
        private ISizePriceBL SizePriceBL;

        public SizePriceController(ISizePriceBL sizePriceBL)
        {
            SizePriceBL = sizePriceBL;
        }

        [HttpGet]
        [Route("getAllSizePrice")]
        public IActionResult GetAllSizePrice()
        {
            try
            {
                return Ok(SizePriceBL.GetAllSizePrice());
            }

            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPost]
        [Route("addSizePrice")]
        public IActionResult AddSizePrice(SizePriceDTO newSizePrice)
        {
            try
            {
                return Ok(SizePriceBL.AddSizePrice(newSizePrice));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpDelete]
        [Route("deleteSizePrice")]
        public IActionResult DeleteSizePrice( int id)
        {

            try
            {
                return Ok(SizePriceBL.DeleteSizePrice(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpGet]
        [Route("getSizePriceById{id}")]
        public IActionResult GetSizePriceById(int id)
        {
            try
            {
                return Ok(SizePriceBL.GetSizePriceById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPut]
        [Route("updateSizePrice{id}")]
        public IActionResult UpdateSizePrice(int id, [FromBody] SizePriceDTO SizePrice)
        {
            try
            {
                return Ok(SizePriceBL.UpdateSizePrice(id,SizePrice));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }



    }
}
