import React from "react";
import { shallow , mount } from "enzyme";
import Genre from "../components/Genre";

test("render Genre component", () => {
	const componentDidMountSpy = spyOn(Genre.prototype, 
							'componentDidMount');
							
	const wrapper = shallow(<Genre />);

	// ensure method was called 
	expect(componentDidMountSpy).toHaveBeenCalledTimes(1);

	//expect(wrapper.state('genreName')).not.toBeNull();  // currently null since authorName gets set by window.location.search
	expect(wrapper.state('genrePicture')).not.toBeNull();
	expect(wrapper.state('genreDescription')).not.toBeNull();
	expect(wrapper.state('bookRecommendations')).not.toBeNull();
})