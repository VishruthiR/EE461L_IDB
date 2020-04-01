import React from "react";
import { shallow , mount } from "enzyme";
import Sidebar from "../components/Sidebar";

test("render Sidebar component", () => {
	const wrapper = shallow(<Sidebar />);

	expect(wrapper.state('value')).not.toBeNull();
})