import * as React from 'react'
import styled from 'styled-components'

import { LargeCard, SmallCard } from './ProfilePhoto'

interface IState {
    mainPhoto: string,
    photos: string[],
    swapping: boolean,
    selectedCardIndex: number
}

const swapArrayElements = (arr: string[], indexA: number, indexB: number) => {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    return arr
};

const photoData = [
    'http://www.fillmurray.com/600/600',
    'http://www.fillmurray.com/500/500',
    'http://www.fillmurray.com/300/300',
    'http://www.fillmurray.com/800/800',
    'http://www.fillmurray.com/700/700',
    'http://www.fillmurray.com/1000/1000'
]


export default class ProfilePhotoGrid extends React.Component<{}, IState> {

    public state = {
        mainPhoto: '',
        photos: [],
        swapping: false,
        selectedCardIndex: -1
    }
    /**
     * componentDidMount() {
     *  
     * set profilePhoto url as mainPhoto
     * spread profilePictures into rest
     * 
     * }
     */

    public componentDidMount() {
        this.setState({ mainPhoto: photoData[0], photos: photoData })
    }

    public handleCardClick = (index: number) => {
        if (!this.state.swapping) {
            this.setState({ swapping: true, selectedCardIndex: index })
            // same card has been selected, cancel
        } else if (this.state.selectedCardIndex === index) {
            this.setState({ swapping: false, selectedCardIndex: -1 })
        } else if (this.state.swapping && this.state.selectedCardIndex > -1) {
            this.swapPhotoPosition(index)
        }
    }

    public swapPhotoPosition = (cardToSwapIndex: number) => {
        const { selectedCardIndex, photos } = this.state
        const photoToSwap: string = photos[cardToSwapIndex]

        const swappedPhotos: string[] = swapArrayElements(photos, selectedCardIndex, cardToSwapIndex)

        if (photos[selectedCardIndex] === this.state.mainPhoto) {
            this.setState({ mainPhoto: photoToSwap })
        }

        this.setState({ photos: swappedPhotos, swapping: false, selectedCardIndex: -1 })

    }

    public deletePhoto = (index: number) => {
        const photos: string[] = this.state.photos
        photos[index] = ''
        const reorderedPhotos = this.reorderPhotos(photos)
        this.setState({ photos: reorderedPhotos })
    }

    public reorderPhotos = (photos: string[]) => {
        const empties: string[] = []
        const valid: string[] = []

        photos.forEach(photoUrl => {
            if (!photoUrl) {
                empties.push(photoUrl)
            } else {
                valid.push(photoUrl)
            }
        })

        return [...valid, ...empties]
    }


    public render() {
        const renderPhotoCards = () => this.state.photos.map((photo: string, index: number) => {
            if (index === 0) {
                return (<LargeCard
                    photoUrl={this.state.photos[index]}
                    // tslint:disable-next-line
                    onDeleteClick={() => this.deletePhoto(index)}
                    // tslint:disable-next-line 
                    onAddClick={() => console.log('add')}
                    // tslint:disable-next-line 
                    onSelect={() => this.handleCardClick(index)}
                    key={index}
                />)
            } else {
                return (
                    <SmallCard
                        photoUrl={this.state.photos[index]}
                        // tslint:disable-next-line
                        onDeleteClick={() => this.deletePhoto(index)}
                        // tslint:disable-next-line 
                        onAddClick={() => console.log('add')}
                        // tslint:disable-next-line 
                        onSelect={() => this.handleCardClick(index)}
                        key={index} />
                )
            }
        })
        return (
            <Outer>
                {renderPhotoCards()}
            </Outer>
        )
    }
}


const Outer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: repeat(3, min-content);
    grid-gap: 10px;
    justify-content: center;
    > div:first-child {
        grid-column: 1 / span 2;
        grid-row: 1 / 3;
    }

    > div:first-child + div + div {
        grid-column: 3 - 1;
        grid-row: 2 / 3;
    }
`
