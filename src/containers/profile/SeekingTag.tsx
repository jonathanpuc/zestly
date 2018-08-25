import * as React from 'react'
import styled, { withTheme, ThemeProps } from 'styled-components'
import Sprite from '../../components/icons'
import { IThemeProps } from '../../theme'


interface ISeekingTagProps extends ThemeProps<IThemeProps> {
    type: string,
    seeking: string[],
    onTagClick: (type: string) => void

}

const SeekingTag: React.SFC<ISeekingTagProps> = (props) => {

    const handleClick = () => {
        props.onTagClick(props.type)
    }
    // @ts-ignore
    const isActive = props.seeking.includes(props.type)


    const icons = {
        'relationship': <Sprite icon='heart' color={isActive ? props.theme.pinkDark : ''} />,
        'friends': <Sprite icon='people' color={isActive ? props.theme.greenDark : ''} />
    }

    const styles = {
        'relationship': {
            tagColor: props.theme.pink,
            textColor: props.theme.pinkDark
        },
        'friends': {
            tagColor: props.theme.green,
            textColor: props.theme.greenDark
        }
    }

    const iconStyle = styles[props.type]

    return (
        <Outer
            onClick={handleClick}
            isActive={isActive}
            iconStyle={iconStyle}
        >
            {icons[props.type]}
            <p>{props.type}</p>
        </Outer>
    )
}

export default withTheme(SeekingTag)

const Outer = styled.div`
  padding: 0px 14px;
  font-size: 1.4rem;
  height: 3.6rem;
  border-radius: 18px;
  background-color: ${(props: any) => props.isActive ? props.iconStyle.tagColor : props.theme.offwhite};
  color: ${(props: any) => props.isActive ? props.iconStyle.textColor : 'inherit'};
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