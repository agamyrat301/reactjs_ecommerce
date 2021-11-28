import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Products() {
  const [Data, setData] = useState([]);
  const [Filter, setFilter] = useState(Data);
  const [loading, setloading] = useState(false);
  let componentMounted = true;

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
     


      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men Clothing</button>
          <button className="btn btn-outline-dark me-2">Women </button>
        </div>
        {Data
          ? Data.map((product) => {
              console.log(product);
              return (
                <div className="col-md-3 mb-4">
                  <div class="card h-100 p-4 text-center" key={product.id}>
                    <img
                      src={product.photo.url}
                      height="250px"
                      class="card-img-top"
                      alt={product.name["tk"]}
                    />
                    <div class="card-body">
                      <h5 class="card-title mb-0">{product.name["tk"]}</h5>
                      <p class="card-text">{product.price / 100} TMT</p>
                      <a href="#" class="btn btn-outline-dark">
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </>
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      axios
        .get(`http://95.85.122.237/api/items`)
        .then((res) => {
          // console.log(res.data.data);
          setData(res.data.data);
          setloading(false);
        })
        .catch((e) => {
          console.log(e);
          setloading(false);
        });

      if (componentMounted) {
        console.log(Data);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}
