import { useState, useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
//use state while getting data as it always returns an array

  const [isLoading, setIsLoading] = useState(true);

  ///usestate now to collect my data
  const [loadeddata, setLoadeddata] = useState([]);
  
//use-effect allows us to use the code for cirtain conditions,
// therefore will use it to tell when fetch  should run only 
//we do this by setting setIsLoading(true); as it will be changed to false later.
  
useEffect(() => {
                  setIsLoading(true);

                        //get data from firefox which is our database
                        fetch('https://know-lesotho-default-rtdb.firebaseio.com/lesotho.json'
                        ).then(response => {

                        return  response.json();

                        }).then(data =>{

                          //we used arrays therefore we need to get data as arrays from firefox inorder to use it.

                          const ourdata = [];
                          //keys or names genareted in our firefox folder in database
                          for (const Key in data){
                                                   const mydata ={
                                                     
                                                    id: Key,
                                                    ...data[Key]

                                                   };                     
                                                      
                                                    ourdata.push(mydata);

                                                 }

                          setIsLoading(false);
                          setLoadeddata(ourdata);

                        });
                  
                     
                },   []);


   
     //use if statement to check if we are loading and if YES inform Client by <P>
     
     if(isLoading){

      return(

               <section> <p>Loading Please Wait a sec..</p> </section>

           );

     }



    return ( <section>
             <h1> All Meetups   </h1>    
                     
                <MeetupList meetups={loadeddata} />

            </section>


    );
  }
  
  export default AllMeetupsPage;
  