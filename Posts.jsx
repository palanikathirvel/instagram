import React from 'react'

import { useEffect, useState } from 'react';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/posts').
            then((data) => data.json()).then((data => setPosts(data))).catch(err => console.log(err))
    }, []);
    return (
        <div>
            {
                posts.length > 0 ? (
                    <div>
                        {posts.map((post) => (
                            <div key={post.id}>
                                <div class="flex col gap-3 px-2">

                                    <div class="h-20 w-20 border flex rounded-full   overflow-hidden">
                                        <img src={post.user.profile} class="object-cover"></img>


                                    </div>
                                    <h5 class="text-black">{post.user.username}</h5>

                                </div>
                                <div>
                                    <img src={post.image}></img>
                                </div>
                                <div class="flex col gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>

                                </div>
                                <div>
                                    <b>{post.Like}Likes</b>
                                    <p>{post.caption}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                ) : (
                    <div>loading</div>
                )
            }
        </div>
    )
}

export default Posts