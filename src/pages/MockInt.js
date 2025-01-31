import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth";
import './MockInt.css'

export default function MockHub() {
  const [auth] = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (auth?.user) {
      navigate(path); // Navigate to the specific page
    } else {
      navigate('/login', { state: path }); // Redirect to login with the intended page in state
    }
  };

  return (
    <section className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col text-center mb-5">
            <h1 className="display-4 font-weight-bolder">Prepare for Success with AI Tools</h1>
            <p className="lead">Enhance your interview, writing, and quiz skills with AI-powered features tailored to your needs.</p>
          </div>
        </div>
        <div className="row">
          {/* Mock Interview Card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card text-dark card-has-bg click-col"
              style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?office")' }}
            >
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">AI Mock Interview</small>
                  <h4 className="card-title mt-0">
                    <a className="text-dark" onClick={() => handleNavigation('/interview')}>
                      Prepare for your upcoming job interview with our AI-powered platform.
                    </a>
                  </h4>
                  <small><i className="far fa-clock"></i> Personalized interview experience</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img
                      className="mr-3 rounded-circle"
                      src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                      alt="User"
                      style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                      <small>Mock Interview Platform</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Essay Writing Card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card text-dark card-has-bg click-col"
              style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?tree,nature")' }}
            >
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">AI Essay Writing</small>
                  <h4 className="card-title mt-0">
                    <a className="text-dark" onClick={() => handleNavigation('/score')}>
                      Enhance your essay writing skills with our AI-powered platform.
                    </a>
                  </h4>
                  <small><i className="far fa-clock"></i> Real-time feedback on essays</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img
                      className="mr-3 rounded-circle"
                      src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                      alt="User"
                      style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                      <small>Essay Writing Platform</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Quiz Card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card text-dark card-has-bg click-col"
              style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}
            >
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">AI-Powered Quiz</small>
                  <h4 className="card-title mt-0">
                    <a className="text-dark" onClick={() => handleNavigation('/quiz')}>
                      Test your knowledge with quizzes. Instant feedback and detailed explanations.
                    </a>
                  </h4>
                  <small><i className="far fa-clock"></i> Customized quizzes</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img
                      className="mr-3 rounded-circle"
                      src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                      alt="User"
                      style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                      <small>Quiz Platform</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* AI Quiz Card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card text-dark card-has-bg click-col"
              style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}
            >
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">AI-Powered Quiz</small>
                  <h4 className="card-title mt-0">
                    <a className="text-dark" onClick={() => handleNavigation('/quiz')}>
                      Test your knowledge with quizzes. Instant feedback and detailed explanations.
                    </a>
                  </h4>
                  <small><i className="far fa-clock"></i> Customized quizzes</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img
                      className="mr-3 rounded-circle"
                      src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                      alt="User"
                      style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                      <small>Quiz Platform</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* AI Quiz Card */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card text-dark card-has-bg click-col"
              style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}
            >
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">AI-Powered Quiz</small>
                  <h4 className="card-title mt-0">
                    <a className="text-dark" onClick={() => handleNavigation('/quiz')}>
                      Test your knowledge with quizzes. Instant feedback and detailed explanations.
                    </a>
                  </h4>
                  <small><i className="far fa-clock"></i> Customized quizzes</small>
                </div>
                <div className="card-footer">
                  <div className="media">
                    <img
                      className="mr-3 rounded-circle"
                      src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80"
                      alt="User"
                      style={{ maxWidth: '50px' }}
                    />
                    <div className="media-body">
                      <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                      <small>Quiz Platform</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
