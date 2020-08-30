using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FreelanceBerekeningen.Data;
using FreelanceBerekeningen.Models;
using System.Security.Cryptography.X509Certificates;

namespace FreelanceBerekeningen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimulatiesController : ControllerBase
    {
        private readonly FreelanceBerekeningenContext _context;

        public SimulatiesController(FreelanceBerekeningenContext context)
        {
            _context = context;
        }

        // GET: api/Simulaties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Simulatie>>> GetSimulatie()
        {
            return await _context.Simulatie.ToListAsync();
        }

        // GET: api/Simulaties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Simulatie>> GetSimulatie(int id)
        {
            var simulatie = await _context.Simulatie.Where(x => x.Id == id).Include(x => x.Inkomsten)
                .Include(x => x.Uitgaven).SingleOrDefaultAsync();

            if (simulatie == null)
            {
                return NotFound();
            }

            return simulatie;
        }

        // PUT: api/Simulaties/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSimulatie(int id, Simulatie simulatie)
        {
            if (id != simulatie.Id)
            {
                return BadRequest();
            }

            _context.Entry(simulatie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SimulatieExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Simulaties
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Simulatie>> PostSimulatie(Simulatie simulatie)
        {
            _context.Simulatie.Add(simulatie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSimulatie", new { id = simulatie.Id }, simulatie);
        }

        // DELETE: api/Simulaties/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Simulatie>> DeleteSimulatie(int id)
        {
            var simulatie = await _context.Simulatie.FindAsync(id);
            if (simulatie == null)
            {
                return NotFound();
            }

            _context.Simulatie.Remove(simulatie);
            await _context.SaveChangesAsync();

            return simulatie;
        }

        private bool SimulatieExists(int id)
        {
            return _context.Simulatie.Any(e => e.Id == id);
        }
    }
}
