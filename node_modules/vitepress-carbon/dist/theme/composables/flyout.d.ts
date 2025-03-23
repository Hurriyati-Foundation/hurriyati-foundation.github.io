import { type Ref } from 'vue';
interface UseFlyoutOptions {
    el: Ref<HTMLElement | undefined>;
    onFocus?(): void;
    onBlur?(): void;
}
export declare const focusedElement: Ref<HTMLElement | undefined, HTMLElement | undefined>;
export declare function useFlyout(options: UseFlyoutOptions): Readonly<Ref<boolean, boolean>>;
export {};
