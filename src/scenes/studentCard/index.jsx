import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Base64Image from '../../components/base64Image';
import Navbar from '../navbar';
import { jwtDecode } from 'jwt-decode';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const StudentCard = () => {
    // const { data: encodedData } = useParams(); // Access the JWT parameter
    const query = useQuery();

    const type = query.get('type');
    const firstName = query.get('firstName');
    const lastName = query.get('lastName');
    const fullName = firstName +' '+ lastName;
    const gender = query.get('gender');
    const phone = query.get('phone');
    const email = query.get('email');

    const decodedData = {}
    



    return (
        <>
            {/* <Navbar profileName = {"RUKUNDO Aime"}/> */}
            <Navbar profileName = { fullName}/>
            <div className="container ">
                {/* <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  
                </div> */}
                <div>
                    <h3 style={{ marginLeft: '28px', fontWeight: 'bold' }} className="title-1">Basic Information</h3>
                    <br />
                </div>

                <table className="table-1">
                        <tbody>
                            <tr>
                                <td>First name</td>
                                <td>Last name</td>
                                <td>Gender</td>
                                <td>Email</td>
                                <td>phone</td>
                            </tr>
                            <tr>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{gender}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div className="container " style={{
                border: '1px solid blue', 
                // boxShadow:'1px 1px 2px inset'
                }}>
                {/* <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  
                </div> */}
                    <h3 style={{ marginLeft: '28px', fontWeight: 'bold',textAlign:'center' }} className="title-1-1">You have student privirege ...</h3>
        
            </div>
        </>
    );
};

export default StudentCard;
