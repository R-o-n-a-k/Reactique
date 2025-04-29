import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import BackToHome from "../../components/BackToHome/BackToHome";

const RandomQuote = () => {
  const [favBtn, setFavBtn] = useState(true);
  const [like, setLike] = useState(false);

  const [quoteData, setQuoteData] = useState({
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  });

  const [favQuote, setFavQuote] = useState([]);

  //   for generating quote with hitting space bar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent scrolling
        generateQuote();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const generateQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuoteData(data);
      setLike(false);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  const handleFavourite = () => {
    setFavBtn((favBtn) => !favBtn);
  };

  const likePost = () => {
    const alreadyLiked = favQuote.some(
      (q) => q.quote === quoteData.quote && q.author === quoteData.author
    );

    if (!alreadyLiked) {
      setLike(true);
      setFavQuote([...favQuote, quoteData]);
    }
  };

  const deleteFavQuote = (index) => {
    const confirmDeleteQuote = window.confirm(
      "Are you sure you want the quote from Favourite list?"
    );
    if (confirmDeleteQuote) {
      setFavQuote(favQuote.filter((_, id) => index != id));

      //  if the quote is deleted from fav list, like also gets removed
      const removedQuote = favQuote[index];
      if (
        removedQuote.quote === quoteData.quote &&
        removedQuote.author === quoteData.author
      ) {
        setLike(false);
      }
    }
  };

  const copyToClipboard = () => {
    const fullQuote = `"${quoteData.quote}" - ${quoteData.author}`;
    navigator.clipboard
      .writeText(fullQuote)
      .then(() => {
        alert("Quote copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const shareQuote = async () => {
    const fullQuote = `"${quoteData.quote}" — ${quoteData.author}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Inspirational Quote",
          text: fullQuote,
        });
      } catch (error) {
        console.error("Error sharing quote:", error);
      }
    } else {
      shareViaWhatsApp();
    }
  };

  const shareViaWhatsApp = () => {
    const message = `"${quoteData.quote}" - ${quoteData.author}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="randomQuote-container">
        <h2>Quote of the Day</h2>
        <div className="randomQuote">
          {favBtn ? (
            <div className="quote-section">
              <div className="quote-content">
                <div className="quote">
                  <i className="fa-solid fa-quote-left" />
                  <p className="quote-text">{quoteData.quote}</p>
                  <i className="fa-solid fa-quote-right" />
                  <p className="quote-author">- {quoteData.author}</p>
                </div>
              </div>
              <hr className="line-partition" />
              <div className="quote-bottom">
                <div className="quote-actions">
                  <i
                    onClick={likePost}
                    className={`fa-heart quote-like ${
                      like ? "fa-solid" : "fa-regular"
                    }`}
                  />
                  <i
                    className="fa-solid fa-list-ul quoke-favourite"
                    onClick={handleFavourite}
                  />
                  <i
                    className="fa-regular fa-copy quote-copy"
                    onClick={copyToClipboard}
                  />
                  <i
                    className="fa-solid fa-share-nodes quote-share"
                    onClick={shareQuote}
                  />
                </div>
                <div>
                  <button className="quote-generate" onClick={generateQuote}>
                    Generate <i className="fa-solid fa-shuffle" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="favourite-section">
              <i
                class="fa-solid fa-arrow-left back-btn"
                onClick={handleFavourite}
              />
              <h4>Favourite Quote List</h4>
              <div className="fav-content">
                {favQuote.length > 0 ? (
                  <div className="fav-list">
                    {favQuote.map((favQ, index) => (
                      <>
                        <div key={index} className="fav-quote">
                          <i
                            class="fa-solid fa-xmark deleteIcon"
                            onClick={() => deleteFavQuote(index)}
                          />
                          <p>{favQ.quote}</p>
                        </div>
                        <p className="quote-author favQA">- {favQ.author}</p>
                        <hr className="line-partition" />
                      </>
                    ))}
                  </div>
                ) : (
                  <div className="empty-quote-list">
                    No Quotes added{" "}
                    <i className="fa-regular fa-face-sad-tear" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <BackToHome bgColor="#273c2c" bottom="5%" />
    </>
  );
};

export default RandomQuote;
