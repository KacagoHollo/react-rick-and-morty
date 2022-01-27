import React from "react";
import { shallow, configure } from "enzyme";
import Location from "../components/Location";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let container;

describe('Test Location component', () => {
    test('Test if click happens on a div, the infos show up', () => {
        container = shallow((<Location
            key="item.id"
            name="item.name"
            type="item.type"
            dimension="item.dimension"
            created="item.created"
        />))

        container.find('.locCard').simulate('click');
        expect(container.find('.locVisible').length).toEqual(1);
    })
})
