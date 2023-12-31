import React, { useContext, useEffect, useState } from "react";
import "./single-item.css";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import imgItem from "../../img/img3.jpeg";

const SingleItem = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product, image) => {
    setCart([...cart, { product, image }]);
  };
  const [categories, setCategories] = useState([]);
  const [itemDetails, setItemDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://menu.testm.online/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    if (id && categories.length) {
      const selectedProduct = categories
        .flatMap((category) => category.products)
        .find((product) => product.id === parseInt(id));
      setItemDetails(selectedProduct);
    }
  }, [id, categories]);

  return (
    <div className="container-fluid bg-dark  ">
      <div className="row">
        <div className="col-lg-5 p-0 backDark">
          <div className="container-fluid text-white">
            <div className={`right-section  ${openMenu && "open"}`}>
              <div className="image-container">
                <img
                  src="/images/home.jpg"
                  className="img-fluid rounded-5"
                  alt=""
                />
                <div className="logo-box">
                  <img
                    src="/images/logo.jpg"
                    className="rounded-4 img-fluid"
                    alt=""
                  />
                  <div className="rating-box d-flex justify-content-between align-items-center">
                    <p className="rating-text px-2 rounded-5 ">تقييم</p>
                    <div className="rating-val center-content d-inline-block m-auto rounded-4 my-4 ">
                      0.5<i class="bi bi-star-fill me-2"></i>
                    </div>
                  </div>
                  <p className="shift-start rounded-4 text-center">
                    متاح 24 ساعة
                  </p>
                </div>
              </div>
              <div className="item-container mt-5 position-relative">
              <Link to="/cart" className="  iconCartOrder   ">
  <i className="fa-solid fa-cart-shopping text-white"></i>
  <div className="countCart text-white text-center">{cart.length}</div>
</Link>
                <div className="search-container w-75 m-auto m">
                  <input type="search" className="form-control" />
                  <i className="bi bi-search icon"></i>
                  <span
                    className="menu-btn-open"
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <i class="bi bi-grid-fill icon"></i>
                  </span>
                </div>
                <div className="item">
                  {/* 
                {itemDetails.image && (
                    <img
                      src={`https://menu.testm.online/storage/${itemDetails.image[0].path}`}
                      className="card-img rounded-3"
                      alt="..."
                    />
                  )}
                  <h4>{itemDetails.name}</h4>
                  <p>{itemDetails.description}</p> */}
                  <img src={imgItem} className="card-img rounded-3" alt="..." />
                  <h4 className=" mt-3">
                    بــــروســتــد ريــــزو ايــت اب ( عائــلــي ) دجاجة مقرمشة
                  </h4>
                  <p>
                    المكونات : بـــلـــم رز ( تمن ) ريزو مـطـبـوخ على الطريقة
                    المكسيكية والبهارات المكسيكية - دجـاجــة كــامــلــة
                    مــقــرمــشــة - مـخـلـل
                  </p>
                  <div className="meal-duration p-2 d-flex justify-content-center align-items-center">
                    يُحضر خلال: 20 دقيقة
                  </div>
                  <div className="price-container p-2 rounded-2 my-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <p>السعر عند الاختيار:</p>
                      <p>اختر1</p>
                    </div>
                    <div className="price p-2 rounded-2 d-flex justify-content-between align-items-center">
                      <div className="price-txt d-flex justify-content-center align-items-center">
                        <div className="custom-radio">
                          <input type="radio" id="radio1" name="radio-group " />
                          <label for="radio1"></label>
                        </div>
                        <label className="me-2">السعر</label>
                      </div>

                      <div className="price-value">
                        13500
                        <small>د ع</small>
                      </div>
                    </div>
                  </div>
                  <div className="additions p-2">
                    <div className="add-title d-flex justify-content-between align-items-center">
                      <h6>علبة صوص :</h6>
                      <span>اختياري</span>
                    </div>
                    <div className="addition-item  p-3  rounded-2 addition-item1 d-flex justify-content-between align-items-center">
                      <p>ثومية</p>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="notes p-3 rounded-2 d-flex flex-column mt-2">
                    <label>ملاحظة</label>
                    <textarea></textarea>
                  </div>
                  <div
                    className=" my-2 d-inline-block"
                    onClick={() => addToCart("اسم المنتج هنا")}
                  >
                    <Link to="/cart" class="btn btn-success">
                      اضافة الى سلة التسوق
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 p-0 backGroundBody ">
          <div className={`left-section ${openMenu && "open"}`}>
            <div className="left-section-content text-center">
              <button
                className="btn close-btn"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <i class="bi bi-x-lg mx-5"></i>
              </button>
              <img
                src="/images/logo.jpg"
                className="rounded-4 logo d-block m-auto"
                alt=""
              />
              <div className="rating center-content d-inline-block m-auto rounded-4 my-4 ">
                0.5<i className="bi bi-star-fill me-2"></i>
              </div>
              <ul className="nav-list">
                <li> اتصل بنا</li>
                {/* <li>الموقع </li>
                <li> مصدر اللحوم</li>
                <li>تقييم </li>
                <li className="active">انشاء حساب </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
