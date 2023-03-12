using Microsoft.EntityFrameworkCore;

namespace MinimalWebApi.Models
{
    public class DbInitializer
    {
        private readonly TodoDb _context;

        public DbInitializer(TodoDb context)
        {
            _context = context;
        }

        public void Run()
        {
            _context.Database.EnsureCreated();
            _context.Todos.Add(new Todo { Name = "Walk the dog", IsComplete = false });
            _context.Todos.Add(new Todo { Name = "Clean the room", IsComplete = true });
            _context.SaveChangesAsync();
        }
    }
}
