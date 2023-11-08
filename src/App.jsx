import { Routes, Route } from 'react-router-dom';
import {
  Activate,
  Home,
  Login,
  ResetPassword,
  ResetPasswordConfirm,
  Signup,
  Post,
  Posts,
  PostEdit,
  PostCreate,
} from './pages';
import { Layout } from './hocs';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/activate/:uid/:token" element={<Activate />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
        <Route path="/posts/create" element={<PostCreate />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
};

export default App;
