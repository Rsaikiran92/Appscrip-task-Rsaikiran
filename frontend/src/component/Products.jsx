import { useEffect, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import "../styles/Products.css";

function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [recommended,setrecommended]=useState(false)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div className="products">
      <div className="procucts_header">
        <div>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <div className="prducts_filter">
        <div>
          <div>{products.length} ITEMS</div>
          <div onClick={toggleFilter}>
            {isFilterOpen ? <IoIosArrowBack /> : <IoIosArrowForward />} FILETER
          </div>
        </div>
        <div onClick={()=>setrecommended(!recommended)}>RECOMMENDED {recommended ? < IoIosArrowDown/> : <IoIosArrowUp />}</div>
        
      </div>
      <div className="products_container">
      <div className={`recommended ${recommended ? "recommended_container" : ""}`}>
          <div>SHOP</div>
          <div>SKILLS</div>
          <div>STORIES</div>
          <div>ABOUT</div>
          <div>CONTACT US</div>
        </div>
        {isFilterOpen && (
          <div className="filter_container">
            <div>
              <div>
                <div>IDEAL FOR</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>OCCASION</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>WORK</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>FABRIC</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>SEGMENT</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>SUITABLE FOR</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>RAW MATERIALS</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
            <div>
              <div>
                <div>PATTERN</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div>ALL</div>
            </div>
          </div>
        )}
        <div
          className={`products_list ${
            isFilterOpen ? "three-columns" : "four-columns"
          }`}
        >
          {products.map((product) => (
            <div>
              <img src={product.image} alt="product" />
              <b>{product.title}</b>
            </div>
          ))}
        </div>
      </div>{" "}
      *
    </div>
  );
}

export default Products;
