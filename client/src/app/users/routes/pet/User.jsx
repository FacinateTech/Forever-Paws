import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavComponent from '../../navbar/index';

/* eslint react/prop-types:0 */
const UserStyle = styled.div`
  <<<<<<<HEAD
  position: relative;
  z-index: 2;
  =======position: absolute;
  z-index: 2;
  top: 10%;
  >>>>>>>28138f8b1ca2278d1df655fff3767613bd9f0416
  width: 100%;
  height: 90%;
  overflow: hidden;
  padding-top: 4%;
  color: white;
`;

const Field = styled.div`
  position: absolute;
  z-index: 2;
  top: 20%;
  width: 100%;
  height: 7%;
  border-width: 2px;
  border-color: 'black';
  border-style: solid;
  overflow: hidden;
<<<<<<< HEAD
  margin-left: 10%;
  margin-right: 10%;
=======
>>>>>>> 28138f8b1ca2278d1df655fff3767613bd9f0416
`;

const Profile = styled.div`
  position: absolute;
  z-index: 2;
  top: 0%;
  width: 100%;
  height: 20%;
  border-width: 2px;
  border-color: 'black';
  border-style: solid;
  overflow: hidden;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profile } = this.props;

    return (
      <div style={{ 'background-image': 'linear-gradient(-155deg, #6868fd, #fa85a1)', height: '100vh' }}>
        <NavComponent />
        <h3 style={{ color: 'white', padding: '10%' }}>My Profile</h3>
        <UserStyle>
          <Profile>
            <p>Username</p>
          </Profile>
          <Link to="/mypets">
            <Field>
              <p>My Pets</p>{' '}
            </Field>
          </Link>
          <Link to="/petupload">
            <Field style={{ top: '27%' }}>
              <p>Upload Pet</p>{' '}
            </Field>
          </Link>
          <Field style={{ top: '80%' }}>
            <a href="/auth/logout">
              <p>Logout</p>{' '}
            </a>
          </Field>
        </UserStyle>
      </div>
    );
  }
}
