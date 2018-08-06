import * as React from 'react';
import LogoNav from '../../components/general/LogoNav'
import Search from '../../components/general/Search'
import styled from 'styled-components'
import MeetsList from './List'
interface IMeetsProps {
    searchResult: string
}
export default class Meets extends React.Component<IMeetsProps, {}> {

    public render() {
        return (
            <div>
                <LogoNav backPage={true} />
                <Search />
                <MeetsSection>
                    <h2>Meets happening soon.</h2>
                    <MeetsList heading='Meets happening soon' />
                </MeetsSection>
            </div>
        )
    }

}

const MeetsSection = styled.section`
    max-width: 95%;
    margin: 45px auto;
        h2 {
        color: ${props => props.theme.grey};
        font-weight: 500;
        margin-bottom: 20px;
    }
`
