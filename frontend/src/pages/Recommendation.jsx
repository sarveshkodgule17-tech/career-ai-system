import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Recommendation() {

  const [careers, setCareers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const stored = JSON.parse(
      localStorage.getItem("recommendedCareers")
    );

    if (stored) {
      setCareers(stored);
    }

  }, []);

  const selectCareer = (career) => {

    localStorage.setItem("selectedCareer", career);

    navigate("/roadmap");
  };

  return (

    <div>

      <h2>Recommended Careers</h2>

      <ul>

        {careers.map((career, index) => (

          <li key={index}>

            {career}

            <button onClick={() => selectCareer(career)}>
              View Roadmap
            </button>

          </li>

        ))}

      </ul>

    </div>

  );

}

export default Recommendation;