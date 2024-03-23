// Class for defining a Product object
class Product {
  constructor(name, price, platform, img, qt, id) {
    this.name = name; // Product name
    this.price = price; // Product price
    this.platform = platform; // Platform for which the product is available
    this.img = img; // URL of the product image
    this.qt = qt; // Quantity of the product
    this.id = id; // Unique identifier for the product
  }
}

// Array containing instances of Product objects
const listProducts=[
  // Creating instances of Product objects with different properties
  new Product("Cupcake", 25, "Xbox", "/images/cupXbox.png",1,1),
  new Product("Death Stranding", 50, "Ps5", "/images/deathPs5.png",1,2),
  new Product("Doom", 33, "Xbx", "/images/DoomXbox.png",1,3),
  new Product("Final Fantasy VII", 79, "Ps5", "/images/Finalps5.png",1,4),
  new Product("Hogwarts Legacy", 68, "Xbox", "/images/HogwartsXbox.png",1,5),
  new Product("Lord of fallen", 59, "Xbox", "/images/LOFXbox.png",1,6),
  new Product("Minecraft", 50, "Switch", "/images/mineSwitch.png",1,7),
  new Product("Pikmin 4", 35, "Switch", "/images/PikminSwitch.png",1,8),
  new Product("Red dead redemption", 50, "Ps5", "/images/redPS5.png",1,9),
  new Product("Red dead redemption", 59, "Switch", "/images/redSwitch.png",1,10),
  new Product("Red dead redemption", 44, "Xbox", "/images/RedXbox.png",1,11),
  new Product("Resident Evil 4", 69, "Xbox", "/images/resident4xbox.png",1,12),
  new Product("Resident Evil 4", 79, "Ps5", "/images/residentps5.png",1,13),
  new Product("The witcher 3", 39, "Ps5", "/images/witcherPs5.png",1,14),
  new Product("The witcher 3", 59, "Xbox", "/images/witcherxbox.png",1,15)
];

export default listProducts; // Exporting the list of products
