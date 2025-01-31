import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import './Dashboard.css';

const Dashboard = () => {
  const [auth] = useAuth();
  const score = 0;

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid d-flex flex-column align-items-center m-4 p-4">
        <div className="row justify-content-center w-100">
          <div className="col-12 d-flex flex-column align-items-center">
            <UserMenu />
          </div>
        </div>
        <div className="row justify-content-center w-100 mt-4">
          <div className="col-md-10 col-sm-12 d-flex justify-content-center">
            <div className="card shadow-lg w-100 p-4 text-center">
              <h3 className="text-info text-center mb-4">User Information</h3>
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover text-center">
                  <thead className="thead-dark">
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{auth?.user?.name}</td>
                      <td>{auth?.user?.email}</td>
                      <td>{auth?.user?.address}</td>
                      <td>{score}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
