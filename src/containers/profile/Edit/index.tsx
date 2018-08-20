import * as React from 'react'
import NavHeader from '../../../components/general/NavHeader'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProfileEditProps extends RouteComponentProps<{}> {
    backPage: boolean,
    onBackClick?: () => void,
    shareButton?: boolean,
    fill?: boolean
}


class ProfileEdit extends React.Component<IProfileEditProps, {}> {

    public confirmChanges = () => {
        console.log('changes confirmed')
    }

    public exit = () => {
        this.props.history.push('/home/profile')
    }
    public render() {
        return (
            <div>
                <NavHeader
                    backPage={true}
                    heading='Edit your profile'
                    onBackClick={this.exit}
                    action={{ type: 'confirm', onClick: this.confirmChanges }}
                />
                Edit
            </div>
        )
    }
}

export default withRouter(ProfileEdit)