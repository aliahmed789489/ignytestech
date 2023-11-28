
// import videoport1 from '../public/videoport1.mp4';
const VideoPortfolio = () => {
  return (
    <div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-12 mt-20'>

      <div>
      <video controls width="600" height="400">
        <source src="../public/videoport1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div>
      <video controls width="600" height="400">
        <source src="../public/videoport2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div>
      <video controls width="600" height="400">
        <source src="../public/videoport3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      </div>
    </div>
  )
}

export default VideoPortfolio
