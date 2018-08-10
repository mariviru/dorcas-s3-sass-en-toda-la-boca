import React, { Component } from 'react';
import CardForm from './CardForm';
import Preview from './Preview';

class Main extends Component {
    render () {
        const {
            data,
            skills,
            actionToPerform,
            chargeImage,
            inputImage,
            addSkills,
            divSkills,
            classMinus,
            classPlus
        } = this.props;
        //console.log('this main', actionToPerform)
        console.log('this.stateeeeee2',this.props);
        return(
            <div className="main__target">
                <Preview data={data}/>
                <CardForm 
                    classPlus = {classPlus}
                    classMinus={classMinus}
                    divSkills={divSkills}
                    addSkills={addSkills}
                    skills={skills}
                    data={data} 
                    actionToPerform = {actionToPerform} 
                    chargeImage = {chargeImage}
                    inputImage = {inputImage} 
                />
            </div>
        )
    }
}

export default Main;