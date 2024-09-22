const person = {
  firstName: "Homayoun",
  lastName: "Mohammadi",
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    if(typeof value !== 'string')
      throw new Error('Value is not a string.')

    const parts = value.split(' ');
    if(parts.length !== 2)
        throw new Error('Enter first and last name')
    this.firstName = parts[0];
    this.lastName = parts[1]
  }
}

// getter => access properties 
// setter => change (mutate) them

try {
  person.fullName = '';
}catch(e) {
  alert(e)
}

console.log(person.fullName)