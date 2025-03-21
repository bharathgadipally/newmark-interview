using Newmark.PropertyManagement.Application.DTOs;

namespace Newmark.PropertyManagement.Application
{
    public interface IPropertyService
    {
        Task<List<PropertyResponseDto>> GetPropertiesAsync();
    }
}
