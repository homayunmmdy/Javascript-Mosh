const address = {
    street : "Wall Street",
    city : "New York City",
    zipCode : 10001
}

function ShowAddress(address) {
    for (key in address)
        console.log(key, address[key])
}

ShowAddress(address)