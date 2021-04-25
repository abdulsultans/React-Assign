import Logo from "./celebs.png";

function Head() {
  const imgStyle = {
    height: 100,
    width: 150,
  };
  return (
    <nav className="container">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Service">Services</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
      </ul>

      <div style={{ imgStyle }}>
        <img
          src={Logo}
          style={{ height: "100px", width: "100px" }}
          alt="ABSUTA"
        />
      </div>
    </nav>
  );
}

export default Head;
