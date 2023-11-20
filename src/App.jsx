import React, { useState } from 'react';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Display from './components/Display';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   // Define a state to hold the form data
   const [formData, setFormData] = useState([]);
   const [selectedUser, setSelectedUser] = useState(null);

   // Create a function to receive form data and update state
   const handleFormData = (data) => {
     setFormData([...formData, data]);
   };

   const handleDelete = (index) => {
    const updatedProfiles = [...formData];
    updatedProfiles.splice(index, 1);
    setFormData(updatedProfiles);
};

   const handleSelectUser = (user) => {
        setSelectedUser(user);
   };

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Form onFormSubmit={handleFormData} />} />
      <Route path='/userlist' element={<UserList formData={formData} onDelete={handleDelete} onSlectUser={handleSelectUser} />} />
      <Route path='/userprofile' element={selectedUser && <Display formData={selectedUser} />} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
