import React from 'react'

const Color = ({ emotion }) => {
  return (
    <>
      <div className={emotion} />
      <style jsx>{`
        div {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(-45deg, red, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          background-position: center center;
          transition: background-position 2s ease;
        }
        .happy {
          background-position: top left;
        }
        .neutral {
          background-position: top center;
        }
        .sad {
          background-position: bottom left;
        }
        .angry {
          background-position: bottom right;
        }
        .surprised {
          background-position: top right;
        }
        .disgusted {
          background-position: bottom center;
        }
      `}
      </style>
    </>
  )
}

export default Color
