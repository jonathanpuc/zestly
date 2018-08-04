import * as React from 'react';
import styled from 'styled-components'
// import Button from '../../components/general/Button'
import Search from '../../components/general/Search'
import Navigation from '../../components/general/Navigation'
interface IHomeState {
    meets: string[]
}
export default class Home extends React.Component<{}, IHomeState> {

    public state = {
        meets: []
    }

    public render() {


        return (
            <div>
                <Navigation />
                <MainContent>
                    <section>
                        <h2>What are you waiting for?</h2>
                    </section>
                </MainContent>
                <Search />
            </div>
        )
    }
}

const MainContent = styled.div`

`
