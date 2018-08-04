import * as React from 'react';
import icon from '../../img/icons/directions.svg'
import ButtonStyle from '../styles/Button'

interface IDirectionButtonProps {
    onClick?: () => void;
}

const NO_OP = () => { }

const Button: React.SFC<IDirectionButtonProps> = (props) => {

    const handler = props.onClick || NO_OP

    return (
        <Outer onClick={handler}>
            <img src={icon} alt="directions" /> Directions
        </Outer>
    )
}

export default Button

const Outer = ButtonStyle.extend`
      height: 4.8rem;
      width: 13.3rem;
      color: #fff;
      background-color: ${props => props.theme.blue};
      display: flex;
      justify-content: center;
      img {
          height: 1.9rem;
          width: 1.9em;
          margin-right: 5px;
      }
  `