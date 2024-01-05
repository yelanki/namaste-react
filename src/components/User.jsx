import { useState } from "react";

const User=()=>{
   const [count]=useState(0);
   const [count2]=useState(1);
    return(
        <div className="user-card">
            <h2>Count:{count}</h2>
            <h2>Name:Prasshantth</h2>
            <h2>Location:Chennai</h2>
            <h2>Contact:@Prasshantth</h2>
        </div>
    )
};
export default User;