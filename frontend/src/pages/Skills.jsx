import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Skills() {

  const [skills, setSkills] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {

    const skillArray = skills.split(",");

    const res = await API.post("/recommend-career", {
      skills: skillArray
    });

    localStorage.setItem(
      "recommendedCareers",
      JSON.stringify(res.data.recommendedCareers)
    );

    navigate("/recommendation");
  };

  return (

    <div>

      <h2>Enter Your Skills</h2>

      <input
        placeholder="Example: Python, SQL, Statistics"
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Get Career Recommendation
      </button>

    </div>

  );

}

export default Skills;