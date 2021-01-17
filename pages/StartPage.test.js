import React from 'react';

import { render, screen } from '@testing-library/react'

import {StartPage} from './StartPage';

describe('StartPage', () => {
    it('should render the name of the project', () => {

        render(<StartPage/>)
        let welcomeMessage = screen.getByTestId("welcomeMessage")
        expect(welcomeMessage.textContent).toContain('Frontend-starter')
    })
})