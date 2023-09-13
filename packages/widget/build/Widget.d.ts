export type WidgetProps = {
    primaryColor?: string;
    secondaryColor?: string;
    borderRadiusPrimary?: string;
    fontWeightPrimary?: string;
    resourceList?: Array<{
        resourceId: string;
        type: 'fungible' | 'permissionlessGeneric';
        address: string;
        symbol: string;
        decimals: number;
    }>;
};
export default function Widget(props: WidgetProps): import("react/jsx-runtime").JSX.Element;
