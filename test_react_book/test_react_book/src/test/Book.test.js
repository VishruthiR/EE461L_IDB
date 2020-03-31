import React from "react";
import { shallow, mount } from "enzyme";
import Book from "../components2/Book";

test("render Book component", () => {
  const componentDidMountSpy = spyOn(Book.prototype, "componentDidMount");

  const wrapper = shallow(<Book />);

  // ensure method was called
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

  //expect(wrapper.state('bookISBN')).not.toBeNull();  // currently null since bookISBN gets set by window.location.search
  expect(wrapper.state("bookTitle")).not.toBe("");
  expect(wrapper.state("bookCover")).not.toBe("");
  expect(wrapper.state("authorName")).not.toBe("");
  expect(wrapper.state("bookSummary")).not.toBe("");
  expect(wrapper.state("bookRecommendations")).not.toBe([]);
});
