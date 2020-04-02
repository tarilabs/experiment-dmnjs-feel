```
mvn clean compile
npm run-script prepublish && npm test
```

# Reminders about TypeScript
- Use of `unknown` safe (it's the sum type of `Object | null | undefined`; use of `any` unsafe (it bypasses typechecking)
- use `--strictNullChecks` compiler flag
- Function types are BIvariant with respect to the underlying parameters type: this affects high order functions usage (i.e.: passing a function as a parameter to another function, you can pass a (Triangle) => void when (Shape) => void is required as a parameter)
- do NOT use empty-interfaces: because it's not possible to use the unique symbol trick on Interfaces, an empty interface is structural typing is an object with no properties: that's anything.
- helpful that if(x instanceof Type) in the branch now the compiler knows that x is Type hence the casting is not necessary
