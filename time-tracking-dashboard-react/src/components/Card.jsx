const Card = ({title, hrs, prevHrs, svg, color}) => {
  return (
    
      <div className="card">
        <div  style={{backgroundColor: color }} className="background-svg"> {svg} </div>
        <div className="content">
          <div className="top-section">
            <div className="title">{title}</div>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill="#BBC0FF"
                      fill-rule="evenodd"
                    />
                  </svg>
          </div>
          <div className="mobile-flex">
            <div className="mid-section">{hrs}hrs</div>
            <div className="bot-section">Last Week - {prevHrs}</div>
          </div>
        </div>
      </div>
   
  );
};

export default Card;
