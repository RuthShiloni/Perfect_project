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
    public class PersonalProductController : Controller
    {
        private IpersonalProductBL personalPBL;
        public PersonalProductController(IpersonalProductBL personalPBl)
        {
            personalPBL = personalPBl;
        }
        [HttpPost]
        [Route("addPersonalP")]
        public IActionResult AddPersonalProduct([FromBody]PersonalProductDTO pp)
        {
            try
            {
                return Ok(personalPBL.AddPersonalProduct(pp));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            } 
        }
        [HttpDelete]
        [Route("deletePersonalP/{id}")]
        public IActionResult DeletePersonalProduct(int id)
        {
            try
            {
                return Ok(personalPBL.DeletePersonalProduct(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getAllPersonalP")]
        public IActionResult GetAllPersonalProducts()
        {
            try
            {
                return Ok(personalPBL.GetAllPersonalProducts());
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        [Route("getPersonalPById/{id}")]
        public IActionResult GetPersonalProductById(int id)
        {
            try
            {
                return Ok(personalPBL.GetPersonalProductById(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPut]
        [Route("updatePersonalP/{id}")]
        public IActionResult UpdatePersonalProduct(int id,[FromBody] PersonalProductDTO pp)
        {
            try
            {
                return Ok(personalPBL.UpdatePersonalProduct(id, pp));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
