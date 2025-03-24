using Newmark.PropertyManagement.Domain.Models;

namespace Newmark.PropertyManagement.Domain
{
    public class Property
    {
        public string PropertyId { get; set; }
        public string PropertyName { get; set; }
        public string[] Features { get; set; }
        public string[] Highlights { get; set; }
        public Transportation[] Transportation { get; set; }
        public Space[] Spaces { get; set; }
    }

    public class PropertyResponse
    {
        public Property[] Properties { get; set; }
    }
}









