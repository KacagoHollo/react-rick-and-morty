// import React from 'react';
// import { render } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//     const { getElementsByClassName } = render(<App />);
//     const linkElement = getElementsByClassName(".content");
//     expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow, mount, configure } from "enzyme";
import App from "../App";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let container;

describe('Test render', () => {
    test('On page load deep component renders', () => {
        container = mount((<App />))

        expect(container.find('.description').length).toEqual(1);
    })
})
