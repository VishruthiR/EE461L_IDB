import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

class Homepage extends React.Component {
  render() {
    let items = [
      {
        title: "Books",
        link: "/results?type=book&query=",
        image: "https://cdn.shoplightspeed.com/shops/621012/files/15915280/books.jpg",
        content: "Explore Popular Books"
      },
      {
        title: "Authors",
        link: "/results?type=author&query=",
        image: "https://hccontent.s3.amazonaws.com/1/Blog/author-bios.jpg",
        content: "Explore Popular Authors"
      },
      {
        title: "Genres",
        link: "/results?type=genre&query=",
        image: "https://www.writersandartists.co.uk/assets/users/admin_1/admin_1-asset-502ba7d510930.jpg",
        content: "Explore Popular Genres"
      },
       {
        title: "About Us",
        link: "/About",
        image: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages-760x400.png",
        content: "About Us"
      }
    ];
    return (
      <Carousel animation="slide" autoplay={false}>
        {
          items.map(item => (
            <CarouselItem link={item.link} image={item.image} title={item.title} content={item.content}/>
          ))
        }
      </Carousel>
    );
  }
}

export default Homepage;
