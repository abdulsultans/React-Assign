import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

function Card() {
  return (
    <div id="cards">
        <h2>Our Hosts</h2>
      <div className="cards">
        <img src={img1} alt="card1" />
        <h3>Card1</h3>
      </div>
      <div className="cards">
        <img src={img2} alt="card2" />
        <h3>Card2</h3>
      </div>
      <div className="cards">
        <img src={img3} alt="card3" />
        <h3>Card3</h3>
      </div>
      <div className="cards">
        <img src={img1} alt="card4" />
        <h3>Card4</h3>
      </div>
    </div>
  );
}

export default Card;
