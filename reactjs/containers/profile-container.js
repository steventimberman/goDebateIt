/**
 * Created by Steven on 1/16/18.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LeftPanel from '../components/profile/left-panel'
import MainPanel from '../components/profile/main-panel'
import RightPanel from '../components/profile/right-panel'


class ProfilePage extends Component {
    createListItems(){
         return this.props.users.map((user) => {
             return(
                 <li key={user.id}>{user.name}</li>
             )
         });
    }

    render() {
        return(
            <div className="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <LeftPanel/>
                    </div>
                    <div class="col-md-6">
                        <MainPanel/>
                    </div>
                    <div class="col-md-3">
                        <RightPanel/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ProfilePage);
