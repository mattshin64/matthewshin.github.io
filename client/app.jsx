import React from 'react';
import Header from './components/header.jsx'
import AboutMe from './components/aboutme.jsx'
import MyExperience from './components/myexperience.jsx'
import MySkills from './components/myskills.jsx'
class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header></Header>
                <AboutMe></AboutMe>
                <MyExperience></MyExperience>
                <MySkills></MySkills>
            </div>
        )
    }
}

export default App;