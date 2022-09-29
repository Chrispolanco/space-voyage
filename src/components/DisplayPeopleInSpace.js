import React from "react";

const DisplayPeopleInSpace = ({peopleInSpace}) => {

    if(!peopleInSpace){
        return <div>Retrieving List</div>
    }

    const renderedPeople = peopleInSpace.map((person, index) => {
        let fullName = person.name; 
        let lastName = fullName.split(" ")[1]; 

        return(
            <React.Fragment key = {person.name}>
                <div className= 'ui fluid card'>
                    <div className="image">
                        <img className="ui medium circular image" src={require(`./pictures/${lastName}.jpeg`)} alt={"Error"}/>
                    </div>
                    <div className="content">
                        <div className="header">
                            {person.name}
                        </div>
                        <div className="description">
                            Location: {person.craft}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }); 

    return(
        <div className="ui four doubling stackable cards">
            {renderedPeople}
        </div>
    )
}
  
export default DisplayPeopleInSpace;
