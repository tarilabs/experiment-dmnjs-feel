```
mvn clean compile
npm test
```

# Reminders about TypeScript
- Use of `unknown` safe (it's the sum type of `Object | null | undefined`; use of `any` unsafe (it bypasses typechecking)
- use `--strictNullChecks` compiler flag
- Function types are BIvariant with respect to the underlying parameters type: this affects high order functions usage (i.e.: passing a function as a parameter to another function, you can pass a (Triangle) => void when (Shape) => void is required as a parameter)
