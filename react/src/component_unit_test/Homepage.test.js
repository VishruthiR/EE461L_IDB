import React from "react";
import { shallow , mount } from "enzyme";
import Homepage from "../components/Homepage";
import Typography from "@material-ui/core/Typography";


test("render Homepage component", () => {
	const wrapper = shallow(<Homepage />);
	expect(wrapper.find('Typography'));
})