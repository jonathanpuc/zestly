import * as React from 'react';
import styled from 'styled-components'
import Button from '../components/general/Button'
import OnboardingLine from '../components/profile/OnboardingLine'
import SmallButton from '../components/general/SmallButton'
import ProfilePhotoGrid from '../components/profile/ProfilePhotoGrid'
import LogoNav from '../components/general/LogoNav'
interface IOnboardingState {
    showing: string,
    name: string,
    age: string,
    suburb: string,
    distance: string
}
export default class Onboarding extends React.Component<{}, IOnboardingState> {

    public state = {
        showing: 'first',
        name: '',
        age: '',
        suburb: '',
        distance: ''
    }

    public handleLineChange = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    public handleDistanceChange = (distance: string) => {
        this.setState({ distance })
    }

    public nextDetails = () => {
        if (this.state.showing === 'first') {
            this.setState({ showing: 'second' })
        } else if (this.state.showing === 'second') {
            this.setState({ showing: 'third' })
        }

    }

    public validateStep = () => {
        if (this.state.showing === 'first') {
            return this.state.name && this.state.age ? true : false
        } else if (this.state.showing === 'second') {
            return true
        } else {

            return this.state.suburb && this.state.distance ? true : false
        }
    }

    public goBackStep = () => {
        if (this.state.showing === 'second') {
            this.setState({ showing: 'first' })
        } else {
            this.setState({ showing: 'second' })
        }
    }

    public render() {
        const descriptionTitle = {
            first: 'Nice tell me a little about yourself?',
            second: 'Lets upload some photos so people know you\'re human',
            third: `Hey there, ${this.state.name}. One more step, Where should we hang?`,
        }

        const renderProfileDetails = () => (
            <LineBlock>
                <OnboardingLine
                    before='My name is'
                    name='name'
                    inputVal={this.state.name}
                    onChange={this.handleLineChange}
                />
                <OnboardingLine
                    before="and I'm"
                    after='years old'
                    name='age'
                    inputVal={this.state.age}
                    inputSize='small'
                    onChange={this.handleLineChange}
                />
            </LineBlock>
        )

        const renderPhotoDetails = () => (
            <React.Fragment>
                <ProfilePhotoGrid />
            </React.Fragment>
        )

        const renderLocationDetails = () => (
            <LineBlock>
                <OnboardingLine
                    before='I live in'
                    name='suburb'
                    inputVal={this.state.suburb}
                    inputSize='large'
                    onChange={this.handleLineChange}
                />
                <FillerLine>And I'm interested in</FillerLine>
                <FillerLine>meeting people up to</FillerLine>
                <DistanceButtons>
                    <SmallButton
                        selected={this.state.distance === '5'}
                        // tslint:disable-next-line jsx-no-lambda
                        onClick={() => this.handleDistanceChange('5')}
                    >5 km</SmallButton>
                    <SmallButton
                        selected={this.state.distance === '10'}
                        // tslint:disable-next-line jsx-no-lambda
                        onClick={() => this.handleDistanceChange('10')}>10 km</SmallButton>
                    <SmallButton
                        selected={this.state.distance === '15'}
                        // tslint:disable-next-line jsx-no-lambda
                        onClick={() => this.handleDistanceChange('15')}>15 km</SmallButton>
                    <SmallButton
                        selected={this.state.distance === '20'}
                        // tslint:disable-next-line jsx-no-lambda
                        onClick={() => this.handleDistanceChange('20')}>20 km</SmallButton>
                </DistanceButtons>
                <FillerLine>away from me</FillerLine>
            </LineBlock>
        )


        return (
            <MainOuter>
                <LogoNav backPage={this.state.showing !== 'first'} onBackClick={this.goBackStep} />
                <Description>{descriptionTitle[this.state.showing]}</Description>
                {
                    this.state.showing === 'first' ?
                        renderProfileDetails()
                        : this.state.showing === 'second' ? renderPhotoDetails() : renderLocationDetails()
                }
                <ButtonWrapper>
                    <Button filled={true} onClick={this.nextDetails} disabled={!this.validateStep()}>Next</Button>
                </ButtonWrapper>
            </MainOuter>
        )
    }
}

const MainOuter = styled.div`
    display: flex;
    flex-direction: column;
`

const ButtonWrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
`

const Description = styled.p`
    color: ${props => props.theme.grey};

    width: 80%;
    margin: 30px auto 20px auto;
    text-align: left;

`
const FillerLine = styled.p`
    color: ${props => props.theme.blue};
    font-size: 2.8rem;
    font-weight: bold;

    :not(:last-child) {
        margin-bottom: 1.8rem;
    }
`

const LineBlock = styled.div`
    display: inline-block;
    margin: 0 auto;
`

const DistanceButtons = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    margin-bottom: 1.8rem;
    button {
        transition: all 0.3s ease;
    }
`