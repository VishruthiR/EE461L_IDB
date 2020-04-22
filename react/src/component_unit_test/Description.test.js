import React from "react";
import { shallow , mount } from "enzyme";
import Description from "../components/Description";

test("render Description component", () => {
	const wrapper = shallow(<Description image="" description="test" />);
	const compInst = wrapper.instance();

	expect(compInst.props.image).toEqual('');
	expect(compInst.props.description).toEqual('test');
})