using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
   public class CategoriesDAL
    {
        PerfectContext context = new PerfectContext();

        public bool AddCategory(Category newCategory)
        {
            try
            {
                context.Add(newCategory);
                context.SaveChanges();
                return true;
            }

            catch(Exception ex)
            {
                throw ex;
            }
        }

        public bool DeleteCategory(int id)
        {
            try
            {
                Category currenCategory = context.Categories.SingleOrDefault(x => x.Id == id);
                context.Remove(currenCategory);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public IList<Category> GetAllCategories()
        {
            IList<Category> allCategories = context.Categories.ToList();
            return allCategories;
        }

        public Category GetCategoryById(int id)
        {
            Category currentCategory = context.Categories.SingleOrDefault(x => x.Id == id);
            return currentCategory;
        }

        public bool UpdateCategory(int id, Category category)
        {
            try
            {
                Category currentCategory = context.Categories.SingleOrDefault(x => x.Id == id);
                context.Entry(currentCategory).CurrentValues.SetValues(category);
                category.Id = id;
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}
