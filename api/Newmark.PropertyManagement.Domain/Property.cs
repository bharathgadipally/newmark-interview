using Newmark.PropertyManagement.Domain.Models;

namespace Newmark.PropertyManagement.Domain
{
    public class Property
    {
        public string Name { get; set; }
        public List<string> Features { get; set; }
        public List<string> Highlights { get; set; }
        public List<string> Transportation { get; set; }
        public List<Space> Spaces { get; set; }
    }
}
