# tree-shake-test
A Toy example of tree shaking for different types of exports of constant values and functions.

## Export Methods:
### NoWrap
No wrapping around the exported functions/values, this is the trivial case for tree shaking and should almost always get shaken
eg:
```typescript
export function helperFunction() {}
```

### Namespace
The functions/values are wrapped in a namespace
eg:
```typescript
export namespace HelperFunctions {
  export helperFunction() {}
}
```

### Class
The functions/values are exported as static methods on a class
```typescript
export namespace HelperFunctions {
  export helperFunction() {}
}
```

### Const
The functions/values are exported as fields of a const object
```typescript
export const HelperFunctions = {
  helperFunction: () => {}
}
```

## Results
The const and unwrapped export methods both get properly tree shaken but the Class and Namespace methods do not get tree shaken. These results can be seen by searching the dist/bundle.js for the export method names ("NoWrap", "Namespace", ...) as each method returns the addition and a string containing its name and its export method name. Only the add functions are used from each method so none of the other functions/values should show up if it is properly tree shaken
