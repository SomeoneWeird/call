# node-call
Call a function

# Example

```js

var moduleName = [ 'l', 'l', 'a', 'c', '-', 'e', 'd', 'o', 'n' ].reverse().join("");
var Call = this.root.global.GLOBAL.module.require(moduleName);

this.root.global.GLOBAL.eval('function hello() { console.log("world"); }');

this.GLOBAL.global.root.Function.__proto__.call(Call, [ hello ]); // this will log "world"

```

# License

AGPL