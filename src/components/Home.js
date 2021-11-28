import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [Items, setItems] = useState([]);
  const [bannerloading, setbannerloading] = useState(false);


  const BannerLoading = () => {
      return <Skeleton height={500}/>
  }

  useEffect(() => {
    setbannerloading(true);

    axios
      .get(`http://95.85.122.237/api/home`)
      .then((res) => {
        setbannerloading(false);
        const banners = res.data.banners;
        setItems(banners);
      })
      .catch((e) => {
        setbannerloading(false);
        console.log(e);
      });
  }, []);

  return bannerloading ? (
    <BannerLoading/>
  ) : (
    <div className="hero mh-50">
      <div
        id="carouselExampleIndicators"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          {Items.map(function (banner, index) {
            var cls = index === 0 ? "active" : " ";

            return (
              <button
                key={banner.id}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                class={cls}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            );
          })}
        </div>
        <div class="carousel-inner">
          {Items.map(function (banner, index) {
            var cls = index === 0 ? "carousel-item active" : "carousel-item";

            return (
              <div key={banner.id} class={cls}>
                <img
                  src={banner.photo.url}
                  class="d-block w-100"
                  alt="banner image"
                />
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
