import React from "react";
import BookRecommendations from "./BookRecommendations";
import AuthorRecommendations from "./AuthorRecommendations";

class RecommendationCarousel extends React.Component{

    render() {
        switch (this.props.type) {
            case "Author":
                return (
                    <AuthorRecommendations
                        recommendations={this.props.recommendations}
                        typeOfRecommendation={"Recommended Authors"}
                        type={"Author"} />
                );
            case "Book":
                return (
                    <BookRecommendations
                        recommendations={this.props.recommendations}
                        typeOfRecommendation={"Books by this author"}
                        type={"Book"} />
                );
        }
    }
}

export default RecommendationCarousel;