export function capitalize(text) {
  return text.toUpperCase();
}
export function lowerCase(text) {
  return text.toLowerCase();
}
function testString(text) {
  return text + " " + Math.random();
}
function testString2(text) {
  return text + " " + Math.random() * 2;
}
// module.exports = { testString, testString2 }; // 使用 CommonJS 的方式導出模組 不能在前端使用