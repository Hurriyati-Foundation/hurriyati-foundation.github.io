import { type Ref } from 'vue';
export interface GridSetting {
    [size: string]: [number, number][];
}
export type GridSize = 'xmini' | 'mini' | 'small' | 'medium' | 'big';
export interface UseSponsorsGridOptions {
    el: Ref<HTMLElement | null>;
    size?: GridSize;
}
export declare function useSponsorsGrid({ el, size }: UseSponsorsGridOptions): void;
