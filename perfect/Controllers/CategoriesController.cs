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
    public class CategoriesController : ControllerBase
    {
        private ICategoriesBL CategoriesBL;
        public  CategoriesController(ICategoriesBL categoriesBL)
        {
            CategoriesBL = categoriesBL;
        }

        [HttpPost]
        [Route("AddCategories")]
        public IActionResult AddCategories([FromBody])



    }
}
