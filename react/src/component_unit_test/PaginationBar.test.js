import React from "react";
import { shallow , mount } from "enzyme";
import PaginationBar from "../components/PaginationBar";

test("render PaginationBar component", () => {
	const wrapper = shallow(<PaginationBar currentPage={99} numPages={99} updatePage={99} />);

	const compInst = wrapper.instance();

	expect(compInst.props.currentPage).toEqual(99);
	expect(compInst.props.numPages).toEqual(99);
	expect(compInst.props.updatePage).toEqual(99);	
})