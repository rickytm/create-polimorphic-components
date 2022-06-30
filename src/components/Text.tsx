import React from 'react';
import { PolymorphicComponentPropsWithRef, PolymorphicRef, Props, Rainbow } from './polymorphic';

type TextProps = { color?: Rainbow | 'black' };
type TextComponent = <C extends React.ElementType>(
    props: PolymorphicComponentPropsWithRef<C, TextProps>
) => React.ReactElement | null;

export const Text:TextComponent = React.forwardRef(
    <C extends React.ElementType = 'span'>(
        { as, color, style, children, ...restProps }: Props<C, TextProps>,
        ref?: PolymorphicRef<C>
    ) => {
        const internalStyles = color
            ? { style: { ...style, color } }
            : style
            ? { style: { ...style } }
            : {};
        const Component = as || 'span';
        return (
            <Component {...restProps} {...internalStyles} ref={ref}>
                {children}
            </Component>
        );
    }
);
