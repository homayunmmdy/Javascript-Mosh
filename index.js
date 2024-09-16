const address1 = addressFF("Wall Street", "NYC", 1001);
const address2 = new AddressCF("Wall Street", "NYC", 1001);


function addressFF(street, city , zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

function AddressCF(street, city , zipCode) {
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}