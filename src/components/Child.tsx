import { defineComponent } from "vue";
import { css, cx } from "@emotion/css";

export default defineComponent({
  inheritAttrs: false,
  props: {
    msg: { type: String, default: "" },
  },
  setup(props, ctx) {
    return () => {
      return (
        <div
          class={cx(
            css`
              font-size: 16px;
            `,
            ctx.attrs.class as string
          )}
        >
          {props.msg}
        </div>
      );
    };
  },
});
