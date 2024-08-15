import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="section footer" style={{ backgroundColor: '#FFC0CB', color: '#FFFFFF' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6 style={{ color: '#FFFFFF' }}>Company Information</h6>
                        <hr style={{ borderColor: '#FFFFFF' }}/>

                        <p>
                        GIFTMILI, established in 2018, specializes in crafting high-quality, handcrafted gifts. We balance artistic creativity with meticulous craftsmanship to offer products that are both unique and meaningful. 


                        </p>
                    </div>
                    <div className="col-md-4 footer-links">
                        <h6 style={{ color: '#FFFFFF' }}>Quick Links</h6>
                        <hr style={{ borderColor: '#FFFFFF' }}/>

                        <div><Link to="/" style={{ color: '#d63384' }}>Home</Link></div>
                        <div><Link to="/about" style={{ color: '#d63384' }}>About</Link></div>
                        <div><Link to="/contact" style={{ color: '#d63384' }}>Contact</Link></div>
                        <div><Link to="/products" style={{ color: '#d63384' }}>Products</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6 style={{ color: '#FFFFFF' }}>Contact Information</h6>
                        <hr style={{ borderColor: '#FFFFFF' }}/>
                        <p className="text-white mb-1" style={{ color: '#FFFFFF' }}>Ved Vihar, Secunderabad, Telangana, India</p>
                        <p className="text-white mb-1" style={{ color: '#FFFFFF' }}>+91 9493804314</p>
                        <p className="text-white mb-1" style={{ color: '#FFFFFF' }}>giftmilicom@instagram</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
