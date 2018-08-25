import * as React from 'react'
import styled from 'styled-components'
import Sprite from '../../components/icons'

interface ISeekingTagProps { type: string, seeking: string[], onTagClick: (type: string) => void }

const SeekingTag: React.SFC<ISeekingTagProps> = (props) => {

    const handleClick = () => {
        props.onTagClick(props.type)
    }
    // @ts-ignore
    const isActive = props.seeking.includes(props.type)

    const icons = {
        'relationship': <Sprite icon='heart' color={isActive ? '#B6486D' : ''} />,
        'friends': <Sprite icon='people' color={isActive ? '#286555' : ''} />
    }

    const tagColor = {
        'relationship': '#FCA1C0',
        'friends': '#69B4A0'
    }

    const fontColor = {
        'relationship': '#B6486D',
        'friends': '#286555'
    }


    return (
        <Outer
            onClick={handleClick}
            isActive={isActive}
            bgColor={tagColor[props.type]}
            textColor={fontColor[props.type]}
        >
            {icons[props.type]}
            <p>{props.type}</p>
        </Outer>
    )
}

export default SeekingTag

const Outer = styled.div`
  padding: 0px 14px;
  font-size: 1.4rem;
  height: 3.6rem;
  border-radius: 18px;
  background-color: ${(props: any) => props.isActive ? props.bgColor : props.theme.offwhite};
  color: ${(props: any) => props.isActive ? props.textColor : 'inherit'};
  transition: all 0.1s linear;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: capitalize;
  svg {
    margin-right: 5px;
  }
  cursor: pointer;
`