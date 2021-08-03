import React from 'react'

const Footer = ({mentorSource}) => {
  return (
    <footer className="mt-32 pb-4 text-center font-inter">
      <div className={"flex w-full justify-center font-bold font-inter"}>
            <a className="no-underline text-transparent self-center" target="_blank" href="https://mentorcruise.com/mentor/mohammadtakbiri/"> <img className="mb-0 rounded-xl" src={mentorSource} width="240" alt="MentorCruise"/> </a>
      </div>
       Mohammad Takbiri © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
