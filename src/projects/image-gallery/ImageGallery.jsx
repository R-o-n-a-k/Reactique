import React, { useState } from "react";
import "./ImageGallery.css";
import { ImageData, ImageCategoryButtons } from "./ImagePathData";
import BackToHome from "../../components/BackToHome/BackToHome";

const ImageGallery = () => {
  const [imageCat, setImageCat] = useState(ImageData);
  const [categoryTabBtn, setCategoryTabBtn] = useState("all");

  const [searchImageText, setSearchImageText] = useState("");

  const filterPhotos = (value) => {
    if (value === "all") {
      setImageCat(ImageData);
    } else {
      const newImages = ImageData.filter((item) => {
        return value === item.category;
      });
      setImageCat(newImages);
    }
  };

  const searchImages = (text) => {
    const inputWords = text.toLowerCase().split(" ");
    const newSearchImages = ImageData.filter((item) => {
      return inputWords.some((word) =>
        item.keywords.some((keyword) => keyword.toLowerCase().includes(word))
      );
    });
    setImageCat(newSearchImages);
  };

  const handleCategoryBtn = (btnCat) => {
    filterPhotos(btnCat);
    setCategoryTabBtn(btnCat);
  };

  const handleSearchImage = () => {
    if (searchImageText.trim() === "") {
      setImageCat(ImageData);
    }
    searchImages(searchImageText);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchImages(searchImageText);
    }
  };

  return (
    <div className="imageGallery-project">
      <h2> Image Gallery</h2>
      <div className="imageGallery-content">
        <div className="imageGallery-search">
          <input
            value={searchImageText}
            onChange={(e) => setSearchImageText(e.target.value)}
            type="text"
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearchImage}>Search</button>
        </div>
        <div className="imageGallery-category">
          {ImageCategoryButtons.map((btn, index) => (
            <button
              className={` ${
                categoryTabBtn === btn.category ? "category-active" : ""
              } imageGallery-category-button 
              `}
              key={index}
              onClick={() => handleCategoryBtn(btn.category)}
            >
              {btn.category}
            </button>
          ))}
        </div>

        <div className="imageGallery-grid">
          {imageCat.length > 0 ? (
            <div className="imageGallery-photos">
              {imageCat.map((item) => (
                <img
                  key={item.id}
                  src={item.path}
                  alt={item.name}
                  title={item.name}
                  loading="lazy"
                  data-aos="fade-in"
                />
              ))}
            </div>
          ) : (
            <div>Sorry No images Found :| </div>
          )}
        </div>
      </div>
      <BackToHome bgColor="#90DAEB" />
    </div>
  );
};

export default ImageGallery;
