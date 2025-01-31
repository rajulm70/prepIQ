import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/auth";
import './MockInt.css';

export default function All() {
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
        <div className='all-cards'>
            <section className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h1 className="display-4 font-weight-bolder">Achieve Success with AI Tools</h1>
                            <p className="lead">Boost your interview prep, essay writing, and quiz skills using AI-powered tools designed for you.</p>
                        </div>
                    </div>
                    <div className="row">
                        {/* Mock Interview Card */}
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div
                                className="card text-dark card-has-bg click-col"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?office")' }}
                                onClick={() => handleNavigation('/interview')}
                            >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Mock Interview with AI</small>
                                        <h4 className="card-title mt-0 text-dark">
                                            Get ready for job interviews with personalized AI-driven mock sessions.
                                        </h4>
                                        <small><i className="far fa-clock"></i> Personalized interview feedback</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://img.freepik.com/premium-photo/talking-cute-robot-with-artificial-intelligence-concept-chatbot_778980-441.jpg"
                                                alt="AI Assistant"
                                                style={{ maxWidth: '50px' }}
                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                                                <small>Mock Interview Tool</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Badge on Top-Right */}
                                <div className="badge top-right">Exclusive</div>
                            </div>
                        </div>

                        {/* AI Essay Writing Card */}
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div
                                className="card text-dark card-has-bg click-col"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?tree,nature")' }}
                                onClick={() => handleNavigation('/score')}
                            >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">AI-Powered Essay Writing</small>
                                        <h4 className="card-title mt-0 text-dark">
                                            Improve your writing skills with AI feedback on essays.
                                        </h4>
                                        <small><i className="far fa-clock"></i> Instant writing feedback</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://pics.craiyon.com/2024-09-17/vmOcCObNTnKfA8ve6dBOKw.webp"
                                                alt="AI Assistant"
                                                style={{ maxWidth: '50px' }}
                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                                                <small>Essay Writing Tool</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Badge on Top-Right */}
                                <div className="badge top-right">Gemini Powered</div>
                            </div>
                        </div>

                        {/* AI Quiz Card */}
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div
                                className="card text-dark card-has-bg click-col"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}
                                onClick={() => handleNavigation('/quiz')}
                            >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">AI Quiz Generator</small>
                                        <h4 className="card-title mt-0 text-dark">
                                            Take quizzes to test your knowledge with personalized feedback.
                                        </h4>
                                        <small><i className="far fa-clock"></i> Custom quizzes for you</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://imgcdn.stablediffusionweb.com/2024/3/11/80a98a2a-8f04-49de-a9bf-1065de76dc8f.jpg"
                                                alt="AI Assistant"
                                                style={{ maxWidth: '50px' }}
                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                                                <small>Quiz Tool</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Badge on Top-Right */}
                                <div className="badge top-right">Supports 37 Languages</div>
                            </div>
                        </div>
                    </div>

                    {/* Last Two Cards Centered */}
                    <div className="row justify-content-center">
                        {/* AI Notes Enhancer */}
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div
                                className="card text-dark card-has-bg click-col"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}
                                onClick={() => handleNavigation('/enhancer')}
                            >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">AI Notes Enhancer</small>
                                        <h4 className="card-title mt-0 text-dark">
                                            Enhance your study notes into clear, concise, and visually appealing summaries.
                                        </h4>
                                        <small><i className="far fa-clock"></i> Smart study tool</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaPFCI_gJpuyL6vRVhL8at_J8yXZf5M9iMe7iLPMRO-cNCKGCpYXKT2mdGNrMBfk6ikc&usqp=CAU"
                                                alt="AI Assistant"
                                                style={{ maxWidth: '50px' }}
                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                                                <small>Notes Enhancer</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Badge on Top-Right */}
                                <div className="badge top-right">Super Accuracy</div>
                            </div>
                        </div>

                        {/* Quiz Card Again */}
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div
                                className="card text-dark card-has-bg click-col"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}
                                onClick={() => handleNavigation('/quiz')}
                            >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">AI Quiz Tool</small>
                                        <h4 className="card-title mt-0 text-dark">
                                            Test your knowledge with personalized quizzes, feedback, and explanations.
                                        </h4>
                                        <small><i className="far fa-clock"></i> Tailored quiz experience</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img
                                                className="mr-3 rounded-circle"
                                                src="https://img.freepik.com/premium-photo/robot-with-red-eyes_379823-35599.jpg"
                                                alt="AI Assistant"
                                                style={{ maxWidth: '50px' }}
                                            />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">AI Assistant</h6>
                                                <small>Quiz Generator</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Badge on Top-Right */}
                                <div className="badge top-right">Exclusive</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
