using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class TodoItem
    {
        [Key]
        public long ItemId { get; set; }
        [Required]
        public string ItemName { get; set; }
        [Required]
        public bool IsDone { get; set; }
    }
}
