import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/bg_Image.png";
import "../styles/Home.css";

function Home(props) {
  let content = {
    English: {
      title: "Kirkland Swimming",
      pinfo: "Kirkland Swimming offers one of the best \nservices to swimmers across all levels. \nWhether you want to learn swimming or \n.",
      button: "View Courses"
    },
    French: {
    title: "Kirkland Swimming",
      pinfo: "Kirkland Swimming offre l'un des meilleurs \nservices aux nageurs de tous niveaux. \nQue vous souhaitiez apprendre à nager ou \n.",
      button: "Afficher les cours"
    }
  };

  props.language === "French" ? (content = content.French) : (content = content.English);

  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`, alt:"Image of Swimming pool in background"}}>
        <div className="headerContainer" >
            <h1>Kirkland Swimming</h1>
            <p>Kirkland Swimming offers one of the best <br></br>services to swimmers across all levels. <br></br>Whether you want to 
            learn swimming or <br></br>
          just want to sharpen your skills. You can <br></br>
            also find people in the community <br></br>
            looking for partners to learn in practice <br></br>
            swimming. </p>
            <Link to = "/courses">
                <button>View Courses</button>
            </Link>
        </div>
    </div>
  )
}

export default Home