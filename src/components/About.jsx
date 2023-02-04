import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-500 via-black to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
                Hi. My name is Neil and I'm a 13 year old programmer. I have been programming for around 3 years now and programming is something I really enjoy doing. Coding can change the way you think. All you need is a computer and your mind and you can change the world.
            </p>

            <br />

            <p className="text-xl">
                I love playing soccer in my free time as I do play for a Travel Soccer Team. I also love doing math problems that callenge my mind as well as research about the world. Currently, I am trying to figure out how we as a word can prevent a future pandemic. This is a little about me and I hope you enjoy the rest of my website.
            </p>
        </div>

    </div>
  )
}

export default About