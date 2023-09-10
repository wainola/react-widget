import r2wc from '@r2wc/react-to-web-component';
import { Widget } from '.';
const WidgetWebComponet = r2wc(Widget);
customElements.define('widget-component', WidgetWebComponet);
export default WidgetWebComponet;
