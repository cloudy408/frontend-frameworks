import { CloudinaryImage } from "@cloudinary/url-gen/assets/CloudinaryImage";
import { Plugins, HtmlPluginState, AnalyticsOptions } from '../types.js';
export declare class HtmlImageLayer {
    private imgElement;
    htmlPluginState: HtmlPluginState;
    constructor(element: HTMLImageElement | null, userCloudinaryImage: CloudinaryImage, plugins?: Plugins, analyticsOptions?: AnalyticsOptions);
    /**
     * Called when component is updated and re-triggers render
     * @param userCloudinaryImage
     * @param plugins
     * @param analyticsOptions
     */
    update(userCloudinaryImage: CloudinaryImage, plugins: any, analyticsOptions?: AnalyticsOptions): void;
}
