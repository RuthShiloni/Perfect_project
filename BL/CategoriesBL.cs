using AutoMapper;
using DAL;
using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public class CategoriesBL : ICategoriesBL
        {

        private ICategoriesDAL categoriesDAL;
        IMapper mapper;

        public CategoriesBL(ICategoriesDAL CategoriesDAL)
        {
            categoriesDAL = CategoriesDAL;
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<AutoMapperProfile>();

            });

            mapper = config.CreateMapper();
        }


        public bool AddCategory(CategoriesDTO newCategory)
        {
            Category currentCategory = mapper.Map<CategoriesDTO, Category>(newCategory);
            return categoriesDAL.AddCategory(currentCategory);
        }

        public bool DeleteCategory(int id)
        {
            return categoriesDAL.DeleteCategory(id);
        }

        public IList<CategoriesDTO> GetAllCategories()
        {
            return mapper.Map<IList<Category>,IList<CategoriesDTO>>(categoriesDAL.GetAllCategories());
        }

        public CategoriesDTO GetCategoryById(int id)
        {

            Category category = categoriesDAL.GetCategoryById(id);
            return mapper.Map<Category, CategoriesDTO>(category);
        }

        public bool UpdateCategory(int id, CategoriesDTO category)
        {

            Category currentCategory = mapper.Map<CategoriesDTO, Category>(category);
            return categoriesDAL.UpdateCategory(id, currentCategory);
        }
    }
}

