// SeparateMouse.js
import { ref } from "vue";
import { useEventListener } from "@/composables/Separate2SmallPiece.js";

export function useMouse2() {
  const x = ref(0);
  const y = ref(0);

  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  return {  x, y2: y };
}
