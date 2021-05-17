import createEmotion from "@emotion/css/create-instance/dist/emotion-css-create-instance.esm";

import extraScopePlugin from "./stylis-plugin-extra-scope";

const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
} = createEmotion({
  key: "css",
  stylisPlugins: [extraScopePlugin("#body")],
});

export {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
};
