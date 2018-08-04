import * as React from 'react';
import ButtonStyle from '../styles/Button'

interface ISmallButtonProps {
    onClick?: () => void;
    selected?: boolean;
    children?: any;
}

const NO_OP = () => { }

const Button: React.SFC<ISmallButtonProps> = (p: ISmallButtonProps) => {

    const handler = p.onClick || NO_OP

    return (
        <Outer {...p} onClick={handler}>
            {p.children}
        </Outer>
    )
}

const Outer = ButtonStyle.extend`
    height: 4.8rem;
    width: 8.5rem;
    border: 1px solid ${(props: any) => props.selected ? props.theme.green : props.theme.offwhite};
    color: ${(props: any) => props.selected ? '#fff' : props.theme.blue};
    background-color: ${(props: any) => props.selected && props.theme.green};
    &:hover {
        cursor: pointer;
    }
`

export default Button