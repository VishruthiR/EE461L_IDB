import React from "react";
import { shallow , mount } from "enzyme";
import ResultsP from "../components/ResultsP";

test("render Results component", () => {

	const componentDidMountSpy = spyOn(ResultsP.prototype, 
							'componentDidMount');

	const wrapper = shallow(<ResultsP />);

	// ensure method was called 
	expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

	expect(wrapper.state('resultsQuery')).not.toBeNull();
	expect(wrapper.state('pager')).not.toBeNull();
	expect(wrapper.state('numPages')).not.toBeNull();
	expect(wrapper.state('reloadResults')).not.toBeNull();
	expect(wrapper.state('results')).not.toBeNull();
})
