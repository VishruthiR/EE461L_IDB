import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// setup file
import { shallow } from "enzyme";

describe("App Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders the Route components", () => {
    expect(wrapper.find("Route"));
  });
});
