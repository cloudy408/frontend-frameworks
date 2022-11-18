import { HtmlPluginState } from '../types.js';
/**
 * Cancels currently running plugins. This is called from unmount or update
 * @param pluginState {HtmlPluginState} Holds cleanup callbacks and event subscriptions
 */
export declare function cancelCurrentlyRunningPlugins(pluginState: HtmlPluginState): void;
