import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput} from '../components/shared';

const mockUser = {
  name: "Jason Masi",
}

const mockPerformers = [
  {
    name: 'Jason Masi',
    id: "A2"
  }
];

const mockVenues = [
  {
    name: 'Black Walnut Brewery',
    id: "V1"
  }
]

const AccountSettings = () => {
    const [user, setUser] = useState({});
    const [performers, setPerformers] = useState([]);
    const [venues, setVenues] = useState([]);

    useEffect(()=>{
      setUser(mockUser);
      setPerformers(mockPerformers);
      setVenues(mockVenues);
    },[]);

    const onSubmitPress = () => {
      console.log("submit pressed");
    };

    const renderPasswordField = (name, label) => {
        return (
          <div className="bookInputRow">
              <Textinput name={name} inputType="password" / >
              <label id="bookInputLabel" htmlFor={name}>{label}</label>
          </div>
        );
    };

    const renderChangePassword = (name, label) => {
        return (
          <>
              <h4>Change Pasword</h4>
              {renderPasswordField("passwordOld", "Old Password")}
              <div className="bookInputRow">
                  {renderPasswordField("passwordNew", "New Password")}
              </div>
              <div className="bookInputRow">
                  <Button className="textinputWidth" onPress={onSubmitPress} title="Change Password" colorType="Black"/>
              </div>
          </>

        );
    };

    return (
        <div className="container">
            <h3>AccountSettings</h3>
            {renderChangePassword()}
        </div>
    );
};

export default AccountSettings;