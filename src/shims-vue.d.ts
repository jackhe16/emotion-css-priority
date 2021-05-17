/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Make enabled to specify unknown attributes(props) to the Vue components
declare namespace JSX {
  interface IntrinsicAttributes {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: any;
  }
}
