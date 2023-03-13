using MinimalWebApi.Models;
using Microsoft.EntityFrameworkCore;
using MinimalWebApi;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<TodoDb>(opt => opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddTransient<DbInitializer>();
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy(name: "_MyAllowSpecificOrigins",
//        policy =>
//        {
//            policy.WithOrigins("https://localhost:4200");
//        });
//});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

using var scope = app.Services.CreateScope();
scope.ServiceProvider.GetRequiredService<DbInitializer>().Run();

app.MapGet("/", () => "Hello World!");

var todoItems = app.MapGroup("/todoitems");

app.MapGet("/todoitems", async (TodoDb db) =>
    await db.Todos.ToListAsync());

todoItems.MapGet("/complete", async (TodoDb db) =>
    await db.Todos.Where(t=> t.IsComplete).ToListAsync());

todoItems.MapGet("/{id}", async (int id, TodoDb db) =>
    await db.Todos.FindAsync(id)
    is Todo todo
    ? Results.Ok(todo)
    : Results.NotFound());

todoItems.MapPost("/", async (Todo todo, TodoDb db) =>
{
    db.Todos.Add(todo);
    await db.SaveChangesAsync();

    return Results.Created($"/todoitems/{todo.Id}", todo);
});

todoItems.MapPut("/{id}", async (int id, Todo inputTodo, TodoDb db) =>
{
    var todo = await db.Todos.FindAsync(id);

    if (todo is null) return Results.NotFound();

    todo.Name = inputTodo.Name;
    todo.IsComplete = inputTodo.IsComplete;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

todoItems.MapDelete("/{id}", async (int id, TodoDb db) =>
{
    if (await db.Todos.FindAsync(id) is Todo todo)
    {
        db.Todos.Remove(todo);
        await db.SaveChangesAsync();
        return Results.Ok(todo);
    }

    return Results.NotFound();
});

var typedResults = app.MapGroup("/typedresults");

typedResults.MapGet("/", GetAllItems);
typedResults.MapGet("/complete", GetCompletedItems);
typedResults.MapGet("/{id}", SelectItem);
typedResults.MapPost("/", CreateItem);
typedResults.MapPut("/{id}", UpdateItem);
typedResults.MapDelete("/{id}", RemoveItem);

app.Run();

static async Task<IResult> GetAllItems(TodoDb db) => TypedResults.Ok(await db.Todos.ToArrayAsync());

static async Task<IResult> GetCompletedItems(TodoDb db) => TypedResults.Ok(await db.Todos.Where(t => t.IsComplete).ToArrayAsync());

static async Task<IResult> SelectItem(int id, TodoDb db) {
    var item = await db.Todos.FindAsync(id);
    if (item is Todo)
        return TypedResults.Ok(item);
    else
        return TypedResults.NotFound();
}

static async Task<IResult> CreateItem(Todo item, TodoDb db)
{
    db.Todos.Add(item);
    await db.SaveChangesAsync();
    return TypedResults.Created($"/todoitems/{item.Id}", item);
}

static async Task<IResult> UpdateItem(int id, Todo updated, TodoDb db)
{
    var item = await db.Todos.FindAsync(id);

    if (item is null) return TypedResults.NotFound();

    item.Name = updated.Name;
    item.IsComplete = updated.IsComplete;

    await db.SaveChangesAsync();
    return TypedResults.NoContent();
}

static async Task<IResult> RemoveItem(int id, TodoDb db)
{
    if (await db.Todos.FindAsync(id) is Todo item)
    {
        db.Todos.Remove(item);
        await db.SaveChangesAsync ();
        return TypedResults.Ok(item);
    }

    return TypedResults.NotFound();
}