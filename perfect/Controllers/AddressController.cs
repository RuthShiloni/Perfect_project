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
    public class AddressController : ControllerBase
    {
        private IAddressBL AddressBL;

        public AddressController(IAddressBL addressBL)
        {
            AddressBL = addressBL;
        }

        [HttpGet] 
        [Route("getAllAddress")]
        public IActionResult GetAllAddress()
        {
            try
            {
                return Ok(AddressBL.GetAllAdresses());
            }

            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPost]
        [Route("addAddress")]
        public IActionResult AddAddress([FromBody]AddressDTO adress)
        {
            try
            {
                return Ok(AddressBL.AddAdress(adress));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpDelete]
        [Route("deleteAddress")]
        public IActionResult DeleteAddress(int id)
        {
            
            try
            {
                return Ok(AddressBL.DeleteAddress(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpGet]
        [Route("getAddressById{id}")]
        public IActionResult GetAddressById(int id)
        {
            try
            {
                return Ok(AddressBL.GetAdressById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPut]
        [Route("updateAddress{id}")]
        public IActionResult UpdateAddress([FromBody] AddressDTO address, int id)
        {
            try
            { 
            return Ok(AddressBL.UpdateAdress(address,id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }
 

    }
}
