const person = {
  firstName: "Homayoun",
  lastName: "Mohammadi",
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1]
  }
}

// getter => access properties 
// setter => change (mutate) them

person.fullName = 'John Smith'

console.log(person.fullName)