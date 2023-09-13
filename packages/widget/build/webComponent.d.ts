declare global {
    export interface Window {
        widgetProperties: (func: () => number | string) => void;
    }
}
declare const WidgetWebComponet: CustomElementConstructor;
export default WidgetWebComponet;
