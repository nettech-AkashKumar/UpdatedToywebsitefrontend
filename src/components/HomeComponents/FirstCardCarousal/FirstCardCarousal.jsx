import React from 'react'
import './FirstCardCarousal.css'
const FirstCardCarousal = ({ data = [] }) => {
  return (
    <div>
       <div className="my-10 cardoff-latest-container">
      <div className="biggestdealsdiv my-10">
        <h3 className="biggestdealsheading">Biggest Deals On Top Brands</h3>
      </div>
      <div
        className="flex cardoff-img-latest"
        style={{ justifyContent: "space-between", gap: "23px" }}
      >
        {data.map((ele, index) => (
          <a
            href={ele.link || "#"}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <div
              className="cardcarousal"
              key={index}
              style={{ backgroundColor: ele.background }}
            >
              <div className="cardimagecarousaldiv">
                <img
                  className="cardcarousalimage"
                  src={ele.image}
                  alt="image"
                />
              </div>
              <div className="cardoffer">
                <p className="cardlatestoffer lts">{ele.text}</p>
                <p className="cardsuboffer lts lts1 mb-4">{ele.subtext}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
  )
}

export default FirstCardCarousal;
