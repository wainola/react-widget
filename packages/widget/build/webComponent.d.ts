declare global {
    export interface Window {
        widgetProperties: (func: () => number | string) => void;
        setupEvent: CustomEvent;
    }
}
declare const WidgetWebComponet: CustomElementConstructor;
export default WidgetWebComponet;
