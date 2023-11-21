import { reactive } from 'vue';

export const store = reactive({
    navBar: [
        {
            navItem: 'HOME',
            active: true
        },
        {
            navItem: 'ABOUT',
            active: false
        },
        {
            navItem: 'PROJECTS',
            active: false
        },
        {
            navItem: 'SERVICES',
            active: false
        },
        {
            navItem: 'BLOG',
            active: false
        },
        {
            navItem: 'CONTACT',
            active: false
        }
    ],
    consultants: [
        {
            title: 'STATISTICAL CONSULTING',
            text: 'Our statistical consulting team can provide the statistics you need to answer your research questions, with customized statistical consulting and analysis'
        },
        {
            title: 'DIGITAL CONSULTING',
            text: 'Our digital consulting team can help you deliver purpose-built application modernization that simplifies technology management and reduces costs by embedding and operationalizing emerging technologies into your core business processes and platform strategies.'
        },
        {
            title: 'BANKING CONSULTING',
            text: 'Our financial services consulting teams offer strategic thinking, transformative expertise, and technical know-how. We draw on deep financial sector relationships and inter-disciplinary knowledge across multiple industries, capturing best practices that cut across global markets.'
        },
        {
            title: 'ENTERPRISE CONSULTING',
            text: 'Our enterprise consulting teams assisting companies in their growth by proposing optimized business strategies and or processes specialized to the needs of the organization at hand. Successful consulting allows organizations to run like a well-oiled machine by highlighting and improving any previously unnoticed organizational shortcomings or risks.'
        }
    ],
    projects: [
        {
            image: '/images/DRY-1-790x592.jpg',
            content: 'Dry Project'
        },
        {
            image: '/images/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg',
            content: 'Sponsorship Proposal'
        },
        {
            image: '/images/z1el4c4p-790x592.jpg',
            content: 'Vizeon Project'
        }
    ]
});