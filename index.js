const address1 = new Address("Wall Street", "NYC", 1001);
const address2 = new Address("Wall Street", "NYC", 1001);
const address3 = address1;

console.log("are Equal", areEqual(address1, address2));
console.log("are Same", areSame(address1, address2));
console.log("are Same2", areSame(address1, address3));

function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}
