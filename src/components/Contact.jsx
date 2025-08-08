import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false); // New state for button loading

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
            await axios.post(
                // 'http://localhost:8080/message',
                'https://portfoliiobackend.onrender.com/message',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been sent successfully.',
                confirmButtonColor: '#28a745'
            });
    
            setFormData({ name: '', email: '', mobile: '', message: '' });
    
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Something went wrong. Please try again.',
                confirmButtonColor: '#dc3545'
            });
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="container">
            <div className="contact-card p-4 rounded">
                <h2 className="fw-bold display-6">Contact</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3 d-flex align-items-center">
                            <span className="icon-box">
                                <i className="ri-mail-line text-success fs-3"></i>
                            </span>
                            <div className="ms-3">
                                <p className="mb-0 text-muted small">Email</p>
                                <span className="bold"> vishallengare61@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 d-flex align-items-center">
                            <span className="icon-box">
                                <i className="ri-phone-line text-success fs-3"></i>
                            </span>
                            <div className="ms-3">
                                <p className="mb-0 text-muted small">Phone</p>
                                <span className="bold">+91 8806014060</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 d-flex align-items-center">
                            <span className="icon-box">
                                <i className="ri-linkedin-fill text-success fs-3"></i>
                            </span>
                            <div className="ms-3">
                                <p className="mb-0 text-muted small">LinkedIn</p>
                                <span className="bold">
                                    <a href="https://www.linkedin.com/in/vishal342" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}
                                    // <a href="https://www.linkedin.com/in/vishal-lengare" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}
                                    className='text-muted'
                                    >
                                        www.linkedin.com/in/vishal-546443
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <input type="text" name="name" placeholder="Enter Name" className="form-control" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="email" name="email" placeholder="Enter Email" className="form-control" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <input type="text" name="mobile" placeholder="Your Mobile" className="form-control" value={formData.mobile} onChange={handleChange} required />
                        </div>
                        <div className="col-md-12 mb-3">
                            <textarea name="message" placeholder="Your Message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            {/* Inline Styles */}
            <style>{`
                .contact-card {
                    background: white;
                    border-radius: 12px;
                }
                .icon-box {
                    width: 50px;
                    height: 50px;
                    background: rgba(46, 204, 113, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                }
                .form-control {
                    border-radius: 8px;
                    border: 1px solid #ddd;
                    padding: 10px;
                }
                .btn-success {
                    background-color: #2ecc71;
                    border-color: #2ecc71;
                }
                .btn-success:disabled {
                    background-color: #27ae60;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    );
}

export default Contact;
