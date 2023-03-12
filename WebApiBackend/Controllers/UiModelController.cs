using Microsoft.AspNetCore.Mvc;
using WebApiBackend.UI_Models;

namespace WebApiBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UiModelController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public UiModelController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 7).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpGet(Name = "GetSampleModel")]
        public UiModel GetSampleUiModel(string type)
        {
            switch (type.ToLower())
            {
                case "gridlist":
                    return NgGridList.Sample;
            }
            return null;
        }
    }
}