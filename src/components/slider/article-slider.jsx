import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Article from "./cards/article";
import { articlesData } from "../../data/articles";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ArticleSlider() {

  const renderArticles = () => {
    return articlesData.map((article) => {
      return <Article
        title={article.title}
        description={article.description}
        backgroundImage={article.backgroundImage}
        url={article.url}
      />
    })
  }

  return (
    <div >
      <Carousel
        responsive={responsive}
        rewind={true}
        infinite={true}
        className={articlesData.length === 1 ? "flex justify-center" : ""}
      > 
          {renderArticles()}
      </Carousel>
    </div>
  )
}

export default ArticleSlider