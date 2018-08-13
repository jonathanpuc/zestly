import * as React from "react"
import styled from "styled-components"

interface IOnboardingLineProps {
    onChange: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void,
    before: string,
    after?: string,
    name: string,
    inputVal: string,
    inputSize?: string
}

const OnboardingLine = (props: IOnboardingLineProps) => {
    const beforeText = props.before ? (
        <InputText>{props.before}</InputText>
    ) : null
    const afterText = props.after ? <InputText>{props.after}</InputText> : null

    const inputSizeMap = {
        small: '5.6rem',
        large: '23.3rem'
    }

    const inputSizeVal = props.inputSize ? inputSizeMap[props.inputSize] : ''

    const input = (
        <Input
            size={inputSizeVal}
            value={props.inputVal || ""}
            // tslint:disable
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(props.name, e)}
            type="text"
        />
    )


    return (
        <Container>
            {beforeText}
            {input}
            {afterText}
        </Container>
    )
}

export default OnboardingLine

const Container = styled.div`
    display: flex;
    
    :not(:last-child) {
        margin-bottom: 1.8rem;
    }
`

const InputText = styled.p`
    color: ${props => props.theme.blue};
    font-size: 2.8rem;
    font-weight: bold;
`

const Input = styled.input`
    width: ${(props: any) => props.size ? props.size : '13.7rem'};
    font-size: 2.8rem;
    font-weight: 600;
    color: ${props => props.theme.green};
    margin: 0 1rem;
    border: none;
    background-color: ${props => props.theme['97shade']};
    border-bottom: 2px solid ${props => props.theme.offwhite};
    transition: all 0.8s ease;
    &:focus {
        outline: none;
        border-bottom: 2px solid ${props => props.theme.purple};
    }
`