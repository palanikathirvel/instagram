import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [showFollowers, setShowFollowers] = useState(false);
    const [unfollow,setunfollow]=useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
            .then(res => {
                setProfile(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3000/followers')
            .then(res => {
                setFollowers(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [unfollow]);

    function handleOnChange(e) {
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleProfile = async () => {
        axios.put("http://localhost:3000/profile", profile)
            .then(() => console.log("Updated"))
            .catch(err => console.log(err));
    };

    const handleShowFollowers = () => {
        setShowFollowers(!showFollowers); 
    };
    const unfollowed = async (id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`).then(alert("unfollowed")).then(setunfollow(!unfollow)).catch(err=>console.log(err))
    }

    return (
        <div>
            {profile ? (
                <div className="p-10 pl-5">
                    <div className="relative">
                        <div>
                            <img
                                className="w-[20%] h-[20%] border rounded-full p-5"
                                src={profile.profilepic}
                                alt="Profile"
                            />
                            <h5 className="text-3xl pl-6">{profile.username}</h5>
                        </div>
                        <div>
                            <button
                                className="mt-5 ml-2 border border-blue-800 p-2 rounded bg-blue-500 w-[15%] hover:bg-blue-800"
                                onClick={handleShowFollowers}
                            >
                                Followers
                            </button>
                        </div>
                    </div>

                    
                    {showFollowers && (
                        <div className="mt-4 p-4 border rounded bg-gray-100">
                            <h4 className="text-xl font-bold">Followers</h4>
                            {followers.length > 0 ? (
                                followers.map((follower, index) => (
                                    <div key={index} className=" flex gap-4 mt-2 p-2 border rounded">
                                        
                                        <img src={follower.profilepic} class="h-6 w-6 border rounded-full"></img>
                                        <h5 className="text-lg">{follower.username}</h5>
                                        <button class="bg-blue-500 p-1 rounded px-1 absolute right-[10%]" onClick={()=>{unfollowed(follower.id)}}>unfollow</button>
                                        
                                    </div>
                                ))
                            ) : (
                                <p>No followers</p>
                            )}
                        </div>
                    )}

                    <input
                        className="border border-blue-800 rounded p-3 w-[70%] mt-5"
                        name="username"
                        type="text"
                        value={profile.username}
                        onChange={handleOnChange}
                    />
                    <input
                        className="border border-blue-800 rounded p-3 w-[70%] mt-5"
                        name="profilepic"
                        type="text"
                        value={profile.profilepic}
                        onChange={handleOnChange}
                    />
                    <br />
                    <button
                        className="mt-5 ml-2 border border-blue-800 p-2 rounded bg-blue-500 w-[15%] hover:bg-blue-800"
                        onClick={handleProfile}
                    >
                        Update
                    </button>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Profile;
