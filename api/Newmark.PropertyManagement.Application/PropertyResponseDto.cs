using Newmark.PropertyManagement.Domain;
using Newmark.PropertyManagement.Domain.Models;

namespace Newmark.PropertyManagement.Application.DTOs
{
    public class PropertyResponseDto
    {
        public string PropertyId { get; set; }
        public string PropertyName { get; set; }
        public string[] Features { get; set; }
        public string[] Highlights { get; set; }
        public Transportation[] Transportation { get; set; }
        public Space[] Spaces { get; set; }
    }

    public class SpaceResponseDto
    {
        public string SpaceId { get; set; }
        public string SpaceName { get; set; }
        public Rentroll[] RentRoll { get; set; }
    }

    public class RentRollResponseDto
    {
        public string Month { get; set; }
        public int Rent { get; set; }
    }
}
