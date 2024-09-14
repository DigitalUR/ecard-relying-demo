import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StudentCard = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [userData, setUserData] = useState({});

  const query = useQuery();

  useEffect(() => {
    const type = query.get('type');
    if (type === 'typical_user') {
      setIsStudent(true);
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
    } else if (type === 'student') {
      setIsStudent(false);
      const name = query.get('name');
      const gender = query.get('gender');
      const phone_number = query.get('phone_number');
      const email = query.get('email');
      setUserData({
        name,
        gender,
        phone: phone_number,
        email
      });
    }
  }, [query]);

  return (
    <>
      <Navbar profileName={isStudent ? userData.fullName : userData.name} />
      <div className="container">
        <div>
          <h3 style={{ marginLeft: '28px', fontWeight: 'bold' }} className="title-1">Basic Information</h3>
          <br />
        </div>

        <table className="table-1">
          <tbody>
            <tr>
              {isStudent && (
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
                <>
                  <td>{userData.firstName}</td>
                  <td>{userData.lastName}</td>
                </>
              ) : (
                <td>{userData.name}</td>
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
          You have student privilege ...
        </h3>
      </div>
    </>
  );
};

export default StudentCard;
