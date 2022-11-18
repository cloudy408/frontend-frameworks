import { Plugin } from "../types";
/**
 * @namespace
 * @description Displays a placeholder image until the original image loads.
 * @param mode {PlaceholderMode} The type of placeholder image to display. Possible modes: 'vectorize' | 'pixelate' | 'blur' | 'predominant-color'. Default: 'vectorize'.
 * @return {Plugin}
 * @example <caption>NOTE: The following is in React. For further examples, see the Packages tab.</caption>
 * <AdvancedImage cldImg={img} plugins={[placeholder({mode: 'blur'})]} />
 */
export declare function placeholder({ mode }?: {
    mode?: string;
}): Plugin;
