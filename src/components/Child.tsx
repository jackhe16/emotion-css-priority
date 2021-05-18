import { defineComponent } from "vue";
import { css } from "@emotion/css";

export default defineComponent({
  props: {
    msg: { type: String, default: "" },
  },
  setup(props) {
    return () => {
      return (
        <div
          class={css`
            font-size: 16px;
          `}
        >
          {props.msg}
        </div>
      );
    };
  },
});
