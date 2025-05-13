import { useNavigate } from "react-router-dom"


export function MainPage(){

    const navigate = useNavigate();


    function signUp(){
        navigate('/signUp');
    }

    function login(){
        navigate('/login');
    }


    return(
        <div className="mainPage">
            <header>
                <nav>
                    <button className="navBtn" onClick={signUp}>Sign up</button>
                    <button className="navBtn" onClick={login}>Login</button>
                </nav>
            </header>
        </div>
    )

}