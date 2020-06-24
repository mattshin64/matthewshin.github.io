import React from 'react';
const paragraphstyle = {
    color: 'gray',
    paddingLeft: '100px',
    paddingRight: '100px',
}
function AboutMe(){
    return(
        <div id='container'>
            <h2 style={{paddingLeft: 100}}>About Me</h2>
            <p style={paragraphstyle}> <font size='4'> Hello I am an aspiring software engineer. </font></p>
        </div>
    )
}

export default AboutMe;