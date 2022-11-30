using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public interface ICategoriesBL
    {
        public bool AddCategory(CategoriesDTO newCategory);

        public bool DeleteCategory(int id);

        public IList<CategoriesDTO> GetAllCategories();

        public CategoriesDTO GetCategoryById(int id);

        public bool UpdateCategory(int id, CategoriesDTO category);



    }
}
