import { Transformation } from "@cloudinary/url-gen/transformation/Transformation";
/**
 * Predefined accessibility transformations
 * @const {Object} Cloudinary.ACCESSIBILITY_MODES
 */
export declare const ACCESSIBILITY_MODES: {
    darkmode: import("@cloudinary/transformation-builder-sdk/actions/effect/Colorize").ColorizeEffectAction;
    brightmode: import("@cloudinary/transformation-builder-sdk/actions/effect/Colorize").ColorizeEffectAction;
    monochrome: import("@cloudinary/transformation-builder-sdk/actions/effect/EffectActions/SimpleEffectAction").SimpleEffectAction;
    colorblind: import("@cloudinary/transformation-builder-sdk/actions/effect/AssistColorBlind").AssistColorBlindEffectAction;
};
/**
 * Predefined vectorize placeholder transformation
 */
export declare const VECTORIZE: Transformation;
/**
 * Predefined pixelate placeholder transformation
 */
export declare const PIXELATE: Transformation;
/**
 * Predefined blur placeholder transformation
 */
export declare const BLUR: Transformation;
/**
 * Predefined predominant color placeholder transformation
 */
export declare const PREDOMINANT_COLOR_TRANSFORM: Transformation;
/**
 * Predefined placeholder image options
 */
export declare const PLACEHOLDER_IMAGE_OPTIONS: {
    vectorize: Transformation;
    pixelate: Transformation;
    blur: Transformation;
    'predominant-color': Transformation;
};
/**
 * transparent gif
 */
export declare const singleTransparentPixel = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
/**
 * Convert common video file extensions to mime types
 * Most other common video file extensions have an identical mime type so do not need conversion.
 */
export declare const VIDEO_MIME_TYPES: {
    flv: string;
    '3gp': string;
    mov: string;
    mpg: string;
    avi: string;
    wmv: string;
    ogv: string;
    webm: string;
    mp4: string;
};
