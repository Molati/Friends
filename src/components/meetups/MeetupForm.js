import Card from "../ui/Card";
import classes from './MeetupForm.module.css';
import { useRef } from 'react';



function MeetupForm(props){

           //reference object
            const titleInputRef = useRef();
            const imageInputRef = useRef();
            const addressInputRef = useRef();
            const descriptionInputRef = useRef();

      function submitHandler(event){

      //in react we want to prevent the page from loading      
      event.preventDefault();


     const enteredTitle = titleInputRef.current.value; 
     const enteredImage = imageInputRef.current.value;
     const enteredAddress = addressInputRef.current.value;
     const enteredDescription = descriptionInputRef.current.value;
     
     //below is the object of our data keys
     
     
     const meetupData = {
           
      Image: enteredImage,
      title: enteredTitle,      
      address: enteredAddress,
      description: enteredDescription,

         };

      //how  data to be send to the server => console.log(meetupData); 

      //now to firebase as our database

      props.onAddMeetup(meetupData);
      
      
      }


return(

      <Card>
             <form className={classes.form}  onSubmit={submitHandler}>

                <div className={classes.control}>

                            <label htmlFor="title">Meetup title</label>
                            <input type="text" required id="title"  ref={titleInputRef} />

               </div>


               <div className={classes.control}>

                            <label htmlFor="imgage">Meetup Image (url image Link)</label>
                            <input type="url" required id="image"  ref={imageInputRef}/>

                            </div>

          


             <div className={classes.control}>

                            <label htmlFor="address">Meetup address</label>
                            <input type="text" required id="address" ref={addressInputRef}/>

                            </div>


            <div className={classes.control}>

                                    <label htmlFor="description">Description</label>
                                    <textarea  id="description" required rows='5' ref={descriptionInputRef}/>


                                    </div>


            <div className={classes.actions}>
                
                   <button> Add Meetup </button>
                
            </div>                        


      </form>
      </Card>



);

}
export default MeetupForm;
























