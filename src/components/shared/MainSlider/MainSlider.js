import React from "react";

import "./MainSlider.css";
import MainSlide from "../MainSlide/MainSlide";
import MainSlideLeftArrow from "../MainSliderLeftArrow/MainSlideLeftArrow";
import MainSlideRightArrow from "../MainSlideRightArrow/MainSlideRightArrow";
import Christmas_Sale from "../Images/christmas_sale.jpg";
import Christmas from "../Images/christmas.jpg";
import Woman_Shopping from "../Images/woman_shopping.jpg";

class MainSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Christmas_Sale, Christmas, Woman_Shopping],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    // NEED TO FIX THIS CODE!!
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));

  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".mainSlide").clientWidth;
  };

  render() {
    return (
      <div className="mainSlider ui raised card">
        <div
          className="sliderWrapper"
          style={{
            // transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
           <MainSlide image={this.state.images[this.state.currentIndex]} />
        </div>

        <MainSlideLeftArrow goToPrevSlide={this.goToPrevSlide} />

        <MainSlideRightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default MainSlider;
