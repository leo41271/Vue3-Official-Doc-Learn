// 定義 Person 類
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// 將 Person 類導出，以便在 <script setup> 中使用
export { Person };