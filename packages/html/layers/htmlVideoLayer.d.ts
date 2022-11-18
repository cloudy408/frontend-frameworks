import { Plugins, HtmlPluginState, VideoSources, VideoType } from '../types.js';
import { CloudinaryVideo } from "@cloudinary/url-gen";
export declare class HtmlVideoLayer {
    videoElement: any;
    originalVideo: CloudinaryVideo;
    htmlPluginState: HtmlPluginState;
    mimeType: string;
    mimeSubTypes: {
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
    constructor(element: HTMLVideoElement | null, userCloudinaryVideo: CloudinaryVideo, sources: VideoSources, plugins?: Plugins, videoAttributes?: object);
    /**
     * Handles user supplied sources or default sources
     * @param userCloudinaryVideo {CloudinaryVideo}
     * @param sources
     */
    handleSourceToVideo(userCloudinaryVideo: CloudinaryVideo, sources: VideoSources): void;
    /**
     * Generate sources based on user input
     * @param userCloudinaryVideo {CloudinaryVideo}
     * @param sources
     */
    generateUserSources(userCloudinaryVideo: CloudinaryVideo, sources: VideoSources): void;
    /**
     * Appends source tag to html video element
     * @param userCloudinaryVideo {CloudinaryVideo}
     * @param type {string}
     * @param mimeType {string}
     */
    appendSourceTag(userCloudinaryVideo: CloudinaryVideo, type: string, mimeType?: string): void;
    /**
     * Determines MIME type of given source type and codecs.
     * @param type - format of the video
     * @param codecs - optional information about codecs of the video
     */
    buildMimeType(type: VideoType, codecs: string[]): string;
    /**
     * Iterates through the video attributes and sets to true if passed in by the user.
     * In case of poster, sets the poster.
     * @param videoAttributes {object} Supported attributes: controls, loop, muted, poster, preload, autoplay, playsinline
     */
    setVideoAttributes(videoAttributes: object): void;
    /**
     * Called when component is updated. If our video source has changed, a video reload is triggered.
     * @param updatedCloudinaryVideo
     * @param sources
     * @param plugins
     * @param videoAttributes
     */
    update(updatedCloudinaryVideo: CloudinaryVideo, sources: VideoSources, plugins?: Plugins, videoAttributes?: object): void;
}
