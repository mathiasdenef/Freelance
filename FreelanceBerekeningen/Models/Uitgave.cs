using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FreelanceBerekeningen.Models
{
    public class Uitgave
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public int FiscaalAftrekbaar { get; set; }
    }
}
