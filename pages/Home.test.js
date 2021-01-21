import React from 'react';

import { render, screen } from '@testing-library/react'

import {Home} from './Home';

describe('StartPage', () => {
    it('should render the name of the project', () => {

        render(<Home/>)
        let welcomeMessage = screen.getByTestId("welcomeMessage")
        expect(welcomeMessage.textContent).toContain('Frontend-starter')
    })
})