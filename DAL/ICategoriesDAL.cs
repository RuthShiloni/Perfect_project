using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface ICategoriesDAL
    {
        public bool AddCategory(Category newCategory);

        public bool DeleteCategory(int id);

        public IList<Category> GetAllCategories();

        public Category GetCategoryById(int id);

        public bool UpdateCategory(int id, Category category);

    }
}
