import React from 'react';
import trash from './images/trash3-fill.svg'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function UserList({ formData, onDelete, onSlectUser }) {



    return (
        <>
         <Navbar />
        <div className='py-5 container-lg'>
            <table className="table" style={{cursor:"pointer"}}>
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Skill</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Immediate Joiner</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
          {formData.map((profile, index) => (
            <tr key={index} onClick={()=>onSlectUser(profile)}>
              <th scope="row">{index + 1}</th>
              <td>{profile.firstName}</td>
              <td>{profile.email}</td>
              <td>{profile.skills}</td>
              <td>{profile.experience}</td>
              <td>{profile.immediateJoin}</td>
              <td>
                {/* delete row button */}
                <img className='mx-5 border border-dark rounded p-2' src={trash} alt="" onClick={() => onDelete(index)} style={{cursor:"pointer"}} />
                <button className='btn btn-success'  ><Link to='/userprofile' style={{textDecoration:"none", color:"white"}}>User Screen</Link></button>
              </td>
            </tr>
          ))}
        </tbody>

            </table>
        </div>
        </>

    )
}

export default UserList;
