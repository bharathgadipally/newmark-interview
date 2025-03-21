using Microsoft.AspNetCore.Mvc;
using Newmark.PropertyManagement.Application;
using Newmark.PropertyManagement.Application.DTOs;

namespace Newmark.PropertyManagement.Api.Controllers
{
    [Route("api/properties")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyService _propertyService;

        public PropertyController(IPropertyService propertyService)
        {
            _propertyService = propertyService;
        }

        /// <summary>
        /// Gets a list of all properties.
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<List<PropertyResponseDto>>> GetProperties()
        {
            var properties = await _propertyService.GetPropertiesAsync();
            if (properties == null || properties.Count == 0)
            {
                return NotFound("No properties found.");
            }

            return Ok(properties);
        }
    }
}