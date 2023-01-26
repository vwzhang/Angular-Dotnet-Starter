using Microsoft.AspNetCore.Mvc;
using WebApiBackend.UI_Models;

namespace WebApiBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            int? count = 5;
            return Enumerable.Range(1, count.Value).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        //[HttpGet(Name = "GetSampleUiModel")]
        //public UiModel GetSampleUiModel(string type)
        //{
        //    switch (type.ToLower())
        //    {
        //        case "gridlist":
        //            return NgGridList.Sample;
        //    }
        //    return null;
        //}
    }
}