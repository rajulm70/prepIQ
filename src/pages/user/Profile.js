import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import './Profile.css';

const Profile = () => {
  const [auth] = useAuth();
  
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid p-5">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-8">
            <div className="card profile-card shadow-lg p-4">
              <div className="profile-header text-center mb-4">
                <h1 className="display-4 text-primary">Your Profile</h1>
                <p className="lead text-muted">Manage your account details</p>
              </div>
              <div className="profile-body">
                <h4 className="text-muted">Personal Information</h4>
                <table className="table table-bordered table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{auth?.user?.name}</td>
                      <td>{auth?.user?.username}</td>
                      <td>{auth?.user?.email}</td>
                      <td>{auth?.user?.address}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center mt-4">
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
