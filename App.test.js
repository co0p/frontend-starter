import React from 'react';

import { render, screen } from '@testing-library/react'

import {App} from './App';

describe('App', () => {
    it('should render the name of the project', () => {

        render(<App/>)
        let welcomeMessage = screen.getByTestId("projectName")
        expect(welcomeMessage.textContent).toContain('Frontend-starter')
    })
})