import { Plugin } from '../types.js';
/**
 * @namespace
 * @description Loads an image once it is in a certain margin in the viewport. This includes vertical and horizontal scrolling.
 * @param rootMargin {string} The root element's bounding box before the intersection test is performed. Default: 0px.
 * @param threshold {number} The percentage of the image's visibility at which point the image should load. Default: 0.1 (10%).
 * @return {Plugin}
 * @example
 * <caption>
 * NOTE: The following is in React. For further examples, see the Packages tab.
 * When using the plugin make sure to add dimensions, otherwise the images will load with
 * the size of 0x0, meaning the images will be in the viewport and trigger the lazyload plugin.
 * </caption>
 * <AdvancedImage style={{width: "400px", height: "400px"}}  cldImg={img} plugins={[lazyload({rootMargin: '0px',
 * threshold: 0.25})]} />
 */
export declare function lazyload({ rootMargin, threshold }?: {
    rootMargin?: string;
    threshold?: number;
}): Plugin;
