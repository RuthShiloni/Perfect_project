using BL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perfect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LayerController : Controller
    {
        private IlayersBL layerBL;
        public LayerController(IlayersBL ilayersBL)
        {
            layerBL = ilayersBL;
        }
        [HttpGet]
        [Route("getAllLayers")]
        public IActionResult GetAllLayers()
        {
            try
            {
                return Ok(layerBL.GetAllLayers());
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getLayerById/{id}")]
        public IActionResult GetLayerById(int id)
        {
            try
            {
                return Ok(layerBL.GetLayerById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
