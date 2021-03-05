using Assignment.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Assignment.Services
{
    public interface ITodoService
    {
        Task<TodoItem> DeleteTodoItem(long id);
        Task<TodoItem> GetTodoItem(long id);
        Task<IEnumerable<TodoItem>> GetTodoItems();
        Task<int> PostTodoItem(TodoItem todoItem);
        Task<int> PutTodoItem(long id, TodoItem todoItem);
        Task<bool> TodoItemExists(long id);
    }
}