using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;

namespace ConvertTo.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class WeatherForecastController : ControllerBase
  {
    private List<User> users = new List<User>
    {
        new User { Id = 1, Username = "DoloresAbernathy" },
        new User { Id = 2, Username = "MaeveMillay" },
        new User { Id = 3, Username = "BernardLowe" },
        new User { Id = 4, Username = "ManInBlack" }
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
      _logger = logger;
    }

    [HttpGet(Name = "Test")]
    public dynamic Get()
    {
      using (var workbook = new XLWorkbook())
      {
        var worksheet = workbook.Worksheets.Add("Users");
        var currentRow = 1;
        worksheet.Cell(currentRow, 1).Value = "Id";
        worksheet.Cell(currentRow, 2).Value = "Username";
        foreach (var user in users)
        {
          currentRow++;
          worksheet.Cell(currentRow, 1).Value = user.Id;
          worksheet.Cell(currentRow, 2).Value = user.Username;
        }

        using (var stream = new MemoryStream())
        {
          workbook.SaveAs(stream);
          var content = stream.ToArray();

          return File(
              content,
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              "users.xlsx");
        }
      }
    }
  }
}