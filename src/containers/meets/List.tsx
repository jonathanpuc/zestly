import * as React from 'react';
import styled from 'styled-components'
import CardListItem from '../../components/meet/cards/CardListItem'
interface IMeetListItem {
    name: string
}

interface IMeetsListProps {
    meets?: [IMeetListItem],
    heading?: string
}
export default class MeetsList extends React.Component<IMeetsListProps, {}> {

    public render() {
        return (
            <Outer>
                <li><CardListItem /></li>
                <li><CardListItem /></li>
                <li><CardListItem /></li>
                <li><CardListItem /></li>
                <li><CardListItem /></li>
            </Outer>
        )
    }


}

const Outer = styled.ul`
    display: grid;
    grid-row-gap: 15px;
    margin-bottom: 30px;
`
