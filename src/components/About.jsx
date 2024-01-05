import User from "./User";
import UserClass from "./UserClass";
export const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React web series</h2>
            <UserClass name={'Prasshantth'} location={'Chennai'}/>
            <User/>
        </div>
    );
}