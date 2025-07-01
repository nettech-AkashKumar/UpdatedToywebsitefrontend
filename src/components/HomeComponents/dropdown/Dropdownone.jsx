import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";


const Dropdown = () => {
  return (
    <div>
      <div className="dropdownmain d-flex" style={{ backgroundColor: "#f3f5f6" }}>
        <div className="dropdowcontentnone d-flex flex-column gap-4">
          <div >

            <ul>
              <li><Link to='/men/topwear' style={{ cursor: 'pointer', textDecoration: 'none' }}><strong style={{ color: "#E65075" }}>Topwear</strong></Link></li>
              <li><Link to='/men/casualshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Casual Shirts</Link></li>
              <li><Link to='/men/formalshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Formal Shirts</Link></li>
              <li><Link to='/men/sweatshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Sweatshirts</Link></li>
              <li><Link to='/men/sweaters' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Sweaters</Link></li>
              <li><Link to='/men/jackets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Jackets</Link></li>
              <li><Link to='/men/blazers&coats' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Blazers & Coats</Link></li>
              <li><Link to='/men/suits' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Suits</Link></li>
              <li><Link to='/men/rainjackets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Rain Jackets</Link></li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to='/men/indian&festivewear' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Indian & Festive Wear</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/kurtas&kurtasets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Kurtas & Kurta Sets
                </Link>
              </li>
              <li>
                <Link to='/men/sherwanis' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sherwanis
                </Link>
              </li>
              <li>
                <Link to='/men/nehrujackets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Nehru Jackets
                </Link>
              </li>
              <li>
                <Link to='/men/dhotis' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Dhotis
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentntwo d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to='/men/bottomwear' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Bottomwear</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/jeans' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jeans
                </Link>
              </li>
              <li>
                <Link to='/men/casualtrousers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Casual Trousers
                </Link>
              </li>
              <li>
                <Link to='/men/formaltrousers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Formal Trousers
                </Link>
              </li>
              <li>
                <Link to='/men/shorts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shorts
                </Link>
              </li>
              <li>
                <Link to='/men/trackpants&joggers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Track Pants & Joggers
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to='/men/innerwearsleepwear' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Innerwear & Sleepwear</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/briefstrunks' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Briefs & Trunks
                </Link>
              </li>
              <li>
                <Link to='/men/boxers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Boxers
                </Link>
              </li>
              <li>
                <Link to='/men/vests' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Vests
                </Link>
              </li>
              <li>
                <Link to='/men/sleepwearloungewear' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sleepwear & Loungewear
                </Link>
              </li>
              <li>
                <Link to='/men/thermals' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Thermals
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnthree d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to='/men/footwear' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Footwear</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/casualshoes' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Casual Shoes
                </Link>
              </li>
              <li>
                <Link to='/men/sportsshoes' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Shoes
                </Link>
              </li>
              <li>
                <Link to='/men/formalshoes' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Formal Shoes
                </Link>
              </li>
              <li>
                <Link to='/men/sneakers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sneakers
                </Link>
              </li>
              <li>
                <Link to='/men/sandalsfloaters' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sandals & Floaters
                </Link>
              </li>
              <li>
                <Link to='/men/flipflops' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Flip Flops
                </Link>
              </li>
              <li>
                <Link to='/men/socks' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Socks
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to='/men/personalcare' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Personal Care & Grooming</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/sunglassesframes' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Sunglasses & Frames</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/watches' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Watches</strong>
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfour d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to='/men/sportswear' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Sports & Active Wear</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/sportsshoes' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Shoes
                </Link>
              </li>
              <li>
                <Link to='/men/sportssandals' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Sandals
                </Link>
              </li>
              <li>
                <Link to='/men/activetshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Active T-Shirts
                </Link>
              </li>
              <li>
                <Link to='/men/trackpants-shorts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Track Pants & Shorts
                </Link>
              </li>
              <li>
                <Link to='/men/tracksuits' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Tracksuits
                </Link>
              </li>
              <li>
                <Link to='/men/jackets-sweatshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jackets & Sweatshirts
                </Link>
              </li>
              <li>
                <Link to='/men/sportsaccessories' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Accessories
                </Link>
              </li>
              <li>
                <Link to='/men/swimwear' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Swimwear
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to='/men/gadgets' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Gadgets</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/smartwearables' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Smart Wearables
                </Link>
              </li>
              <li>
                <Link to='/men/fitnessgadgets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Fitness Gadgets
                </Link>
              </li>
              <li>
                <Link to='/men/headphones' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Headphones
                </Link>
              </li>
              <li>
                <Link to='/men/speakers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Speakers
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfive d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to='/men/fashion-accessories' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Fashion Accessories</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/wallets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Wallets
                </Link>
              </li>
              <li>
                <Link to='/men/belts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Belts
                </Link>
              </li>
              <li>
                <Link to='/men/perfumes-body-mists' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Perfumes & Body Mists
                </Link>
              </li>
              <li>
                <Link to='/men/trimmers' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Trimmers
                </Link>
              </li>
              <li>
                <Link to='/men/deodorants' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Deodorants
                </Link>
              </li>
              <li>
                <Link to='/men/ties-cufflinks-pocket-squares' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Ties, Cufflinks & Pocket Squares
                </Link>
              </li>
              <li>
                <Link to='/men/accessory-gift-sets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Accessory Gift Sets
                </Link>
              </li>
              <li>
                <Link to='/men/mufflers-scarves-gloves' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Mufflers, Scarves & Gloves
                </Link>
              </li>
              <li>
                <Link to='/men/phone-cases' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Phone Cases
                </Link>
              </li>
              <li>
                <Link to='/men/rings-wristwear' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Rings & Wristwear
                </Link>
              </li>
              <li>
                <Link to='/men/helmets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Helmets
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to='/men/bags-backpacks' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Bags & Backpacks</strong>
                </Link>
              </li>
              <li>
                <Link to='/men/luggages-trolleys' style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <strong style={{ color: "#E65075" }}>Luggages & Trolleys</strong>
                </Link>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dropdown;
