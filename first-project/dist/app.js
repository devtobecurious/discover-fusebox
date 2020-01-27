(function($fsx){
// default/index.js
$fsx.f[0] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
const test1_1 = $fsx.r(1);
const test2_1 = $fsx.r(2);
const test = new test1_1.test1();
test2_1.default();
}
// default/test1.js
$fsx.f[1] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
class test1 {
}
exports.test1 = test1;
}
// default/test2.js
$fsx.f[2] =
function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
function hello() {
    console.log('coucou, test2');
}
exports.default = hello;
}
$fsx.r(0)
})($fsx);

