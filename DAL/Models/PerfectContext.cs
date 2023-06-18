using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DAL.Models
{
    public partial class PerfectContext : DbContext
    {
        public PerfectContext()
        {
        }

        public PerfectContext(DbContextOptions<PerfectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Color> Colors { get; set; }
        public virtual DbSet<Cream> Creams { get; set; }
        public virtual DbSet<Layer> Layers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<PersonalProduct> PersonalProducts { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductToOrder> ProductToOrders { get; set; }
        public virtual DbSet<Shape> Shapes { get; set; }
        public virtual DbSet<ShoppingCart> ShoppingCarts { get; set; }
        public virtual DbSet<SizePrice> SizePrices { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=Perfect;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.ToTable("Address");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.BuildingN).HasColumnName("buildingN");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasColumnName("city");

                entity.Property(e => e.HouseN).HasColumnName("houseN");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.Property(e => e.Street)
                    .IsRequired()
                    .HasColumnName("street");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Address_Users");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Color>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<Cream>(entity =>
            {
                entity.ToTable("Cream");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Details)
                    .IsRequired()
                    .HasColumnName("details");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<Layer>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Number).HasColumnName("number");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.Delivered).HasColumnName("delivered");

                entity.Property(e => e.Delivery)
                    .IsRequired()
                    .HasColumnName("delivery");

                entity.Property(e => e.DeliveryPrice).HasColumnName("deliveryPrice");

                entity.Property(e => e.PickupDate)
                    .HasColumnType("date")
                    .HasColumnName("pickupDate");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Orders_Users");
            });

            modelBuilder.Entity<PersonalProduct>(entity =>
            {
                entity.ToTable("PersonalProduct");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ColorId1).HasColumnName("colorId1");

                entity.Property(e => e.ColorId2).HasColumnName("colorId2");

                entity.Property(e => e.CreamId).HasColumnName("creamId");

                entity.Property(e => e.LayersId).HasColumnName("layersId");

                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.Property(e => e.Picture).HasColumnName("picture");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.ShapeId).HasColumnName("shapeId");

                entity.Property(e => e.Text).HasColumnName("text");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.ColorId1Navigation)
                    .WithMany(p => p.PersonalProductColorId1Navigations)
                    .HasForeignKey(d => d.ColorId1)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PersonalProduct_Colors");

                entity.HasOne(d => d.ColorId2Navigation)
                    .WithMany(p => p.PersonalProductColorId2Navigations)
                    .HasForeignKey(d => d.ColorId2)
                    .HasConstraintName("FK_PersonalProduct_Colors1");

                entity.HasOne(d => d.Cream)
                    .WithMany(p => p.PersonalProducts)
                    .HasForeignKey(d => d.CreamId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PersonalProduct_Cream");

                entity.HasOne(d => d.Layers)
                    .WithMany(p => p.PersonalProducts)
                    .HasForeignKey(d => d.LayersId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PersonalProduct_Layers");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.PersonalProducts)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK_PersonalProduct_Orders");

                entity.HasOne(d => d.Shape)
                    .WithMany(p => p.PersonalProducts)
                    .HasForeignKey(d => d.ShapeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PersonalProduct_Shape");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PersonalProducts)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_PersonalProduct_Users");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Allergens)
                    .IsRequired()
                    .HasColumnName("allergens");

                entity.Property(e => e.CategId).HasColumnName("categId");

                entity.Property(e => e.Details)
                    .IsRequired()
                    .HasColumnName("details");

                entity.Property(e => e.Img)
                    .IsRequired()
                    .HasColumnName("img");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasColumnName("type");

                entity.HasOne(d => d.Categ)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Products_Categories");
            });

            modelBuilder.Entity<ProductToOrder>(entity =>
            {
                entity.ToTable("ProductToOrder");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.SizeId).HasColumnName("sizeId");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.ProductToOrders)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductToOrder_Orders");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductToOrders)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProductToOrder_Products");
            });

            modelBuilder.Entity<Shape>(entity =>
            {
                entity.ToTable("Shape");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Shape1)
                    .IsRequired()
                    .HasColumnName("shape");

                entity.Property(e => e.Size)
                    .IsRequired()
                    .HasColumnName("size");
            });

            modelBuilder.Entity<ShoppingCart>(entity =>
            {
                entity.ToTable("ShoppingCart");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.IdSize).HasColumnName("idSize");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.IdSizeNavigation)
                    .WithMany(p => p.ShoppingCarts)
                    .HasForeignKey(d => d.IdSize)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ShoppingCart_Size&Price");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ShoppingCarts)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ShoppingCart_Products");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ShoppingCarts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ShoppingCart_Users");
            });

            modelBuilder.Entity<SizePrice>(entity =>
            {
                entity.ToTable("Size&Price");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Size)
                    .IsRequired()
                    .HasColumnName("size");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.SizePrices)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Size&Price_Products");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Birthdate)
                    .HasColumnType("date")
                    .HasColumnName("birthdate");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("lastName");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(8)
                    .HasColumnName("password")
                    .IsFixedLength(true);

                entity.Property(e => e.Phone)
                    .HasMaxLength(10)
                    .HasColumnName("phone")
                    .IsFixedLength(true);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
