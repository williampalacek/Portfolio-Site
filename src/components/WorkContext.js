import React, { useState, createContext, useContext } from 'react';

const WorkContext = createContext();

export const useWorkContext = () => useContext(WorkContext);

export function WorkProvider({ children }) {
    /**
     * Array of job objects representing work experience.
     * @type {Array<Object>}
     */
    const jobs = [
        {
            title: 'Design Verification Engineer',
            company: 'AMD',
            period: '2023 / 2024',
            description: 'Developed and maintained internal web applications and automated testbench processes. Managed test pipelines for experimental CPU designs, ensuring a smooth software development lifecycle.',
            skills: 'Python  Perl  Jenkins  PHP  Verilog'
        },
        {
            title: 'Lead Software Developer',
            company: 'QVCL',
            period: '2022 / 2023',
            description: 'Designed and developed virtual reality experiments and systems for the Queen\'s Visual Cognition Laboratory, contributing to research on visual search and cognitive science',
            skills: 'Unity  C#/C  Python  JavaScript  React.js  Node.js'
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}