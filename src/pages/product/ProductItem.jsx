import { useState, useEffect } from "react";
import Breadcrumb from "../../components/UI/Breadcrumbs/Breadcrumb";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useProductApi from "../../service/product/useProductApi";
import "./style.scss";
import "swiper/css";
import "swiper/css/bundle";
import UnderlineTab from "../../components/UI/Tab";
import ProductCarousel from "../../components/UI/ProductCarousel";
import useLikeStore from './../../store/useLikeStore';
import Details from './../../components/UI/Details/Details';

const ProductItem = () => {
  let [product, setProduct] = useState([]);
  let { slug } = useParams();
  const { likeProdFunc } = useLikeStore();
  const [isLike, setIsLike] = useState(false);

  const state = () => {
    useProductApi.getOneItem(slug).then((res) => {
      setProduct(res.data[0]);
      console.log(res.data[0]);
    });
  };

  const setLikeFun = () => {
    setIsLike(!isLike);
    likeProdFunc(product, isLike, setIsLike);
  };

  useEffect(() => {
    state();
    console.log(JSON.parse(localStorage.getItem("LIKE_COLLECTION")));
  }, [slug]);


  return (
    <section id="item" className="py-8">
      <div className="container mx-auto">
        <Breadcrumb product={product} />

        <div className="flex justify-between gap-x-20 pt-6">
          <div>
            {
              <ProductCarousel image={product.images} />
            }
          </div>
          <Details product={product} setLikeFun={setLikeFun} />
        </div>


        <div className="max-w-[788px] mx-auto mt-[26px]">
          <UnderlineTab product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductItem;