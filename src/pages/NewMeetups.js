import { useHistory } from 'react-router-dom';
import MeetupForm from "../components/meetups/MeetupForm";


function NewMeetupPage() {

 const history = useHistory();

  function addMeetupHandler(meetupData){

     fetch(
       'https://know-lesotho-default-rtdb.firebaseio.com/lesotho.json',
       {
         method: 'POST',
         body: JSON.stringify(meetupData),
              headers:{
                         'Content-Type': 'application/json'
             }
       }
       
       ).then(() =>{
           
                    history.replace('/');

                   });      

     }


    return ( <section>

                      <h1>Add New Meetup</h1>

                      <MeetupForm onAddMeetup={addMeetupHandler}/>

            </section>
    );
  }
  
  export default NewMeetupPage;
  