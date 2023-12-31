import ecommerce from '../../portfolioImages/ecommerce.jpeg';
import RGCA from '../../portfolioImages/logo-rgca.jpg';
import DYORAI from '../../portfolioImages/logo.png';
import todoAdvance from '../../portfolioImages/todoAdvance.png';
import todoBasic from '../../portfolioImages/todoBasic.png';
import dataFetch from '../../portfolioImages/dataFetch.png'

const initialState = [
    {
        title:'RGCA',
       description:`Rajiv Gandhi Center for Aquaculture is the Research & Development arm of the Marine Products Export Development Authority (MPEDA)`,
        image:RGCA,
        link:'https://www.rgca-mis.brugu.io/login'
    }, {
        title:'DYORAI',
       description:`Do Your Own Research Artificial Intelligence is an AI-powered crypto research tool that provides comprehensive sentimental and fundamental analysis for any crypto coin. `,
        image:DYORAI,
        link:'https://www.dyoraitools-test.m-blocks.net/#sentimental'
    },
        {
            title:'e-commerce',
           description:`An e-commerce website is an online platform that enables businesses and individuals to buy and sell products and services over the internet.`,
            image:ecommerce,
            link:''
        },
        {
            title:'todo Advance',
           description:`Advance todo list with good features to use it. A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoAdvance,
            link:'https://6495286f5110e000078812a8--singular-arithmetic-c1d366.netlify.app/'
        },
        {
            title:'data fetch app',
           description:`app to fetch the data for api call. this app fetch the data from the api and display it on screen. its easy to fetch the data of any api by using this app`,
            image:dataFetch,
            link:'https://64995f4adf9c3f1e42a9445e--loquacious-valkyrie-dc1072.netlify.app/'
        },
        {
            title:'todo Basic',
           description:`A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoBasic,
            link:'https://649578707fd4e9000855f0ab--lucky-khapse-aad440.netlify.app/'
        },
        {
            title:'todo Advance',
           description:`Advance todo list with good features to use it. A todo list app is a digital tool designed to help individuals organize, manage, and track their tasks and responsibilities.`,
            image:todoAdvance,
            link:'https://6495286f5110e000078812a8--singular-arithmetic-c1d366.netlify.app/'
        }
    ]


function projects(state=initialState){
    return([...state])
}

export default projects;