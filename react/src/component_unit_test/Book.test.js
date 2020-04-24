import React from "react";
import { shallow, mount } from "enzyme";
import Book from "../components/Book";

test("render Book component", () => {
  const componentDidMountSpy = spyOn(Book.prototype, "componentDidMount");

  const wrapper = shallow(<Book />);

  // ensure method was called
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

  //expect(wrapper.state('bookISBN')).not.toBeNull();  // currently null since bookISBN gets set by window.location.search
  expect(wrapper.state("bookTitle")).not.toBeNull();
  expect(wrapper.state("bookCover")).not.toBeNull();
  expect(wrapper.state("authorName")).not.toBeNull();
  expect(wrapper.state("bookSummary")).not.toBeNull();
  expect(wrapper.state("bookRecommendations")).not.toBeNull();
});
