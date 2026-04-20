// Type declarations for GSAP premium plugins (now free since April 2025)
declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[], vars?: Record<string, any>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(value?: number): number;
    scrollTo(target: string | Element, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
