using AutoMapper;
using Newmark.PropertyManagement.Application.DTOs;
using Newmark.PropertyManagement.Domain;
using Newmark.PropertyManagement.Domain.Models;

namespace Newmark.PropertyManagement.Api
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Property, PropertyResponseDto>();
            CreateMap<Space, SpaceResponseDto>();
            CreateMap<Rentroll, RentRollResponseDto>();

            CreateMap<PropertyResponseDto, Property>();
            CreateMap<SpaceResponseDto, Space>();
            CreateMap<RentRollResponseDto, Rentroll>();
        }
    }
}
