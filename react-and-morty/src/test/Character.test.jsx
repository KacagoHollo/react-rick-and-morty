import React from "react";
import { shallow, configure } from "enzyme";
import Character from "../components/Character";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

let container;

describe('Test Character component', () => {
    test('Test if click happens on a div, the infos show up', () => {
        container = shallow((<Character
            key="item.id"
            image="item.image"
            name="item.name"
            species="item.species"
            gender="item.gender"
            origin="item.origin.name"
            location="item.location.name"
            status="item.status"
        />))

        container.find('.miniCards').simulate('click');
        expect(container.find('.detailedCards').length).toEqual(1);
    })
})
