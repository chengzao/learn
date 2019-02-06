const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass {

    // 公有方法
    foo(baz) {
        this[bar](baz);
    }

    // 私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }
};