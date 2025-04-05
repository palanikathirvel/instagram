import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Suggestion = () => {
    const [profile, setprofile] = useState(null);
    const [suggestions, setsuggest] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/profile').then(data => data.json()).then(data => setprofile(data)).catch(err => console.log(err))
        fetch('http://localhost:3000/suggestions').then(data => data.json()).then(data => setsuggest(data)).catch(err => console.log(err))
    }, [])
    const followadd=async (id,username,profilepic) =>{
        axios.post("http://localhost:3000/followers",{"id":id,"username":username,"profilepic":profilepic}).then(alert("follow added")).catch(err=>console.log(err))
    }
    return (
        <div>{
            profile ?
                <div class="flex col gap-4 lg:flex col lg:gap-10 lg:ml-8">
                    <img class="w-7 h-7 border rounded-full lg:w-10 lg:h-10" src={profile.profilepic}></img>

                    <h5 class="lg:text-2xl">{profile.username}</h5>
                    <p class="justify-right text-blue-500 font-bold lg:text-2xl">switch</p>
                </div>



                : <p>Loading</p>
        }
            <div class="flex col gap-4 pt-5 lg:ml-8 lg:gap-8">
                <p class="font-bold text-[80%] lg:text-xl">suggested for you</p>
                <p class="font-bold text-[80%] lg:text-xl">see all</p>
            </div>
            <div>
                {
                    suggestions.length > 0 ? (
                        <div>
                            {suggestions.map((suggest) => (

                                <div id={suggest.id}>
                                    <div class="flex col gap-3 pt-5 lg:ml-10 lg:gap-5">
                                        <img class="w-10 h-8 border rounded-full" src={suggest.profilepic}></img>
                                        <h5>{suggest.username}</h5>
                                        <button class="bg-blue-300 p-1 border rounded ml-4 hover:bg-blue-500" onClick={()=>followadd(suggest.id,suggest.username,suggest.profilepic)}>follow</button>
                                    </div>
                                </div>

                            ))}
                        </div>
                    ) : (<p>loading</p>)
                }
            </div>

        </div>



    )
}

export default Suggestion