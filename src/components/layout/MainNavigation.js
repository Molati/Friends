import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){

    //not useful at the moment
    const favoritesNumber = 0;


    return ( <header className={classes.header}>
     <div className={classes.logo}> Friends Meet-ups</div> 

          <nav>

                <ul>
                    
                    <li> <Link to='/'>All Meet-ups</Link> </li>
                    <li> <Link to='/new-meetup'>Add New Meet-up</Link> </li>
                    <li> <Link to='/favorites'>
                        
                        My Favorites</Link> 
                        <span className={classes.badge}> {favoritesNumber}  </span>

                   </li>
                   

                </ul>

          </nav>

    </header>
); 

}
export default MainNavigation;







