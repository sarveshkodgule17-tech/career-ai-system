import { useState } from "react";
import API from "../services/api";

function Roadmap() {

  const [roadmap, setRoadmap] = useState([]);

  const generateRoadmap = async () => {

    const roleName = localStorage.getItem("selectedCareer");

    const res = await API.post("/generate-roadmap", {
      roleName: roleName,
      missingSkills: ["Machine Learning","Statistics"]
    });

    setRoadmap(res.data.roadmap);
  };

  return (

    <div>

      <h2>Learning Roadmap</h2>

      <button onClick={generateRoadmap}>
        Generate Roadmap
      </button>

      <ul>

        {roadmap.map((step, index) => (

          <li key={index}>{step}</li>

        ))}

      </ul>

    </div>

  );

}

export default Roadmap;