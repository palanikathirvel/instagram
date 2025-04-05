import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const Viewstory = () => {
    const { id, total } = useParams();
    const navigate = useNavigate();
    const [stories, setStory] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/stories/${id}`)
            .then((res) => res.json())
            .then((data) => setStory(data))
            .catch((err) => console.log(err));
    }, [id]);

    if (Number(id) > Number(total) || Number(id) <= 0) {
        navigate("/");
        return null; // Prevent rendering invalid content
    }

    return (
        <div>
            {stories ? (
                <div className="pt-5 text-3xl">
                    <center>{stories.user.username}</center>
                    <div className="relative flex justify-center items-center h-screen">
                        {Number(id) > 1 && (
                            <Link to={`/stories/${Number(id) - 1}/${total}`}>
                                <svg
                                    className="w-12 h-12 text-gray-700 hover:text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        )}

                        <img
                            className="w-[45%] ml-[0%] mt-[5%] flex items-center justify-center h-screen"
                            src={stories.image}
                            alt="story"
                        />

                        {Number(id) < Number(total) && (
                            <Link to={`/stories/${Number(id) + 1}/${total}`}>
                                <svg
                                    className="w-12 h-12 text-gray-700 hover:text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Viewstory;
