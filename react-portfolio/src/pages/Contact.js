// import

import React from 'react';


// function

const Contact = () => {
    return (
        <div>
           <main className="container">

<section className="col-md-8">
  <div className="row">
    <h1 className="col-md-12">Contact</h1>
  </div>
  <div className="col-md-9">
    <div className="contact-form">
      <div className="form-group">
        <label className="control-label col-sm-2" for="fname">Name:</label>
        <div className="col-md-10">          
        <input type="text" className="form-control" id="fname" placeholder="Name" name="fname"/>
        </div>
      </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" for="email">Email:</label>
        <div className="col-md-10">
        <input type="email" className="form-control" id="email" placeholder="Email" name="email"/>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" for="comment">Message:</label>
        <div className="col-md-10">
        <textarea className="form-control" rows="5" id="comment"></textarea>
        </div>
      </div>
      <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
        </div>
      </div>
    </div>
  
  
</section>

</main> 
        </div>
    )
}

// export

export default Contact; 

