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
    ]
});