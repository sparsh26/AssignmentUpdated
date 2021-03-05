using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Assignment.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> Todooptions)
            : base(Todooptions)
        {

        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
