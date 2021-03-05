using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Services
{
    public class TodoService : ITodoService
    {   
        private readonly TodoContext _context;

        public TodoService(TodoContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TodoItem>> GetTodoItems()
        {
            return await _context.TodoItems.ToListAsync();
        }

        public async Task<TodoItem> GetTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            return todoItem;
        }

        public Task<ObjectResult> GetTodoItemsAsync()
        {
            throw new System.NotImplementedException();
        }

        public async Task<int> PutTodoItem(long id, TodoItem todoItem)
        {
            _context.Entry(todoItem).State = EntityState.Modified;
            var result = await _context.SaveChangesAsync();
            return result;
        }

        public async Task<int> PostTodoItem(TodoItem todoItem)
        {
            await _context.TodoItems.AddAsync(todoItem);
            var result = await _context.SaveChangesAsync();
            return result;
        }

        public async Task<TodoItem> DeleteTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return todoItem;
        }

        public async Task<bool> TodoItemExists(long id)
        {
            var result = await _context.TodoItems.AnyAsync(e => e.ItemId == id);
            return result;
        }
    }
}
