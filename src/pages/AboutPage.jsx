import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div>
        <div className="about">
          <h1>My First React Project</h1>
          <p>Features of this app: </p>
          <ul>
            <li style={{listStyleType: 'circle'}}>Collect user feedback along with ratings and append them to existing data.</li>
            <li style={{listStyleType: 'circle'}}>Display the total number of reviews and their average rating.</li>
            <li style={{listStyleType: 'circle'}}>Allow feedback deletion for specific purposes.</li>
          </ul>
          <p>Version: 1.0.0</p>

          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default AboutPage;
