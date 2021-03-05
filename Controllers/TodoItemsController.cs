using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Assignment.Models;
using Assignment.Services;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemsController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoItemsController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<IActionResult> GetTodoItems()
        {
            var todoItems = await _todoService.GetTodoItems();
            return Ok(todoItems);
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(long id)
        {
            var todoItem = await _todoService.GetTodoItem(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // PUT: api/TodoItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(long id, TodoItem todoItem)
        {
            if (id != todoItem.ItemId)
            {
                return BadRequest();
            }

            if (!await _todoService.TodoItemExists(id))
            {
                return NotFound();
            }

            var isSuccess = await _todoService.PutTodoItem(id, todoItem);
            if (isSuccess == 1)
            {
                return Ok(200);
            }
            
            return NoContent();
        }

        // POST: api/TodoItems
        [HttpPost]
        public async Task<IActionResult> PostTodoItem(TodoItem todoItem)
        {
            var result = await _todoService.PostTodoItem(todoItem);
            if(result == 1)
            {

                return Ok();
            }

            return BadRequest();
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TodoItem>> DeleteTodoItem(long id)
        {
            var doesTodoItemExist = await _todoService.TodoItemExists(id);
            if (!doesTodoItemExist)
            {
                return NotFound();
            }
            var deletedTodoItem = await _todoService.DeleteTodoItem(id);

            return deletedTodoItem;
        }
    }
}   
