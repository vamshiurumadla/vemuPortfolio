const initialState = {
    frontend: [
        {
            name: 'React',
            percentage: '80'
        },{
            name: 'HTML5',
            percentage: '80'
        },
        {
            name: 'CSS3',
            percentage: '80'
        },
        {
            name: 'Javascript',
            percentage: '85'
        },
     
        {
            name: 'jQuery',
            percentage: '70'
        },
        {
            name: 'Bootstrap',
            percentage: '70'
        },
    ],

}

function names( state=initialState){
    return ({...state})
}

export default names;