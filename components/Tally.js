import React from 'react'

const LABELS = {
  neutral: 'focused'
}

const Tally = ({ emotions }) => {
  const total = Object.values(emotions).reduce((a, b) => a + b, 0)
  const emotionPercentages = Object.keys(emotions).map(emotion => {
    return { emotion, percent: ((emotions[emotion] / total) * 100).toFixed(1) }
  })

  return (
    <>
      <div>
        {emotionPercentages.map(({ emotion, percent }) => (
          <span key={emotion}>
            {LABELS[emotion] || emotion} : {percent}
          </span>
        ))}
      </div>
      <style jsx>{`
        div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          background: rgba(255,255,255, 0.8);
          border-bottom: 1px solid white;
        }
        span {
          display: inline-block;
          padding: 0 20px;
        }
      `}
      </style>
    </>
  )
}

export default Tally
