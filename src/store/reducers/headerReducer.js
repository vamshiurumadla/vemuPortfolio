const initialState = {
        megaMenu : ['about', 'skills', 'projects', 'contact'],
        name:'Venkatesh Muddangula',
        summary:`I am Venkatesh Muddangula, 3 years of  total working experience and 1.5 Years in front-end UI/web development, strong technical skills in website development including web-based applications.
        Hands- on experience in developing web applications.
        Experience in implementing with client-side technologies React JS, Redux, JavaScript, Bootstrap, HTML5, CSS3.
        Experience in React JS and worked with React-redux.
        Experience in using React JS components, Forms, Events, Router, Redux.
        Experience in working on Integrated Development Environment like Visual Studio Code and StackBlitz
        Experience in using version control systems like Git Repository.
        Passionate to learn and adapt quickly to the emerging new technologies.`
}

function header(state=initialState){
 return ({...state})
}

export default header;