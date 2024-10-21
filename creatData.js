class Product {
  constructor(id, Photo, Manufacturer, name, Ratings, Prix, category) {
    this.id = id;
    this.Photo = Photo;
    this.Manufacturer = Manufacturer;
    this.name = name;
    this.Ratings = Ratings;
    this.Prix = Prix;
    this.category = category;
  }
}
//creat data  products test
function creatDataProducts(from, to, tablSaveData) {
  for (let index = Number(from); index < Number(to); index += 4) {
    var product1 = new Product(
      Number(index),
      "img/products/man/m" + index + ".jpg",
      Manufacturer[Math.floor(Math.random() * 3)],
      "summer man t-shirts",
      Math.floor(Math.random() * 3 + 3),
      "$" + Math.floor(Math.random() * 250 + 200),
      "man"
    );
    var product2 = new Product(
      Number(index + 1),
      "img/products/boy/b" + index + ".jpg",
      Manufacturer[Math.floor(Math.random() * 3)],
      "summer children t-shirts",
      Math.floor(Math.random() * 3 + 3),
      "$" + Math.floor(Math.random() * 200 + 100),
      "child"
    );
    var product3 = new Product(
      Number(index + 2),
      "img/products/femal/f" + index + ".jpg",
      Manufacturer[Math.floor(Math.random() * 3)],
      "summer women t-shirts",
      Math.floor(Math.random() * 3 + 3),
      "$" + Math.floor(Math.random() * 250 + 200),
      "women"
    );

    var product4 = new Product(
      Number(index + 3),
      "img/products/man/mc" + index + ".jpg",
      Manufacturer[Math.floor(Math.random() * 3)],
      "classic man t-shirts",
      Math.floor(Math.random() * 3 + 3),
      "$" + Math.floor(Math.random() * 100 + 30),
      "man"
    );

    tablSaveData.push(product1);
    tablSaveData.push(product2);
    tablSaveData.push(product3);
    tablSaveData.push(product4);
  }
}
//creat data page1
creatDataProducts(0, 16, dataProP1);
//creat data page2
creatDataProducts(16, 32, dataProP2);
//creat data page3
creatDataProducts(32, 48, dataProP3);
//creat data page4
creatDataProducts(48, 64, dataProP4);
//creat data page5
creatDataProducts(64, 72, dataProP5);
