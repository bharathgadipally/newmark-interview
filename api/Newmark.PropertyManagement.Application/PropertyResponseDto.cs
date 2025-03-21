namespace Newmark.PropertyManagement.Application.DTOs
{
    public class PropertyResponseDto
    {
        public string Name { get; set; }
        public List<string> Features { get; set; }
        public List<string> Highlights { get; set; }
        public List<string> Transportation { get; set; }
        public List<SpaceResponseDto> Spaces { get; set; }
    }

    public class SpaceResponseDto
    {
        public string Name { get; set; }
        public List<RentRollResponseDto> RentRoll { get; set; }
    }

    public class RentRollResponseDto
    {
        public string Month { get; set; }
        public decimal Amount { get; set; }
    }
}
