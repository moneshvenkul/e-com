import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from "./home"

describe('home component',()=>{
    it('renders home',()=>{
        const {getByTestId}=render(<Home/>)
    const homeElement = getByTestId('home').textContent;
    expect(homeElement).toEqual("NEW SEASON ARRIVALS")
    })
})