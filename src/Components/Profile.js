import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className='tc'>
                <h1>{this.props.user.email}</h1>
                <h1>{this.props.user.displayName}</h1>
            </div>
        );
    }
}

export default Profile;