import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/register';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import MockEssayDashboard from './pages/MockEsssayDashboard';
import MockQuizDashboard from './pages/MockQuizDashboard';
import MockIntDashboard from './pages/MockIntDashboard';
import BriefDetails from './pages/BreifDetails';
import Quizz from './pages/Quizz';
import Quizpage from './pages/QuizPage';
import Resultpage from './pages/ResultPage';
import Score from './pages/EssayScore';
import Response from './pages/EssayResponse';
import Category from './pages/Category';
import UnderProgress from './pages/UnderProgress';
import InterviewQuestions from './pages/InterviewQuestions';
import InterviewResults from './pages/InterviewResults';
import Enhancer from './pages/Enhancer';
import Background from './pages/Background';
import ResponseEnhancer from './pages/ResponseEnhancer';
import AnimatedComponent from './pages/AnimatedComponent';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/under-progress" element={<UnderProgress />} />

        <Route path="/essay" element={<MockEssayDashboard />} />
        <Route path="/quiz" element={<Quizz />} />
        <Route path="/quizpage" element={<Quizpage />} />
        <Route path="/resultpage" element={<Resultpage />} />
        <Route path="/response" element={<Response />} />
        <Route path="/score" element={<Score />} />
        <Route path="/interview" element={<MockIntDashboard />} />
        <Route path="/interview-questions" element={<InterviewQuestions />} />
        <Route path="/interview-results" element={<InterviewResults />} />

        <Route path="/category" element={<Category />} />
        <Route path="/enhancer" element={<Background />} />
        <Route path="/enhancer-response" element={<AnimatedComponent />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

        <Route path="/learn" element={<BriefDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
