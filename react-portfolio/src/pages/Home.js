// imports
import React from "react";

// function
// content from previous portfolio

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="col-md-10">
          <div className="row">
            <h1 className="col-md-10">About Me</h1>
            <hr />
          </div>
          <div className="row">
            <div>
              <img
                className="float-left"
                src='../assets/profileimage'
                alt="Profile"
              />
              <p>
                I am a hospitality professional and developing developer with
                interests in sustainability and ethical leadership. Nearly a
                decade of experience in multiple levels of hotel and operational
                leadership have shaped my perspective and insight about what an
                online solution requires to be successful. I do not believe that
                a one-size-fits-all approach to application design is effective,
                and that the best results come from truly understanding an
                organization's goal and the people who endeavor to achieve it.
              </p>
              <p>
                My objective is to work with organizations, such as hotels and
                non-profits, to develop web-based applications that optimize
                interactions among all levels of their team, while accounting
                for common challenges, such as language barriers or differing
                abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export

export default Home;
