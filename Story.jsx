import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Story = () => {
    const [stories, setStory] = useState([]);
    const navigate = useNavigate();
    let total = 0;
    useEffect(() => {
        fetch('http://localhost:3000/stories')
            .then((res) => res.json())
            .then((data) => setStory(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="p-10 bg-blue-200 border rounded">
            <div class="hidden">{total = stories.length}</div>
            {stories.length > 0 ? (
                <div className="flex gap-5 overflow-x-auto p-4 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}">
                    {stories.map((story) => (
                        <div key={story.id} className="flex flex-col items-center" onClick={() => { navigate(`/stories/${story.id}/${total}`) }}>
                            <img
                                className="w-12 h-12 rounded-full border-2 border-pink-500 p-1"
                                src={story.user.profile}
                                alt="User profile"
                            />
                            <h2 className="text-[13px] text-center mt-1 font-bold">{story.user.username}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default Story;
