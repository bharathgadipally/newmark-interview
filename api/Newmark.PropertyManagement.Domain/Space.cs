namespace Newmark.PropertyManagement.Domain.Models
{
    public class Space
    {
        public string SpaceId { get; set; }
        public string SpaceName { get; set; }
        public Rentroll[] RentRoll { get; set; }
    }
}
