﻿using BL;
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
    public class CategoriesController : ControllerBase
    {
        private ICategoriesBL CategoriesBL;
        public  CategoriesController(ICategoriesBL categoriesBL)
        {
            CategoriesBL = categoriesBL;
        }

        [HttpPost]
        [Route("AddCategories")]
        public IActionResult AddCategories(CategoriesDTO newCategories)
        {
            try
            {
                return Ok(CategoriesBL.AddCategory(newCategories));
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpGet]
        [Route("getAllCategories")]
        public IActionResult GetAllCategories()
        {
            try
            {
                return Ok(CategoriesBL.GetAllCategories());
            }

            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }




        [HttpDelete]
        [Route("deleteCategories")]
        public IActionResult DeleteCategories(int id)
        {

            try
            {
                return Ok(CategoriesBL.DeleteCategory( id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpGet]
        [Route("getCategoriesById{id}")]
        public IActionResult GetCategoriesBLById(int id)
        {
            try
            {
                return Ok(CategoriesBL.GetCategoryById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }

        [HttpPut]
        [Route("updateCategories{id}")]
        public IActionResult UpdateCategories( int id, [FromBody] CategoriesDTO Categories)
        {
            try
            {
                return Ok(CategoriesBL.UpdateCategory(id,Categories));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);

            }
        }



    }
}
