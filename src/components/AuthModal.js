import Button from "./Button";
import Input from "./Input";
import { useState } from 'react'

function AuthModal () {
    const [modalType,setModalType] = useState( 'loggin' );
    return(
        <div className="w-screen h-screen fixed top-0 left-0 z-20 flex" style={{backgroundColor:'rgba(0,0,0,.6)'}}>
            <div className="border border-reddit_dark-brightest w-3/4 sm:w-1/2 md:w-1/4 bg-reddit_dark p-5 text-reddit_text self-center mx-auto align-middle rounded-md">
                {modalType === 'loggin' && (
                    <h1 className="text-2xl mb-5">Log In</h1>
                )}
                {modalType === 'register' && (
                    <h1 className="text-2xl mb-5">Register</h1>
                )}                
                <label>
                    <span className="text-reddit_text-darker text-sm">Username:</span>
                        <Input type="text" className="mb-3 w-full" />                    
                </label>
                <label>
                    <span className="text-reddit_text-darker text-sm">Password:</span>
                        <Input type="password" className="mb-3 w-full" />
                </label>
                <Button className="py-2 text-reddit_text-darker w-full" style={{borderRadius:'.3rem'}}>Log In</Button>
                {modalType === 'login' && (
                    <div className="px-3">
                    New to Reddit?<button onClick={() => setModalType('register')}> SIGN UP </button>
                </div>
                )}
                {modalType === 'register' && (
                    <div className="px-3">
                    Already have an account?<button onClick={() => setModalType('login')}> LOG IN </button>
                </div>
                )}
                
            </div>
        </div>
    );
}

export default AuthModal