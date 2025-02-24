import { add, subtract } from "./operations.js";
import User from "./userProfile.js";

console.log(add(2,3));
console.log(subtract(10,5));

const user= new User('eric', 25);
console.log(`Name: ${user.name}, Age: ${user.age}`);