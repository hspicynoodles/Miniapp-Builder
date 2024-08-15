import { BlockModel, ComposerComponentProps, FeedComponentProps } from './types';
import React, { useState } from 'react';

export const MochiFeedComponent = ({ model }: FeedComponentProps) => {
  return <h1>Hi, I'm in the feed!</h1>;
}

export const MochiComposerComponent = ({ model, done }: ComposerComponentProps) => {
  const [title, setTitle] = useState('');
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState('');

const checkInMochi = () =>{
  let checkIn = 0; 
}



  




  // submit request to the server
  const handleSubmit = () => {
    model.data.title = title; 
    model.data.description = description.toString();
    done(model);
  }
  

  return (
    <div>
      <h1 className ="text-2xl font-bold mb-4 text-center p-4">myPixel</h1>
      <div className ="w-full h-96 p-4 m-0 rounded-lg border border-black bg-blue-500 flex justify-center items-center">
       <div className="flex justify-center items-center h-screen w-full"> 
        <div className="pixel-one"></div>
        </div>
        </div>
        <textarea 
          className="border-2 border-gray-300 p-2 mb-4 w-full"
          placeholder="How is your mochi today!"
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
      <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleSubmit}>Submit </button>
    </div>
  );
}