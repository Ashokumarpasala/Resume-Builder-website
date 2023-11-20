import React, { useState } from 'react';
import Navbar from './Navbar';

function Form({onFormSubmit}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        about: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        education: '',
        specialization: '',
        skills: '',
        experience: '',
        currentCompany: '',
        currentCTC: '',
        expectedCTC: '',
        immediateJoin: '',
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData); 
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            about: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            education: '',
            specialization: '',
            skills: '',
            experience: '',
            currentCompany: '',
            currentCTC: '',
            expectedCTC: '',
            immediateJoin: '',
        });
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        

    };

   

    return (
        <>
        <Navbar />
        <div className='container-lg'>
         {showSuccessMessage && (
        <div className="alert alert-success mt-3 m-3" role="alert">
          User profile created successfully!
        </div>
      )}
                <div className="card mb-3" style={{maxWidth:"1500px", height:"600px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://www.zizurmayor.es/wp-content/uploads/2022/11/sin-perfil.jpg" style={{height:"100%", width:"1000px"}} className="img-fluid rounded p-5" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-5 " style={{overflowY:"scroll", height:"520px"}}>
                                <h1 className="card-title py-3"> FILL PROFILE DETAILS</h1>

                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">FirstName</label>
                                        <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">LastName</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                    </div>
                                    <label htmlFor="gender" className="form-label d-flex">Gender</label>
                                    <div className="d-flex">
                                        <div className="form-check d-flex mx-3">
                                            <input className="form-check-input" type="checkbox" value="Male" id="male" name="gender" onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="male">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="Female" id="female" name="gender" onChange={handleInputChange} />
                                            <label className="form-check-label" htmlFor="female">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="about" className="form-label">About YourSelf</label>
                                        <textarea type="text" className="form-control" id="about" name="about" value={formData.about} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select id="state" className="form-select" name="state" value={formData.state} onChange={handleInputChange}>
                                            <option selected>Choose...</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Arunachal Pradesh</option>
                                            <option>Goa</option>
                                            <option>Telangana</option>
                                            <option>Tamilnadu</option>
                                            <option>Karnataka</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="education" className="form-label">Higher Education</label>
                                        <input type="text" className="form-control" id="education" name="education" value={formData.education} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="specialization" className="form-label">Specialization</label>
                                        <input type="text" className="form-control" id="specialization" name="specialization" value={formData.specialization} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="skills" className="form-label">Skills</label>
                                        <select id="skills" className="form-select" name="skills" value={formData.skills} onChange={handleInputChange}>
                                            <option selected>Choose...</option>
                                            <option>React js</option>
                                            <option>Angular</option>
                                            <option>Viu</option>
                                            <option>Javascript</option>
                                            <option>Java</option>
                                            <option>SpringBoot</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="experience" className="form-label">Work Experience</label>
                                        <input type="text" className="form-control" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="currentCompany" className="form-label">Current Company</label>
                                        <input type="text" className="form-control" id="currentCompany" name="currentCompany" value={formData.currentCompany} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="currentCTC" className="form-label">Current CTC</label>
                                        <input type="number" className="form-control" id="currentCTC" name="currentCTC" value={formData.currentCTC} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="expectedCTC" className="form-label">Expected CTC</label>
                                        <input type="text" className="form-control" id="expectedCTC" name="expectedCTC" value={formData.expectedCTC} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="immediateJoin" className="form-label">Immediate Join?</label>
                                        <select id="immediateJoin" className="form-select" name="immediateJoin" value={formData.immediateJoin} onChange={handleInputChange}>
                                            <option value="">Choose..</option>
                                            <option>YES</option>
                                            <option>NO</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Create Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
