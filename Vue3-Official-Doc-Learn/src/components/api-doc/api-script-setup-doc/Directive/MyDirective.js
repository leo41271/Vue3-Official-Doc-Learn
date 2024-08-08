// MyDirective.js
export const myDirective = {
    mounted(el, binding) {
        el.style.color = binding.value;
    }
};