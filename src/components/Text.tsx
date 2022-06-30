import React from 'react';

type Rainbow =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'violet';

type AsProp<C extends React.ElementType> = {
    as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type PropsWithAs<C extends React.ElementType,Props>=Props&AsProp<C>;

type PolymorphicComponentProps<
    C extends React.ElementType,
    Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
    Omit<React.ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;

type TextProps = { color?: Rainbow | 'black' };

export const Text = <C extends React.ElementType = 'span'>({
    as,
    color,
    style,
    children,
    ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
    const internalStyles = color
        ? { style: { ...style, color } }
        : style
        ? { style: { ...style } }
        : {};
    const Component = as || 'span';
    return (
        <Component {...restProps} {...internalStyles}>
            {children}
        </Component>
    );
};
