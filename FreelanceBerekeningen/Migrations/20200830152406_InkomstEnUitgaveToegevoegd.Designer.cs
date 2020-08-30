﻿// <auto-generated />
using System;
using FreelanceBerekeningen.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FreelanceBerekeningen.Migrations
{
    [DbContext(typeof(FreelanceBerekeningenContext))]
    [Migration("20200830152406_InkomstEnUitgaveToegevoegd")]
    partial class InkomstEnUitgaveToegevoegd
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FreelanceBerekeningen.Models.Inkomst", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SimulatieId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SimulatieId");

                    b.ToTable("Inkomst");
                });

            modelBuilder.Entity("FreelanceBerekeningen.Models.Simulatie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Creator")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("LastModified")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Simulatie");
                });

            modelBuilder.Entity("FreelanceBerekeningen.Models.Uitgave", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("FiscaalAftrekbaar")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SimulatieId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SimulatieId");

                    b.ToTable("Uitgave");
                });

            modelBuilder.Entity("FreelanceBerekeningen.Models.Inkomst", b =>
                {
                    b.HasOne("FreelanceBerekeningen.Models.Simulatie", null)
                        .WithMany("Inkomsten")
                        .HasForeignKey("SimulatieId");
                });

            modelBuilder.Entity("FreelanceBerekeningen.Models.Uitgave", b =>
                {
                    b.HasOne("FreelanceBerekeningen.Models.Simulatie", null)
                        .WithMany("Uitgaven")
                        .HasForeignKey("SimulatieId");
                });
#pragma warning restore 612, 618
        }
    }
}
