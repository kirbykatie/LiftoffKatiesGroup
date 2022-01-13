import React from 'react';

//pass in books from bookshelf
function BookForm(books) {
    return (
        <Form>
            <input></input>
            import React,{useState, useContext, Fragment} from "react";
import classes from "./NewVacationForm.module.css";
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";

const isEmpty = value => value.trim() === '';

const NewVacationForm = () => {
    const history = useHistory();
    
    const [destination, setEnteredDestination] = useState('');

    const [outdoorsActivity, setOutdoors] = useState('');

    const [toursActivity, setTours] = useState('');

    const [foodActivity, setFood] = useState('');

    const {addVacation} = useContext(GlobalContext);

    const validDestination = !isEmpty(destination);
    const validOutdoorsActivity = !isEmpty(outdoorsActivity);
    const validToursActivity = !isEmpty(toursActivity)
    const validFoodActivity = !isEmpty(foodActivity)

    const [touchDestination, setTouchDestination] = useState (false);
    const [touchOutdoorsActivity, setTouchOutdoorsActivity] =useState(false);
    const [touchToursActivity, setTouchToursActivity] = useState (false);
    const [touchFoodActivity, setTouchedFoodActivity] = useState (false);


                                const clickHandler = (event) => {
                                        event.preventDefault();
                                        setTouchDestination(true);
                                        setTouchOutdoorsActivity(true);
                                        setTouchToursActivity(true);
                                        setTouchedFoodActivity(true);

                                        const newVacations = {
                                            id : destination,
                                            destination,
                                            outdoorsActivity, toursActivity, 
                                            foodActivity
                                        }
                                            console.log(newVacations)
                                            if (validDestination && validOutdoorsActivity && validToursActivity && validFoodActivity){

                                    
                                            addVacation(newVacations)
                                            history.push("/vacationItem")
                                        
                                            setEnteredDestination('');
                                            setOutdoors('');
                                            setTours('');
                                            setFood('');
                                      
                                    } else {
                                        return
                                    }

                                }

                                    

                const destinationControlClasses = validDestination  ? classes.invalid : classes.control;

                const outdoorsControlClasses = `${classes.control} ${!validOutdoorsActivity ?`` : classes.invalid}`
                           
                const tourControlClasses = `${classes.control} ${!validToursActivity  ?`` : classes.invalid}`

                const foodControlClasses = `${classes.control} ${!validFoodActivity  ?`` : classes.invalid}`
             
            return (
                <Fragment>
            <div className={classes.backgroundImage}>
                    <div className={destinationControlClasses}>
                <label>DESTINATION</label>
                    <input 
                     value={destination}
                    type="text"
                    placeholder='See something new'
                     onChange={(e) => setEnteredDestination(e.target.value)}
                    />  
                     {!validDestination && touchDestination && <p className={classes.notValid}> Enter a destination</p>}
                    </div>
                    
                    <div className={outdoorsControlClasses}>
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    value={outdoorsActivity}
                    onChange={(e)=> setOutdoors(e.target.value)}
                    placeholder='Enjoy the outdoors'
                   />
                   {!validOutdoorsActivity && touchOutdoorsActivity && <p className={classes.notValid}>Pick an outdoor activity</p>}
                   </div>
                   

                   <div className={tourControlClasses}>
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    value={toursActivity}
                    placeholder='Explore new territory'               
                    onChange={(e) => setTours(e.target.value)}
                   />
                    {!validToursActivity  && touchToursActivity && <p className={classes.notValid}>Explore the destination, take a tour</p>}  
                   </div>
                   
                   <div className={foodControlClasses}>
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    value={foodActivity}   
                    placeholder='Eat something different'                 
                    onChange={(e) => setFood(e.target.value)}
                   />
                   {!validFoodActivity && touchFoodActivity && <p className={classes.notValid}>Try a native dish, add a food activity: </p>} 
               </div>
               
                {/* ={()=>props.onSaveVacation(props.vacationListHandler)}
         */}
        
                <div>
                    <button type="submit" onClick={clickHandler}> ADD TO PLANNER </button>
                </div>
    
        </div>
        </Fragment>
            )
        
        };


export default NewVacationForm;
        </Form>
    )
}

export default BookForm
