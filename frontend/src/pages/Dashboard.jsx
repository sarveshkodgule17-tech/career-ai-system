import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await API.get("/dashboard", {
          headers: { Authorization: token }
        });

        setData(res.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchDashboard();

  }, []);

  if (!data) return <p>Loading...</p>;

  return (

    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Target Role</h3>
          <p>{data.targetRole}</p>
        </div>

        <div className="card">
          <h3>Progress</h3>
          <p>{data.progressPercentage}%</p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: data.progressPercentage + "%" }}
            ></div>
          </div>

        </div>

        <div className="card">
          <h3>Completed Skills</h3>
          <p>{data.completedSkills.length}</p>
        </div>

      </div>

      <h3>Remaining Skills</h3>

      <ul>
        {data.remainingSkills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

    </div>

  );

}

export default Dashboard;