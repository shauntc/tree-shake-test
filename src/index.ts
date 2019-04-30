import { ClassWithStatics } from "./class";
import { ConstItem } from "./const";
import { Namespace } from "./namespace";
import { add } from "./functions";

console.log("Class", ClassWithStatics.add(1, 1));
console.log("Const", ConstItem.add(2, 2));
console.log("Namespace", Namespace.add(3, 3))
console.log("Functions", add(4, 4));