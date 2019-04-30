import { ClassWithStatics } from "./class";
import { ConstItem } from "./const";
import { Namespace } from "./namespace";
import { add } from "./functions";

console.log(ClassWithStatics.add(1, 1));
console.log(ConstItem.add(2, 2));
console.log(Namespace.add(3, 3))
console.log(add(4, 4));