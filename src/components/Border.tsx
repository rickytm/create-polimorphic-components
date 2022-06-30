import React from 'react';
import {
    PolymorphicComponentPropsWithRef,
    Props,
    PolymorphicRef,
} from './polymorphic';

type Variant =
    | 'dotted'
    | 'dashed'
    | 'solid'
    | 'double'
    | 'groove'
    | 'ridge'
    | 'inset'
    | 'outset'
    | 'none'
    | 'hidden';

interface BorderProps {
    color?: string | 'black';
    variant?: Variant;
    width?: number;
}

type BorderComponent = <C extends React.ElementType>(
    prop: PolymorphicComponentPropsWithRef<C, BorderProps>
) => React.ReactElement | null;

const Border: BorderComponent = React.forwardRef(
    <C extends React.ElementType = 'div'>(
        {
            as,
            color,
            variant,
            width,
            children,
            ...restProps
        }: Props<C, BorderProps>,
        ref?: PolymorphicRef<C>
    ) => {
        const Component = as || 'div';
        const { style } = restProps;
        const borderColor = color ? { borderColor: color } : null;
        const borderStyle = variant ? { borderStyle: variant } : null;
        const borderWidth = width ? { borderWidth: `${width}px` } : null;

        const internalStyle = {
            style: { ...style, ...borderColor, ...borderStyle, ...borderWidth },
        };

        console.log({ internalStyle, restProps });

        return (
            <Component {...restProps} {...internalStyle} ref={ref}>
                {children}
            </Component>
        );
    }
);
export default Border;
