using AutoMapper;
using Newmark.PropertyManagement.Application.DTOs;
using Newmark.PropertyManagement.Services.Implementations;

namespace Newmark.PropertyManagement.Application
{
    public class PropertyService : IPropertyService
    {
        private readonly IPropertyBlobRepository _propertyRepository;
        private readonly IMapper _mapper;

        public PropertyService(IPropertyBlobRepository propertyRepository, IMapper mapper)
        {
            _propertyRepository = propertyRepository;
            _mapper = mapper;
        }

        public async Task<List<PropertyResponseDto>> GetPropertiesAsync()
        {
            // Fetch Domain Models from Repository
            var properties = await _propertyRepository.GetPropertiesAsync();

            // Convert Domain Models to DTOs
            return _mapper.Map<List<PropertyResponseDto>>(properties);
        }
    }
}
