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
    public class UserController : Controller
    {
        private IuserBL userBL;
        public UserController(IuserBL UserBL)
        {
            userBL = UserBL;
        }

        [HttpGet]
        [Route("getAllUser")]
        public IActionResult GetAllUsers()
        {
            try
            {
                return Ok(userBL.GetAllUsers());
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("addUser")]
        public IActionResult AddUser([FromBody] UserDTO newUser)
        {
            try
            {
                return Ok(userBL.AddUser(newUser));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        [Route("deleteUser{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                return Ok(userBL.DeleteUser(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("getUserById/{id}")]
        public IActionResult GetUserById(int id)
        {
            try
            {
                return Ok(userBL.GetUserById(id));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("updateUser{id}")]
        public IActionResult UpdateUser(int id,[FromBody] UserDTO user)
        {
            try
            {
                return Ok(userBL.UpdateUser(id, user));
            }
            catch(Exception ex)
            {
                return StatusCode(500 , ex.Message);
            }
        }


    }
}
