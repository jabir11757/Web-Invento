import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import img_2 from '../images/img_2.jpg'
import { createPost, deletePost, updatePost } from './Posts'


const Card = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateBody, setUpdateBody] = useState("");


    const dispatch = useDispatch();
    const postList = useSelector((state) => state.posts.value)

    return (
        <div className=''>
            <div className='mt-16'>

                {/* Create post */}
                <section className="bg-gray-100 w-4/5 mx-auto">
                    <div className="my-6 px-4 py-12 sm:px-6 lg:px-8">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <h1 className='-mt-6 my-6 font-bold text-center text-green-600'>Create Post</h1>
                            <div >
                                <div>
                                    <label className="sr-only" htmlFor="title">Title</label>
                                    <input
                                        className="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Title"
                                        type="text"
                                        id="title"
                                        onChange={(event) => { setTitle(event.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div>
                                    <label className="sr-only" htmlFor="description">Description</label>
                                    <textarea
                                        className="w-full outline-slate-200 rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Description"
                                        type="text"
                                        id="description"
                                        onChange={(event) => { setBody(event.target.value) }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-start mt-2 ml-3">
                                <button onClick={() => dispatch(createPost({ id: 0, title, body }))}
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-green-600 hover:bg-green-500 px-3 py-1 font-medium text-white sm:w-auto"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* read delete & update post */}
            <section className="">
                {
                    postList?.map((post, index) =>
                        <div key={index} className="max-w-6xl px-6 py-10 mx-auto">
                            <div className="grid grid-cols-1">
                                <main className="relative z-20 mt-8 md:flex md:items-center xl:mt-12">
                                    <div className="absolute w-full outline-dotted -z-10 md:h-56 rounded-2xl"></div>
                                    <div className="w-full p-6 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-6">
                                        <img className="md:mx-6 rounded-full object-cover shadow-md md:h-[18rem] lg:h-[25rem] lg:w-[12rem] md:rounded-2xl" src={img_2} alt="" />
                                        <div className='w-full'>
                                            <div className="flex justify-between mt-2 md:mx-2">
                                                <div className="grid grid-cols-2 w-2/3">
                                                    <div className='text-start'>
                                                        <h1 className="my-2 font-semibold ">{post?.title}</h1>
                                                        <h1 className="my-2"><small>{post?.body}</small></h1>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col mt-2 mx-2'>
                                                            <label htmlFor="title"><small>Title</small></label>
                                                            <input className='border rounded-md outline-slate-300' onChange={(event) => { setUpdateTitle(event.target.value) }} />
                                                        </div>
                                                        <div className='flex flex-col mt-2 mx-2'>
                                                            <label htmlFor="body"><small>Description</small></label>
                                                            <textarea className='h-10 border rounded-md outline-slate-300' onChange={(event) => { setUpdateBody(event.target.value) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-1/3'>
                                                    <div className="flex justify-end items-start">
                                                        <button onClick={() => { dispatch(deletePost({ id: post.id })) }}
                                                            className="h-8 w-16 ml-10 mt-2 bg-red-400 hover:bg-red-500 text-white rounded-xl">Delete</button>
                                                    </div>
                                                    <div className='flex items-end justify-end mt-8'>
                                                        <button onClick={() => { dispatch(updatePost({ id: post.id, title: updateTitle, body: updateBody })) }}
                                                            className="h-8 w-16 -ml-24 bg-green-400 hover:bg-green-500 hover:outline-1 text-white rounded-xl">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    );
};

export default Card;