import * as React from 'react'
import styled from 'styled-components'
import add from './add.svg'
import plus from '../../img/icons/plus.svg'

interface IProfilePhotoProps {
    photoUrl: string,
    onDeleteClick: () => void,
    onAddClick: () => void,
    onSelect: () => void
}



export const LargeCard: React.SFC<IProfilePhotoProps> = ({ photoUrl, onDeleteClick, onAddClick, onSelect }: IProfilePhotoProps) => {

    const handleSelect = () => {
        onSelect()
    }

    const handleClick = () => {
        onDeleteClick()
    }


    const renderEmpty = () => (
        <EmptyCardLarge onClick={onAddClick}>
            <img src={plus} alt="add an image" />
            <p>Upload image</p>
        </EmptyCardLarge>
    )

    const renderPhoto = () => (
        <PhotoCardLarge >
            <img src={photoUrl} onClick={handleSelect} />
        </PhotoCardLarge>
    )

    return (
        <LargeCardOuter
        >
            {!photoUrl ? renderEmpty() : renderPhoto()}
            {photoUrl &&
                <PhotoEditIcon
                    onClick={handleClick}
                    existingPhoto={photoUrl ? true : false}
                    src={add}
                    alt="delete photo" />}
        </LargeCardOuter>
    )
}

const PhotoEditIcon = styled.img`
    height: 1.967rem;	
    width: 1.967rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 99;
    transition: all 0.2s linear;
    transform: ${(props: any) => props.existingPhoto ? `translate(4.5px, 4.5px) rotate(45deg)` : `translate(4.5px, 4.5px)`};
`

const LargeCardOuter = styled.div`
    height: 22rem;
    width: 22rem;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
`

const PhotoCardLarge = styled.div`
    height: 100%;
    width: 100%;
    > img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        position: absolute;
        z-index: 0;
    }
`

const EmptyCardLarge = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.redFaded};
    color: #fff;
    transition: all 0.15s linear;
    border-radius: 4px;
    img {
        height: 3.6rem;	
        width: 3.6rem;
        margin-bottom: 12px;
    }
    cursor: pointer;
    &:active {
        background-color: ${props => props.theme.red};
    }
`


export const SmallCard: React.SFC<IProfilePhotoProps> = ({ photoUrl, onDeleteClick, onAddClick, onSelect }: IProfilePhotoProps) => {
    const handleSelect = () => {
        onSelect()
    }

    const handleClick = () => {
        if (!photoUrl) {
            onAddClick()
        } else {
            onDeleteClick()
        }
    }

    const renderEmpty = () => (
        <EmptyCardSmall />
    )

    const renderPhoto = () => (
        <PhotoCardSmall >
            <img src={photoUrl} onClick={handleSelect} />
        </PhotoCardSmall>
    )
    return (
        <SmallCardOuter>
            {!photoUrl ? renderEmpty() : renderPhoto()}
            <PhotoEditIcon
                onClick={handleClick}
                existingPhoto={photoUrl ? true : false}
                src={add}
                alt={photoUrl ? 'delete photo' : 'add photo'} />
        </SmallCardOuter>
    )
}

const SmallCardOuter = styled.div`
    height: 10rem;
    width: 10rem;
    position: relative;
    cursor: pointer;
`

const EmptyCardSmall = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.offwhite};
    border-radius: 4px;
  
`

const PhotoCardSmall = styled.div`
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
`