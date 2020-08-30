using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FreelanceBerekeningen.Models;

namespace FreelanceBerekeningen.Data
{
    public class FreelanceBerekeningenContext : DbContext
    {
        public FreelanceBerekeningenContext (DbContextOptions<FreelanceBerekeningenContext> options)
            : base(options)
        {
        }

        public DbSet<FreelanceBerekeningen.Models.Simulatie> Simulatie { get; set; }
    }
}
