export type AsProp<C extends React.ElementType> = {
    as?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
export type PropsWithAs<
    C extends React.ElementType,
    Props = {}
> = React.PropsWithChildren<Props & AsProp<C>>;

export type PolymorphicRef<C extends React.ElementType> =
    React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentProps<
    C extends React.ElementType,
    Props = {}
> = PropsWithAs<C, Props> &
    Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type Props<C extends React.ElementType, P> = PolymorphicComponentProps<
    C,
    P
>;

export type PolymorphicComponentPropsWithRef<
    C extends React.ElementType,
    P
> = PolymorphicComponentProps<C, P> & {
    ref?: PolymorphicRef<C>;
};
export type Rainbow =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'violet';
