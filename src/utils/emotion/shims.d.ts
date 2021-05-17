declare module "@emotion/css/create-instance/dist/emotion-css-create-instance.esm" {
  import { EmotionCache } from "@emotion/utils";

  export type Interpolation = any;
  export type Interpolations = Array<Interpolation>;

  type CreateStyles<ReturnValue> = (...args: Interpolations) => ReturnValue;

  type ClassNameArg =
    | string
    | boolean
    | { [key: string]: boolean | void | null }
    | Array<ClassNameArg>
    | void
    | null;

  class StyleSheet {
    insert(rule: string): void;
    flush(): void;
    speedy(newVal: boolean): void;
    tags: Array<HTMLStyleElement>;
    isSpeedy: number;
    ctr: number;
  }

  export type Emotion = {
    css: CreateStyles<string>;
    cx: (...classNames: Array<ClassNameArg>) => string;
    flush: () => void;
    hydrate: (ids: Array<string>) => void;
    injectGlobal: CreateStyles<void>;
    keyframes: CreateStyles<string>;
    sheet: StyleSheet;
    cache: EmotionCache;
    merge: any;
    getRegisteredStyles: any;
  };

  let createEmotion: (options: any) => Emotion;

  export default createEmotion;
}
