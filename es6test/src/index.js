//export 输出
//import 引入
export var name = 'jslong';
var a=1;
var b=1;
var c=1;

export {a,b,c}

// 语义化
export {
	name as a,
	cname as b,
	skill as c
}
import {name,cname,skill} from './..';


export default var a='longlong';

import long from './..'; //long自定义名称，在export default

