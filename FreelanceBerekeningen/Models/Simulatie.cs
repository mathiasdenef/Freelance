using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FreelanceBerekeningen.Models
{
    public class Simulatie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Creator { get; set; }
        public DateTime LastModified { get; set; }
        public DateTime CreationDate { get; set; }
        public string Status { get; set; }
        public List<Inkomst> Inkomsten { get; set; }
        public List<Uitgave> Uitgaven { get; set; }
    }
}
