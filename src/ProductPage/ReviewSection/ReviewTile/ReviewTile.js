import {useState} from "react";
import review from './ReviewTile.module.css';
import Like from '../../../ICONS/InProductPage/Like.svg';
import Reply from '../../../ICONS/InProductPage/Reply.svg';
import { ReviewData as D } from './ReviewData';
const ReviewTile=()=>{
    const [showactive,setshowActive] = useState(false);
    const handleshow=()=>setshowActive(!showactive);
    return(
        <div className={review.Tile}>
           <div className={review.display}>
               <div className={review.Title}>
                   <div className={review.linear}>
                <img className={review.profile} src={D[0].pimg} alt="profile" />
                <div className={review.display2}>
                <div className={review.name}>{D[0].name}</div>
                    <div className={review.stars}>⭐⭐⭐⭐</div>
                    <div className={review.date}>{D[0].date}</div> 
                </div>        
                </div>            
            </div >
            <div className={review.re}>
                <div className={showactive?review.review:review.active}>
                {D[0].review} Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam adipisci, maiores qui delectus temporibus natus quis? Dolorem, quaerat! Totam suscipit aperiam asperiores repellendus, a ea error blanditiis aspernatur perspiciatis!
            </div>
                <lable className={review.show} onClick={()=>handleshow()}>show more</lable>
            </div>
            </div> 

            <div className={review.footer}>
                <div className={review.count}>{D[0].likes} <img src={Like} alt="fav"/></div>
                <div className={review.count}>{D[0].replies} <img src={Reply} alt="fav"/></div>
                
            </div>
        </div>
    );
}
export default ReviewTile;