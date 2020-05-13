ARCHIVED. This proved technically feasible, but opted for a more viable alternative solution.

GOALs:
- ACHIEVED: experiment with using the "same" ANTLR `.g4` grammar, both in Java and in TypeScript (with Antlr4's JS target)
- ACHIEVED: experiment with re-creating the basic infrastructure of a FEEL parser, in TypeScript

non-GOALS:
- a complete implementation
- not to focus on Interpreting the AST (this is a later decision, so that part of the code was abandoned to focus only on Parsing)

# DEMO

Watch the video on YouTube:

[![Watch the video](https://img.youtube.com/vi/G1mpP8RnQXw/hqdefault.jpg)](https://youtu.be/G1mpP8RnQXw)

# CLI
```
mvn clean compile
npm run-script prepublish && npm test
npm run wp
```
Note: with VSCode open the directories src/main-generated are re-populated automatically

# Reminders about TypeScript
- Use of `unknown` safe (it's the sum type of `Object | null | undefined`; use of `any` unsafe (it bypasses typechecking)
- use `--strictNullChecks` compiler flag
- Function types are BIvariant with respect to the underlying parameters type: this affects high order functions usage (i.e.: passing a function as a parameter to another function, you can pass a `(Triangle) => void` when `(Shape) => void` is required as a parameter)
- do NOT use empty-interfaces: because it's not possible to use the unique symbol trick on Interfaces, an empty interface is structural typing is an object with no properties: that's anything.
- helpful that `if(x instanceof Type)` in the branch now the compiler knows that `x` is `Type` hence the casting is not necessary and automatically managed

# Reminders about Antlr Java vs JS APIs and other gotchas
- on a Token in Java you call `.getText()` on TS you access `.text`
- slight variation when we want to use the same statement both on Java and JS/TS; need the explicit "this."
- on a Token in Java you call `.getStartIndex();`(`.getStopIndex();`) on TS you access `.start` (`.stop`)
- on the `.g4` grammar what in Java is `_localctx` in JS becomes `localctx`
- on the `.g4` grammar what in Java is `_input.LT(1)` in JS becomes `this._input.LT(1)`

