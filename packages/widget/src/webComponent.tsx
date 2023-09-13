import r2wc from '@r2wc/react-to-web-component';
import { Widget } from '.';

declare global {
  export interface Window {
    widgetProperties: (func: () => number | string) => void;
  }
}

// Attribute definition
const WidgetWebComponet = r2wc(Widget, {
  props: {
    primaryColor: 'string',
    secondaryColor: 'string',
    borderRadiusPrimary: 'string',
    fontWeightPrimary: 'string',
    resourceList: 'array'
  }
});

customElements.define('widget-component', WidgetWebComponet);

export default WidgetWebComponet;
