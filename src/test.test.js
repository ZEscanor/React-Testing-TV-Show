import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {female as mockFetchShow} from "./api/fetchshow.js";
import {MockData} from "./MockData.js"
import Dropdown from "react-dropdown";
import App from "./App";
import userEvent from '@testing-library/user-event';

jest.mock("./api/fetchshow.js")
it('renders App without crashing',async () => {
    mockFetchShow.mockResolvedValueOnce(MockData);
    render( <App/>);
  })
  // test our api that our episodes can render, episodes only renders if we click the dropdown  
  test('doIt', async()=>{
    mockFetchShow.mockResolvedValueOnce(MockData);
     render(<App/>);
    const dropdown = await screen.findByText(/Select a season/i);
     expect(dropdown).toBeInTheDocument()
     userEvent.click(dropdown)
     const season = await screen.findByText(/season 1/i);
     userEvent.click(season)
     screen.debug()
    const dropIt =screen.queryAllByTestId("drop")
    });
    // test("keep testing",()=>{
    // //const mockData = jest.fn();
    // // render{<component data={mockdata}/>
    //  //fireEvent.click(button)
    //  //expect(mockData.mock.calls.toBe(1))
    // });

   // mockData.mockResolve

