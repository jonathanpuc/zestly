import * as React from "react"
import Slider from "react-slick"
import styled from "styled-components"

interface ISliderProps {
  settings?: any
}

export default class SliderWrapper extends React.PureComponent<ISliderProps, {}> {

  public render() {
    const settings = this.props.settings ? this.props.settings : {
      infinite: false,
      slidesToShow: 2.5,
      initialSlide: 0,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 460,
          settings: {
            infinite: false,
            slidesToShow: 1.5,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 650,
          settings: {
            infinite: false,
            slidesToShow: 2,
            initialSlide: 0,
          }
        }
      ]
    }
    settings.arrows = false


    return (
      <Styles>
        <Slider {...settings}>{this.props.children}</Slider>
      </Styles>
    )
  }
}

const Styles = styled.div`

  .slick-list {
    padding: 10px 0;
  }
  
  /* react-slick module css puts img as block, affecting img inside cards being rendered, change it */
  .slick-slide img {
    display: inline-block;
  }
`
