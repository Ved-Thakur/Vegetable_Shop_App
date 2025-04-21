namespace ProductApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Group { get; set; }
        public required string Type { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }

}
