import React, { useEffect, useState } from "react";
import "./CarrousalBanner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from 'axios'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BASE_URL from "../../../Config/config.js"

const CarrousallBanner = () => {
    const [storedbanner, setStoredBanner] = useState([]);

    useEffect(() => {
        const fetchBanner = async (req, res) => {
            try {
                const res = await axios.get(`${BASE_URL}/api/offers/get`)
                if (res.data.success) {
                    setStoredBanner(res.data.data)
                    console.log('caroujlk', res.data.data)
                }
            } catch (error) {
                toast.error("Error while fetching data", error)
            }
        }
        fetchBanner();
    }, []);

    return (
        <div className="container-fluid p-0 my-10">
            <div id="offerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                {/* Indicators */}
                <div className="carousel-indicators">
                    {console.log('storedbanner', storedbanner)}
                    {storedbanner.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#offerCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Carousel Inner */}
                <div className="carousel-inner rounded-3">
                    {console.log('storedbannerqq', storedbanner)}
                    {storedbanner.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <img
                                src={item.image ? `${BASE_URL}/${item.image}` : "https://th.bing.com/th/id/OIP.tvgEXRLbuDbgFucqlPJrvgAAAA?rs=1&pid=ImgDetMain"}
                                className="d-block mx-auto carousel-image"
                                alt={`Static Offer ${index + 1}`}
                                style={{
                                    maxHeight: "400px",
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    ))}
                </div>
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                    type="button"
                    data-bs-target="#offerCarousel"
                    data-bs-slide="prev"
                    style={{ backgroundColor: "#00000094", padding: "35px 15px", position: "absolute", top: "37%" }}
                ></span>
                <span className="visually-hidden">Previous</span>

                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                    type="button"
                    data-bs-target="#offerCarousel"
                    data-bs-slide="next"
                    style={{ backgroundColor: "#00000094", padding: "35px 15px", position: "absolute", right: "0px", top: "37%" }}
                ></span>
                <span className="visually-hidden">Next</span>
            </div>
        </div>
    );
};


export default CarrousallBanner
