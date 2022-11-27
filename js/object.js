{
  const person = { firstName: "Naja", lastName: "voci", age: 28 };
  console.log(
    person.firstName +
      " " +
      person.lastName +
      " " +
      "is" +
      " " +
      person.age +
      " " +
      "years old"
  );
}

{
    const person = {} 
    person.firstName = "ari"
    person.lastName = "hastopalli"
console.log(person.firstName + " " + person.lastName)
}

{ //change the value of a propertie
    const person = {
        firstName:"John",
        lastName:"Doe",
        age:50, eyeColor:"blue"
      }
      
      const x = person;
      x.age = 10;    
      
      console.log(person.firstName + " "+ person.lastName + " is " + person.age + " years old") 
}

{ //adding new properties
    const person = {
    firstName:"ari",
    lastName: "hastopalli"
    }

    person.nacionality = "Albania"
console.log(person.firstName + " " + person.lastName + " is from " + person.nacionality)
}

{// deleting properties

const person = {
        firstName:"John",
        lastName:"Doe",
        age:50, eyeColor:"blue"
      }

      delete person.age
      
      console.log(person.firstName + " "+ person.lastName + " is " + person.age + " years old") 
}

{// nested object
    const person = {
        firstName:"John",
        lastName:"Doe",
        age:50, eyeColor:"blue",
        cars: {
            car1: "bmv",
            car2: "ford",
            car3: "audi"
        }
      }
      console.log(person.cars.car2)
}

{
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person2))
}