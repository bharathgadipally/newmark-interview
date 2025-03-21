using Newmark.PropertyManagement.Domain;

namespace Newmark.PropertyManagement.Services.Implementations
{
    public interface IPropertyBlobRepository
    {
        Task<List<Property>> GetPropertiesAsync();
    }
}
