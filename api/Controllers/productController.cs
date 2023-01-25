using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class productController : ControllerBase
    {
        private readonly ProductContext _context;
        public productController( ProductContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<product>>> GetAllProducts()
        {
            var result =await _context.products.ToListAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<product>> GetProductById(int id)
        {
            var result = await _context.products.FindAsync(id);
            return Ok(result);
        }

        [HttpPost]

        public async Task<ActionResult> AddProduct ([FromBody]product SentProduct)
        {
            await _context.products.AddAsync(SentProduct);
            _context.SaveChanges();
            return Ok(SentProduct) ;
        }
        
    }
}