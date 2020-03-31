import React from "react";
import { shallow , mount } from "enzyme";
import Result from "../components2/Result";

test("render Result component", () => {
	const wrapper = shallow(<Result description="test" title="title" author="author" />);

	const compInst = wrapper.instance();

	expect(compInst.props.description).toEqual('test');
	expect(compInst.props.title).toEqual('title');
	expect(compInst.props.author).toEqual('author');
})