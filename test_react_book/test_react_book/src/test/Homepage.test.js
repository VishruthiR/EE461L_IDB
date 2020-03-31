import React from "react";
import { shallow , mount } from "enzyme";
import Homepage from "../components2/Homepage";

test("render Homepage component", () => {
	const wrapper = shallow(<Homepage />);
	console.log(wrapper.find('CardContent').debug());
	expect(wrapper.find('CardContent').text()).toContain('Books');
})