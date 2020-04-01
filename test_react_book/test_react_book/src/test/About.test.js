import React from "react";
import { shallow, mount } from "enzyme";
import About from "../components/About";

test("render 'About' component", () => {
  const componentDidMountSpy = spyOn(About.prototype, "componentDidMount");

  const wrapper = shallow(<About />);

  // ensure method was called
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

  expect(wrapper.state("totalC")).not.toBeNull();
  expect(wrapper.state("kumoC")).not.toBeNull();
  expect(wrapper.state("davidC")).not.toBeNull();
  expect(wrapper.state("matthewC")).not.toBeNull();
  expect(wrapper.state("vishC")).not.toBeNull();
  expect(wrapper.state("sidC")).not.toBeNull();
  expect(wrapper.state("jainoC")).not.toBeNull();
  expect(wrapper.state("totalI")).not.toBeNull();
  expect(wrapper.state("kumoI")).not.toBeNull();
  expect(wrapper.state("davidI")).not.toBeNull();
  expect(wrapper.state("matthewI")).not.toBeNull();
  expect(wrapper.state("vishI")).not.toBeNull();
  expect(wrapper.state("sidI")).not.toBeNull();
  expect(wrapper.state("jainoI")).not.toBeNull();
});
