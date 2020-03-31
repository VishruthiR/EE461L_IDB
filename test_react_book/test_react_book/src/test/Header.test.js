import React from "react";
import { shallow , mount } from "enzyme";
import Header from "../components2/Header";

test("render Header component", () => {
	const wrapper = shallow(<Header title="title" author="author" />);
	const compInst = wrapper.instance();

	expect(compInst.props.title).toEqual('title');
	expect(compInst.props.author).toEqual('author');
})