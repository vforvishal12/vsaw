import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';

const MyNewsCard = ({articles}) => {


    return (
        <div>

            {articles.map((article, index) => (
                

 
            <Card  style={{ width: '95%' }}>
            	
			   	<Card.Img variant="top" src={article.image} />
				
			   	
			    <Card.Body>
			      
			      	<Card.Title><span class="label label-primary"> {article.name} </span>
			      </Card.Title>
			     
			     <Card.Text> <span class="label label-warning">Hogwart Details :</span>  House - {article.house}  |  Ancestry - {article.ancestry}  |  Patronus - {article.patronus} 
			      </Card.Text>

			       
			       <Card.Text><span class="label label-success">Actor :</span>  {article.actor}   
			      </Card.Text>
			      <Card.Text><span class="label label-danger">About :</span> {article.species}  |  {article.gender}  |  {article.dateOfBirth}  |  EyeColor - {article.eyeColour} |  HairColor - {article.hairColour} 
			       </Card.Text>

			    </Card.Body>	
		  </Card>
				

            ))} 
             

        </div>
    )
};

export default MyNewsCard;




