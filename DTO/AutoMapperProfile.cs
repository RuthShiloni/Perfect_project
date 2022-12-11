using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DTO
{
    public class AutoMapperProfile : AutoMapper.Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User , UserDTO>();
            CreateMap<UserDTO , User>();
            CreateMap<Order, OrdersDTO>();
            CreateMap<OrdersDTO, Order>();
            CreateMap<PersonalProduct, PersonalProductDTO>();
            CreateMap<PersonalProductDTO, PersonalProduct>();
            CreateMap<ProductsDTO, Product>();
            CreateMap<Product, ProductsDTO>();
            CreateMap<Address, AddressDTO>();
            CreateMap<AddressDTO, Address>();
            CreateMap<CategoriesDTO, Category>();
            CreateMap<Category, CategoriesDTO>();
            CreateMap<SizePriceDTO, SizePrice>();
            CreateMap<SizePrice, SizePriceDTO>();
            CreateMap<productToOrderDTO, ProductToOrder>();
            CreateMap<ProductToOrder, productToOrderDTO>();
            CreateMap<CreamDTO, Cream>();
            CreateMap<Cream, CreamDTO>();
            CreateMap<Color, ColorDTO>();
            CreateMap<ColorDTO, Color>();




            CreateMap<ShoppingCart, ShoppingCartDTO>();
            CreateMap<ShoppingCartDTO, ShoppingCart>();
            CreateMap<Shape, ShapeDTO>();
            CreateMap<ShapeDTO, Shape>();
            CreateMap<Layer, LayersDTO>();
            CreateMap<LayersDTO, Layer>();
        }
    }
}
