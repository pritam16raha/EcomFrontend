import React, { useState } from 'react'
import { ColorFilter, FilterTitle, FilterWrap, PriceFilter, ProductCatagoryFilter } from '../../styles/filter';
import Arrow from "../../assets/myImage/extra/rightArrow.png"
import { ProductFilterList } from '../../data/data';
import { staticImages } from '../../utils/myImageData';

const ProductFilter = () => {
    const [isProductFilterOpen, setProductFilter] = useState(true);
    const [isPriceFilterOpen, setPriceFilter] = useState(true);
    const [isColorFilterOpen, setColorFilter] = useState(true);
    const [isBrandFilterOpen, setBrandFilter] = useState(true);
    const [isStyleFilterOpen, setStyleFilter] = useState(true);

    const toggleFilter = (filter) => {
      switch(filter){
        case "product":
          setProductFilter(!isProductFilterOpen);
          break;
        case "price":
          setPriceFilter(!isPriceFilterOpen);
          break;
        case "color":
          setColorFilter(!isColorFilterOpen);
          break;
        case "brand":
          setBrandFilter(!isBrandFilterOpen);
        case "style":
          setStyleFilter(!isStyleFilterOpen);
          break;
        default:
          break;
      }
    };

    const rangeMin = 100;
    const[minRange, setMinRange] = useState(300);
    const[maxRange, setMaxRange] = useState(700);

    const handleInputChange = (e) => {
      const inputName = e.target.name;
      const inputValue = parseInt(e.target.value);

      if(inputName === "min"){
        setMinRange(inputValue);
        if(maxRange - inputValue < rangeMin){
          setMaxRange(inputValue + rangeMin);
        }
      }else if(inputName === "max"){
        setMaxRange(inputValue);
        if (inputValue - minRange < rangeMin){
          setMinRange(inputValue - rangeMin);
      }
      }
    }

    const calculateRangePosition = (value, max) => {
      return (value/max)*100 + "%"
    };


  return (
    <>
      <ProductCatagoryFilter>
        <FilterTitle onClick={() => toggleFilter("product")} className="filter-title flex items-center justify-between">
          <p className="filter-title-text text-gray text-base font-semibold text-lg">Filter</p>
          <span className={`text-gray text-xxl filter-title-icon ${
                !isProductFilterOpen ? "rotate" : ""
              }`}><img src={Arrow}/></span>
        </FilterTitle>
        <FilterWrap className={`${!isProductFilterOpen ? "show" : "hide"}`}>
          {
            ProductFilterList?.map((productFilter) => {
              return(
                <div key={productFilter.id} className="product-filter-item">
                  <button type='button' className="filter-item-head w-full flex items-center justify-between">
                    <span className="filter-head-title text-base text-gray font-semibold">
                      {productFilter.title}
                    </span>
                    <span className="filter-head-icon text-gray">
                      <img src={Arrow}/>
                    </span>
                  </button>
                </div>
              )
            })
          }
        </FilterWrap>
      </ProductCatagoryFilter>

      <PriceFilter>
        <FilterTitle className='filter-title flex items-center justify-between' onClick={() => toggleFilter("price")}>
          <p className="filter-title-text text-gray text-base font-semibold text-lg">Price</p>
          <span className={`text-gray text-xl filter-title-icon ${!isPriceFilterOpen ? "rotate" : ""}`}>
            <img src={Arrow} />
          </span>
        </FilterTitle>

        <FilterWrap className={`range filter-wrap ${!isPriceFilterOpen? "show" : "hide"}`}>
          <div className='range-slider'>
            <span className='range-selected h-full bg-sea-green' style={{left: calculateRangePosition(minRange,1000), right: calculateRangePosition(1000 - maxRange, 1000)}}></span>
          </div>

          <div className='range-input'>
            <input className='min w-full' type='range' min="0" max="1000" value={minRange} step="10" name='min' onChange={handleInputChange}/>
            <input type='range' className='min w-full' min="0" max="1000" value={maxRange} step="10" name='max' onChange={handleInputChange}/>
          </div>
          <div className='range-price w-full flex items-center'>
            <input type='number' className='text-center' name="min" value={minRange} onChange={handleInputChange}/>
            <input type='number' className='text-center' name="min" value={maxRange} onChange={handleInputChange}/>
          </div>
        </FilterWrap>
      </PriceFilter>

      <ColorFilter>
          <FilterTitle className="flex items-center justify-between" onClick={() => toggleFilter("color")}>
            <p className="filter-title-text text-gray text-base font-semibold text-lg">Colors</p>
            <span className={`text-gray text-xl filter-title-icon ${!isColorFilterOpen? "rotate" : ""}`}><img src={Arrow} /></span>
          </FilterTitle>
          <FilterWrap className={`${!isColorFilterOpen ? "show" : "hide"}`}>
            <div className="colors-list grid">
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color1} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center"> 
                <input type="checkbox"/>
                <img src={staticImages.color2} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color3} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color4} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color5} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color6} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color7} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color8} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color9} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color10} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color11} alt=''/>
              </div>
              <div className="colors-item text-center flex flex-col justify-center items-center">
                <input type="checkbox"/>
                <img src={staticImages.color12} alt=''/>
              </div>
            </div>
          </FilterWrap>
      </ColorFilter>
    </>
  )
}

export default ProductFilter;