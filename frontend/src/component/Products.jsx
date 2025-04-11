import { useEffect, useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import "../styles/Products.css";

function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("RECOMMENDED");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data); 
      })
      .catch((error) => console.log(error));
  }, []);


  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...products];
    if (option === "Price : high to low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === "Price : low to high") {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted = [...products]; 
    }
    setSortedProducts(sorted);
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
        {/* 
        <div onClick={()=>setrecommended(!recommended)}>RECOMMENDED {recommended ? < IoIosArrowDown/> : <IoIosArrowUp />}</div> */}
        <select class="select" value={sortOption} onChange={handleSortChange}>
          <option>RECOMMENDED</option>
          <option>Newest first</option>
          <option>popular</option>
          <option>Price : high to low</option>
          <option>Price : low to high</option>
        </select>
      </div>
      <div className="products_container">
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
          {sortedProducts.map((product) => (
            <div>
              <img src={product.image} alt="product" />
              <h4>{product.title}</h4>
              <div>
                <div>{product.description}</div>
                <div>
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      *
    </div>
  );
}

export default Products;
