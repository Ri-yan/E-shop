import ReviewTile from '../ReviewTile/ReviewTile';
import review from './ReviewList.module.css';
import {useState} from "react";

const ReviewList=()=>{
    const [showactive,setshowActive] = useState(false);
    const handleshow=()=>setshowActive(!showactive);
    return(
        <div className={review.section}>
            <h1>Rating and Reviews</h1>
            <h2>Overall rating-★★★★</h2>
            <div className={review.write}>
                <label htmlFor="">Write Your Review</label>
                <div className={review.writeIn}>
                    <textarea  name="comment"></textarea>
                    <input type='button' name='submit' value='submit'/>
                </div>
            </div>
            
            <div className={showactive?review.list:review.listactive} >
                <ReviewTile/>
                <ReviewTile/>
                <ReviewTile/>
                <ReviewTile/>
         </div>
         <lable className={review.show} onClick={()=>handleshow()}>Show more</lable>
         </div>
    );
        
}
export default ReviewList;