// import

import React from 'react';


// function

const Contact = () => {
    return (
        <div>
           <main class="container">

<section class="col-md-8">
  <div class="row">
    <h1 class="col-md-12">Contact</h1>
  </div>
  <div class="col-md-9">
    <div class="contact-form">
      <div class="form-group">
        <label class="control-label col-sm-2" for="fname">Name:</label>
        <div class="col-md-10">          
        <input type="text" class="form-control" id="fname" placeholder="Name" name="fname"/>
        </div>
      </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="email">Email:</label>
        <div class="col-md-10">
        <input type="email" class="form-control" id="email" placeholder="Email" name="email"/>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2" for="comment">Message:</label>
        <div class="col-md-10">
        <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
      </div>
      <div class="form-group">        
        <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">Submit</button>
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

