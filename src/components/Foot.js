import Logo from './celebs.png';

const Foot = () => {
  return (
    <div className="foot">
      <div className="fo-title" id="partner">
        <h3>Partners</h3>
        <ul>
          <li>
            <a href="http://">247Hitz.Com</a>
          </li>
          <li>
            <a href="http://">CelebritiesBuzzGh.Com</a>
          </li>
          <li>
            <a href="http://">Townflex.Com</a>
          </li>
          <li>
            <a href="http://">NewsAnkor.Com</a>
          </li>
        </ul>
      </div>

      <div className="fo-title" id="services">
        <h3>Services</h3>
        <ul>
          <li>
            <a href="http://">News Coverage</a></li >
          <li>
            <a href="http://">Product Review</a>
          </li>
          <li>
            <a href="http://">Video Ads</a>
          </li>
          <li>
            <a href="http://">Audio Ads</a>
          </li>
        </ul >
      </div >
      
      <div className="fo-title" id="foot-image">
      <h3>Absuta News</h3>
        <img src={Logo} style={{height: "150px", width: "150px"}} alt="LOGO" />
      </div>
    </div>
  );
};

export default Foot;
