import React from 'react';

export type TBaseRatingProps = {
    disabled?: boolean;
    icon?: React.ReactNode;
    name?: string;
    max?: number;
    onChange?: (event: React.SyntheticEvent, value: number | null) => void;
    precision?: number;
    readOnly?: boolean;
    size?: 'small' | 'medium' | 'large';
    value?: number | null;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}
export type TBaseRating = React.ComponentType<TBaseRatingProps>;

export const BaseRating: TBaseRating = (props) => {
    return <div
        className={props.className}
        style={props.style}
        id={props.id}
    >{props.icon}{props.children}{props.value}</div>
}