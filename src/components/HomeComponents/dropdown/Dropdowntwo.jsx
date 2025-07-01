import React from "react";
import "./dropdown.css";
import { Link } from "react-router";

const Dropdowntwo = () => {
  return (
    <div>
      <div className="dropdownmain d-flex" style={{ backgroundColor: "#f3f5f6" }}>
        <div className="dropdowcontentnone d-flex flex-column gap-4">
          <div >

            <ul>
              <li>
                <Link to='/women/indian-fusion-wear' style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Indian & Fusion Wear</strong>
                </Link>
              </li>
              <li><Link to='/women/kurtas-suits' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Kurtas & Suits</Link></li>
              <li><Link to='/women/sarees' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Sarees</Link></li>
              <li><Link to='/women/lehenga-cholis' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Lehenga Cholis</Link></li>
              <li><Link to='/women/kurtis-tunics-tops' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Kurtis, Tunics & Tops</Link></li>
              <li><Link to='/women/ethnic-wear' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Ethnic Wear</Link></li>
              <li><Link to='/women/skirts-palazzos' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Skirts & Palazzos</Link></li>
              <li><Link to='/women/dress-materials' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Dress Materials</Link></li>
              <li><Link to='/women/leggings-salwars-churidars' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Leggings, Salwars & Churidars</Link></li>
              <li><Link to='/women/dupattas-shawls' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Dupattas & Shawls</Link></li>
              <li><Link to='/women/jackets' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>Jackets</Link></li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to="/women/belts-scarves-more" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Belts, Scarves & More</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/watches-wearables" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Watches & Wearables</strong>
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentntwo d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to="/women/maternity" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Maternity</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/sunglasses-frames" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sunglasses & Frames
                </Link>
              </li>
              <li>
                <Link to="/women/flats" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Flats
                </Link>
              </li>
              <li>
                <Link to="/women/boots" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Boots
                </Link>
              </li>
              <li>
                <Link to="/women/footwear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Footwear
                </Link>
              </li>
              <li>
                <Link to="/women/casual-shoes" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Casual Shoes
                </Link>
              </li>
              <li>
                <Link to="/women/heels" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Heels
                </Link>
              </li>
              <li>
                <Link to="/women/sports-shoes-floaters" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Shoes & Floaters
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to="/women/sports-activewear" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Sports & Active Wear</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/sports-footwear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Footwear
                </Link>
              </li>
              <li>
                <Link to="/women/sports-clothing" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/women/sports-equipment" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Equipment
                </Link>
              </li>
              <li>
                <Link to="/women/sports-accessories" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sports Accessories
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnthree d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to='/women/westernwear' style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Western Wear</strong>
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-dresses' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Dresses
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-jeans' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jeans
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-tops' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Tops
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-shrugs' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shrugs
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-trousers-capris' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Trousers & Capris
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-jumpsuits' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jumpsuits
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-tshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  T-shirts
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-shorts-skirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shorts & Skirts
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-jackets-coats' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Jackets & Coats
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-playsuits' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Playsuits
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-coorders' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Co-orders
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-blazers-waistcoats' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Blazers & Waistcoats
                </Link>
              </li>
              <li>
                <Link to='/women/westernwear-sweaters-sweatshirts' className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sweaters & Sweatshirts
                </Link>
              </li>
            </ul>

          </div>
          <div>
          </div>
        </div>

        <div className="dropdowcontentnfour d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to="/gadgets" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Gadgets</strong>
                </Link>
              </li>
              <li>
                <Link to="/gadgets/speakers" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/gadgets/fitness-gadgets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Fitness Gadgets
                </Link>
              </li>
              <li>
                <Link to="/gadgets/smart-wearables" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Smart Wearables
                </Link>
              </li>
              <li>
                <Link to="/gadgets/headphones" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Headphones
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to="/women/jewellery" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Jewellery</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/jewellery/earrings" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/women/jewellery/fine-jewellery" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Fine Jewellery
                </Link>
              </li>
              <li>
                <Link to="/women/jewellery/fashion-jewellery" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Fashion Jewellery
                </Link>
              </li>
            </ul>


            <ul>
              <li>
                <Link to="/women/backpacks" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Backpacks</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/luggages-trolleys" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Luggages & Trolleys</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/handbags-wallets" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Handbags, Bags & Wallets</strong>
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfive d-flex flex-column gap-4">
          <div>
            <ul>
              <li>
                <Link to="/women/lingerie-sleepwear" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Lingerie & Sleepwear</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/lingerie-sleepwear/bra" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Bra
                </Link>
              </li>
              <li>
                <Link to="/women/lingerie-sleepwear/sleepwear-loungewear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sleepwear & Loungewear
                </Link>
              </li>
              <li>
                <Link to="/women/lingerie-sleepwear/briefs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Briefs
                </Link>
              </li>
              <li>
                <Link to="/women/lingerie-sleepwear/shapewear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shapewear
                </Link>
              </li>
              <li>
                <Link to="/women/lingerie-sleepwear/camisoles-thermals" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Camisoles & Thermals
                </Link>
              </li>
              <li>
                <Link to="/women/lingerie-sleepwear/swimwear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Swimwear
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <li>
                <Link to="/women/beauty-personal-care" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "#FF7045" }}>Beauty & Personal Care</strong>
                </Link>
              </li>
              <li>
                <Link to="/women/beauty-personal-care/makeup" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Makeup
                </Link>
              </li>
              <li>
                <Link to="/women/beauty-personal-care/fragrances" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Fragrances
                </Link>
              </li>
              <li>
                <Link to="/women/beauty-personal-care/premium-beauty" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Premium Beauty
                </Link>
              </li>
              <li>
                <Link to="/women/beauty-personal-care/lipsticks" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Lipsticks
                </Link>
              </li>
              <li>
                <Link to="/women/beauty-personal-care/skincare" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Skincare
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowntwo;
