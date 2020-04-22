import React from "react";
import { shallow , mount } from "enzyme";
import Recommendations from "../components/Recommendations";

test("render Recommendations component", () => {
	const wrapper = shallow(<Recommendations recommendations={1} typeOfRecommendation="test" />);

	const compInst = wrapper.instance();

	expect(compInst.props.recommendations).toBe(1);
	expect(compInst.props.typeOfRecommendation).toBe('test');
})