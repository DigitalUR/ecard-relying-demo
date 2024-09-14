import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar';
import { jwtDecode } from 'jwt-decode';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StudentCard = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [userData, setUserData] = useState({});

  const query = useQuery();
//   console.log('yaaaa....')

  useEffect(() => {
    const type = query.get('type');
    const data = query.get('data');
    if (type == 'typical_user') {
      setIsStudent(false);
      const firstName = query.get('firstName');
      const lastName = query.get('lastName');
      const gender = query.get('gender');
      const phone = query.get('phone');
      const email = query.get('email');
      setUserData({
        fullName: `${firstName} ${lastName}`,
        firstName,
        lastName,
        gender,
        phone,
        email
      });
    } else if (type == 'student') {
      const decodedData = jwtDecode(data)
      console.log('big data ',decodedData);
      setIsStudent(true);
      const name = decodedData.name;
      const gender = decodedData.gender;
      const phone_number = decodedData.phone_number;
      const email = decodedData.email;
      setUserData({
        name,
        gender,
        phone: phone_number,
        email
      });
    }
  }, []);

  return (
    <>
      <Navbar profileName={isStudent ? userData.name : userData.fullName} />
      <div className="container">
        <div>
          <h3 style={{ marginLeft: '28px', fontWeight: 'bold' }} className="title-1">Basic Information</h3>
          <br />
        </div>

        <table className="table-1">
          <tbody>
            <tr>

              {isStudent ? (
                <>
                <td>Names</td>
              </>
              ) : (
                
                <>
                  <td>First name</td>
                  <td>Last name</td>
                </>
              )}
              <td>Gender</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            <tr>
              {isStudent ? (
                <td>{userData.name}</td>
              ) : (
                
                <>
                  <td>{userData.firstName}</td>
                  <td>{userData.lastName}</td>
                </>
              )}
              <td>{userData.gender}</td>
              <td>{userData.email}</td>
              <td>{userData.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="container"
        style={{
          border: '1px solid blue',
        }}
      >
        <h3 style={{ marginLeft: '28px', fontWeight: 'bold', textAlign: 'center' }} className="title-1-1">
          You have {isStudent ? 'student' : 'Typical user'} privileges ...
        </h3>
      </div>
    </>
  );
};

export default StudentCard;
