// Type declarations for gsap-trial modules that don't ship their own types
declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[], vars?: Record<string, any>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}

declare module 'gsap-trial/*' {
  const value: any;
  export default value;
}
