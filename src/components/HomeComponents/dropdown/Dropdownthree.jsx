import React from "react";
import "./dropdown.css";
import { Link } from "react-router";

const Dropdownthree = () => {
  return (
    <div>
      <div className="dropdownmain d-flex" style={{ backgroundColor: "#f3f5f6" }}>
        <div className="dropdowcontentnone d-flex flex-column gap-4">
          <div >

            <ul>
              <li>
                <Link style={{ textDecoration: 'none' }} to='/kids/boys'><strong style={{ color: "#FF7045" }}>Boys Clothing</strong></Link>
              </li>
              <li>
                <Link to="/kids/boys/t-shirts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/jeans" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jeans
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/shirts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/track-pants-pyjamas" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Track Pants & Pyjamas
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/jackets-sweaters-sweatshirts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jacket, Sweater & Sweatshirts
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/shorts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shorts
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/trousers" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Trousers
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/clothing-sets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Clothing Sets
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/innerwear-thermals" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Innerwear & Thermals
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/ethnic-wear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Ethnic Wear
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/value-packs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Value Packs
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/party-wear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Party Wear
                </Link>
              </li>
              <li>
                <Link to="/kids/boys/nightwear-loungewear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Nightwear & Loungewear
                </Link>
              </li>
            </ul>

          </div>

        </div>

        <div className="dropdowcontentntwo d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to="/kids/girls" style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}>
                  Girls Clothing
                </Link>
              </li>
              <li><Link to="/kids/girls/dresses" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Dresses</Link></li>
              <li><Link to="/kids/girls/t-shirts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>T-shirts</Link></li>
              <li><Link to="/kids/girls/nightwear-loungewear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Nightwear & Loungewear</Link></li>
              <li><Link to="/kids/girls/tops" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Tops</Link></li>
              <li><Link to="/kids/girls/clothing-sets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Clothing Sets</Link></li>
              <li><Link to="/kids/girls/dungarees-jumpsuits" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Dungarees & Jumpsuits</Link></li>
              <li><Link to="/kids/girls/lehenga-choli" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Lehenga choli</Link></li>
              <li><Link to="/kids/girls/skirts-shorts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Skirts & Shorts</Link></li>
              <li><Link to="/kids/girls/kurta-sets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Kurta Sets</Link></li>
              <li><Link to="/kids/girls/value-packs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Value Packs</Link></li>
              <li><Link to="/kids/girls/party-wear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Party Wear</Link></li>
              <li><Link to="/kids/girls/jackets-sweaters-sweatshirts" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Jacket, Sweater & Sweatshirts</Link></li>
              <li><Link to="/kids/girls/tights-leggings" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Tights & Leggings</Link></li>
              <li><Link to="/kids/girls/jeans-trousers-capris" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Jeans, Trousers & Capris</Link></li>
              <li><Link to="/kids/girls/innerwear-thermals" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Innerwear & Thermals</Link></li>
            </ul>

          </div>

        </div>

        <div className="dropdowcontentnthree d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to="/kids/infants" style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}>
                  Infants
                </Link>
              </li>
              <li><Link to="/kids/infants/t-shirts-tops" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>T-shirts & Tops</Link></li>
              <li><Link to="/kids/infants/rompers-sleepsuits" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Rompers & Sleepsuits</Link></li>
              <li><Link to="/kids/infants/bodysuits" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Bodysuits</Link></li>
              <li><Link to="/kids/infants/bottom-wear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Bottom wear</Link></li>
              <li><Link to="/kids/infants/clothing-sets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Clothing Sets</Link></li>
              <li><Link to="/kids/infants/dresses" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Dresses</Link></li>
              <li><Link to="/kids/infants/infant-care" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Infant Care</Link></li>
              <li><Link to="/kids/infants/innerwear-sleepwear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Innerwear & Sleepwear</Link></li>
              <li><Link to="/kids/infants/winter-wear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Winter Wear</Link></li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link
                  to="/kids/home-bath"
                  style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}
                >
                  Home & Bath
                </Link>
              </li>
              <li>
                <Link
                  to="/kids/personal-care"
                  style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}
                >
                  Personal Care
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfour d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link
                  to="/kids/footwear"
                  style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}
                >
                  Footwear
                </Link>
              </li>
              <li><Link to="/kids/footwear/casual-shoes" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Casual Shoes</Link></li>
              <li><Link to="/kids/footwear/socks" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Socks</Link></li>
              <li><Link to="/kids/footwear/heels" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Heels</Link></li>
              <li><Link to="/kids/footwear/flipflops" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Flipflops</Link></li>
              <li><Link to="/kids/footwear/flats" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Flats</Link></li>
              <li><Link to="/kids/footwear/sports-shoes" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Sports Shoes</Link></li>
              <li><Link to="/kids/footwear/sandals" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Sandals</Link></li>
              <li><Link to="/kids/footwear/school-shoes" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>School Shoes</Link></li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link
                  to="/kids/toys-games"
                  style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}
                >
                  Toys & Games
                </Link>
              </li>
              <li>
                <Link to="/kids/toys-games/activity-toys" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Activity Toys
                </Link>
              </li>
              <li>
                <Link to="/kids/toys-games/action-figure-play-set" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Action Figure / Play set
                </Link>
              </li>
              <li>
                <Link to="/kids/toys-games/soft-toys" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Soft Toys
                </Link>
              </li>
              <li>
                <Link to="/kids/toys-games/learning-development" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Learning & Development
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfive d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link
                  to="/kids/accessories"
                  style={{ textDecoration: "none", color: "#FF7045", fontWeight: "bold" }}
                >
                  Kids Accessories
                </Link>
              </li>
              <li>
                <Link to="/kids/accessories/bags-backpacks" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Bags & Backpacks
                </Link>
              </li>
              <li>
                <Link to="/kids/accessories/jewellery-hair-accessory" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jewellery & Hair accessory
                </Link>
              </li>
              <li>
                <Link to="/kids/accessories/caps-hats" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Caps & Hats
                </Link>
              </li>
              <li>
                <Link to="/kids/accessories/masks-protective-gears" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Masks & Protective Gears
                </Link>
              </li>
              <li>
                <Link to="/kids/accessories/watches" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/kids/accessories/sunglasses" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sunglasses
                </Link>
              </li>
            </ul>

          </div>
          {/* <div>
            <ul>
              <li> <strong style={{ color: "#FF7045" }}>Brands</strong></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>HRX</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>H&M</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>YK</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Max Kids</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Pantaloons</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Mothercare</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>United Colors Of Benetton Kids</Link></li>
              <li><Link className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>U.S. Polo Assn. </Link></li>

            </ul>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default Dropdownthree;
