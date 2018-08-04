import * as React from 'react';
// Styles
import ButtonStyle from '../styles/Button'

interface IButtonProps {
    onClick?: () => void;
    filled?: boolean;
    children?: any;
    disabled?: boolean;
}

const NO_OP = () => { }

const Button: React.SFC<IButtonProps> = (p: IButtonProps) => {

    const handler = p.onClick || NO_OP

    return (
        <Outer {...p} onClick={handler}>
            {p.children}
        </Outer>
    )
}


const Outer = ButtonStyle.extend`
    height: 4.8rem;
    width: 32rem;
    border: 1px solid ${props => props.theme.blue};
    color: ${(props: any) => props.filled ? '#fff' : props.theme.blue};
    background-color: ${(props: any) => props.filled && props.theme.blue};
    &:disabled {
        opacity: 0.5;
    }
    &:hover {
        cursor: pointer;
    }
    &:focus:enabled {
        border-width: ${(props: any) => !props.filled && '2px'};
        box-shadow: ${(props: any) => props.filled && `0 0 3pt 3pt ${props.theme.offwhite}`};
    }
    transition: all 0.3s ease;
`
export default Button