import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserAction from './';


class UserList extends React.Component {
    componentDidMount() {
        this.props.dispatch(UserAction.actions.getUserRequest());
    }

    render() {
        const {userList} = this.props;
        return (
            <div>
            {userList && userList.map(element => 
               <p key= {element.id}> {element.id}.{element.role}</p>
            )} 
            </div>
        ); 
    }
}

const makeMapStateToProps = state => ({
      userList: UserAction.selectors.getUserList(state),      
      count: state.count
  });
  
  UserList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    userList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    count: PropTypes.number,
  };

  
export default connect(makeMapStateToProps)(UserList);