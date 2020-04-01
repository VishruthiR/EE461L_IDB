import React from "react";
import { shallow, mount } from "enzyme";
import Author from "../components2/Author";

test("render Author component", () => {
  const componentDidMountSpy = spyOn(Author.prototype, "componentDidMount");

  const wrapper = shallow(<Author />);

  // ensure method was called
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

  //expect(wrapper.state('authorName')).not.toBeNull();  // currently null since authorName gets set by window.location.search
  expect(wrapper.state("authorPicture")).not.toBeNull();
  expect(wrapper.state("authorBio")).not.toBeNull();
  expect(wrapper.state("bookRecommendations")).not.toBeNull();
});
