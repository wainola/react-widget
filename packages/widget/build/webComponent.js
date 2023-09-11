import r2wc from '@r2wc/react-to-web-component';
import { Widget } from '.';
// Attribute definition
const WidgetWebComponet = r2wc(Widget, {
    props: {
        primaryColor: 'string',
        secondaryColor: 'string',
        borderRadiusPrimary: 'string',
        fontWeightPrimary: 'string'
    }
});
customElements.define('widget-component', WidgetWebComponet);
export default WidgetWebComponet;
