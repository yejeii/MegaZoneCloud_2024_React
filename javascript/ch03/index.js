// Node.js 사용
// react/intro.txt 참고

import * as circle from "./circle.js";
import lodash from "lodash";

const arr = [1111, 222, 111, 44, 33, 222];

// lodash : 객체와 배열 관련 기능 제공
const uniquArr = lodash.uniqBy(arr);
console.log(uniquArr);

console.log(circle.PI, circle.getArea(1), circle.getCircumgerence(1));
//console.log("index run");
