import React from 'react';
import aboutImg from '../../assets/images/camera.jpg';

const ContactPage = props => (
    <div className="Contact container">
        <img src={aboutImg} />
        <div className="row">
            <div className="col-lg-6">
                <form className="text-left">
                    <div className="md-form form-row">
                        <label>Name *</label>
                        <div class="col">
                            <input className="form-control" type="text" placeholder="First Name"/>
                        </div>
                        <div class="col">
                            <input className="form-control" type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="md-form form-group">
                        <label>Email address *</label>
                        <input className="form-control" type="text" placeholder="Email Address"/>
                    </div>
                    <div className="md-form form-group">
                        <label>Subject</label>
                        <input className="form-control" type="text" placeholder="Subject"/>
                    </div>
                    <div className="md-form form-group">
                        <label>Message *</label>
                        <textarea className="form-control" placeholder="Message" rows="3"></textarea>
                    </div>
                    <div className="fmd-form orm-group">
                        <label for="validationDefaultUsername">Instagram</label>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                        </div>
                    </div>
                    <button type="submit" class="btn">Submit!</button>
                </form>
            </div>
            <div className="col-lg-1"></div>
            <div className="info col-lg-4">
                <div className="vcenter">
                    <h2>Business Inquiries</h2>
                    <p className="align-middle">
                        If my words and my work have spoken to you, 
                        I’d love to hear your story – anything and everything that you would like to share with me 
                        – and use it as my next source of inspiration. 
                        If you've got any inquiries, questions, comments, concerns, or just simply want to say hello, 
                        please feel free to open up and fill out the form below or shoot me an e-mail at jasontang@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;