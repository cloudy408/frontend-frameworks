import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { Plugin, AccessibilityMode, HtmlPluginState } from "../types.js";
/**
 * @namespace
 * @description Appends accessibility transformations to the original image.
 * @return {Plugin}
 * @example <caption>NOTE: The following is in React. For further examples, see the Packages tab.</caption>
 * <AdvancedImage cldImg={img} plugins={[accessibility()]}/>
 */
export declare function accessibility({ mode }?: {
    mode?: string;
}): Plugin;
/**
 * @description Accessibility plugin
 * @param mode {accessibilityMode} The accessibility mode to use. Possible modes: 'darkmode' | 'brightmode' | 'monochrome' | 'colorblind'. Default: 'darkmode'.
 * @param element {HTMLImageElement} The image element.
 * @param pluginCloudinaryImage {CloudinaryImage}
 * @param htmlPluginState {htmlPluginState} Holds cleanup callbacks and event subscriptions.
 */
export declare function accessibilityPlugin(mode: AccessibilityMode, element: HTMLImageElement, pluginCloudinaryImage: CloudinaryImage, htmlPluginState: HtmlPluginState): Promise<void | string> | boolean;
