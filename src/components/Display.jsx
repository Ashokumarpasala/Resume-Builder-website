import jsPDF from 'jspdf';
import React from 'react'
import Navbar from './Navbar';

function Display({formData}) {

    const handleSavePDF = () => {
        const doc = new jsPDF();
        doc.text(`Profile Details`, 10, 10);
        doc.text(`First Name: ${formData.firstName}`, 10, 20);
        doc.text(`Email: ${formData.email}`, 10, 30);
        doc.text(`Address: ${formData.address}`, 10, 40);
        doc.text(`city: ${formData.city}`, 10, 50);
        doc.text(`Pin code: ${formData.zip}`, 10, 60);
        doc.text(`Gender: ${formData.gender}`, 10, 70);
        doc.text(`Education: ${formData.education}`, 10, 80);
        doc.text(`Specialization: ${formData.specialization}`, 10, 90);
        doc.text(`skills: ${formData.skills}`, 10, 100);
        doc.text(`Experience: ${formData.experience}`, 10, 110);
        doc.text(`current Company: ${formData.currentCompany}`, 10, 120);
        doc.text(`current CTC: ${formData.currentCTC}`, 10, 130);
        doc.text(`Expected Company: ${formData.expectedCTC}`, 10, 140);
        doc.text(`Immidate Joiner: ${formData.immediateJoin}`, 10, 150);
    
        doc.save(`${formData.firstName}_profile.pdf`);
      };
     

  return (
    <>
        <Navbar />
    <div className='container-lg p-5'>
        <div className="d-flex justify-content-between">
        <h1>{formData.firstName} Profile Details</h1>
        </div>
              <h6  className='card p-3 m-2'>FirstName : {formData.firstName}</h6>
              <h6  className='card p-3 m-2'>LastName : {formData.lastName}</h6>
              <h6 className='card p-3 m-2'>Email : {formData.email}</h6>
              <h6  className='card p-3 m-2'>Gender : {formData.gender}</h6>
              <h6  className='card p-3 m-2'>Adress : {formData.address}</h6>
              <h6  className='card p-3 m-2'>city : {formData.city}</h6>
              <h6  className='card p-3 m-2'>State : {formData.state}</h6>
              <h6  className='card p-3 m-2'>Pin Number : {formData.zip}</h6>
              <h6  className='card p-3 m-2'>about : {formData.about}</h6>
              <h6  className='card p-3 m-2'>Education : {formData.education}</h6>
              <h6  className='card p-3 m-2'>Specialization : {formData.specialization}</h6>
              <h6  className='card p-3 m-2'>skill : {formData.skills}</h6>
              <h6  className='card p-3 m-2'>Experience : {formData.experience}</h6>
              <h6  className='card p-3 m-2'>Current Company : {formData.currentCompany}</h6>
              <h6  className='card p-3 m-2'>current CTC : {formData.currentCTC}</h6>
              <h6  className='card p-3 m-2'>Expected CTC : {formData.expectedCTC}</h6>
              <h6  className='card p-3 m-2'>immidate Joiner : {formData.immediateJoin}</h6>
              <button onClick={handleSavePDF} className="btn btn-success m-3 d-flex align-items-end">Save as PDF</button>

    </div>
    </>
  )
}

export default Display
