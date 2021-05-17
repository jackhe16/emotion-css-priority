import { defineComponent } from "vue";
import { css } from "@emotion/css";

import Child from "./Child";

export default defineComponent({
  props: {},
  setup() {
    return () => {
      return (
        <Child
          class={css`
            font-size: 20px;
          `}
          msg="Hello, World!"
        />
      );
    };
  },
});
