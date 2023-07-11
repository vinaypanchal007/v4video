import React, { useRef, useState } from 'react'
import '../Styles/EditPage.css'
import audio from '../images/audio.png'
import card from '../images/cardcomp.jpg'
import videoUrl from '../video/video.mp4'
import ReactPlayer from 'react-player';

function EditPageNavbar() {


  const videoRef = useRef(null);
  const [played, setPlayed] = useState(0);
  const [playing, setPlaying] = useState(true);

  const handleSeek = (e) => {
    const clickedTime = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
    setPlayed(clickedTime);
    videoRef.current.seekTo(clickedTime);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSliderChange = (event) => {
    const newPosition = event.target.value;
    setSliderPosition(newPosition);
  };

  const width = 1150;
  const markingCount = Math.floor(width / 30);
  const markings = Array.from({ length: markingCount });

  return (
    <div className='ednav'>
      <div className='editor'>
        <div className='upper'>
          <div className='nav-info'>
            <div className='one'>
              <h1 className='asset'>Assets</h1>
              <button className='upload'><i class="fa-solid fa-upload"></i></button>
            </div>
            <div className='file'>
              <div className='c1'>
                <div class="card">
                  <img src={audio} className='a' alt='audio' />
                  <div class="card-body">
                    <p class="card-text">audio.mp3</p>
                  </div>
                </div>
              </div>
              <div className='c2'>
                <div class="card">
                  <img src={card} class="c" alt='card' />
                  <div class="card-body">
                    <p class="card-text">video.mpg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='three'>
              <button className='addfile'><i class="fa-solid fa-square-plus"></i></button>
              <button className='delfile'><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
          <div className='videoed'>
            <div className='btns'>
              <input type='text' className='filename' placeholder=" Project Name" />
              <div className='icon'>
                <button type="button" class="btn btn-outline-light"><i class="fa-solid fa-rotate-left fa-xl"></i></button>
                <button type="button" class="btn btn-outline-light"><i class="fa-solid fa-rotate-right fa-xl"></i></button>
                <button type="button" class="btn btn-outline-light">Invite <i class="fa-solid fa-user-plus"></i></button>
                <button type="button" class="btn btn-outline-light">Done <i class="fa-solid fa-check"></i></button>
              </div>
            </div>
            <div className='edit'>
              <ReactPlayer
                ref={videoRef}
                url={videoUrl}
                playing={playing}
                volume={0.8}
                width="900px"
                height="350px"
                onProgress={(e) => setPlayed(e.played)}
              />
            </div>
          </div>
        </div>
        <div className='lower'>
          <div className='component'>
            <button className='split'><i class="fa-solid fa-scissors"></i> Split</button>
            <button className='add'><i class="fa-regular fa-plus"></i> Add Media</button>
            <button className='mic'><i class="fa-solid fa-microphone"></i> Voiceover</button>
            <button className='delete'><i class="fa-solid fa-trash"></i> Delete</button>
            <div className='vidbtn'>
              <button className='back'><i class="fa-solid fa-backward"></i></button>
              <button className='play' onClick={handlePlay}><i class="fa-solid fa-play"></i></button>
              <button className='pause' onClick={handlePause}><i class="fa-solid fa-pause"></i></button>
              <button className='for'><i class="fa-solid fa-forward"></i></button>
            </div>
            <div className='options'>
              <button className='voldown'><i class="fa-solid fa-volume-off"></i></button>
              <button className='volup'><i class="fa-solid fa-volume-high"></i></button>
              <button className='zoomout'><i class="fa-solid fa-magnifying-glass-minus"></i></button>
              <button className='zoomin'><i class="fa-solid fa-magnifying-glass-plus"></i></button>
            </div>
          </div>
          <div className='ptr'>
            <div className="timeline-container">
              <div className="timeline-bar"></div>
              <input
                type="range"
                className="slider-bar"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
              />
            </div>
          </div>
          <div className='scale'>
            <div className='number'>
              <div className='one'>
                0
              </div>
              <div className='two'>
                10
              </div>
              <div className='three'>
                20
              </div>
              <div className='four'>
                30
              </div>
              <div className='five'>
                40
              </div>
            </div>
            <div className='marking'>
              <div className="scaling" >
                {markings.map((_, index) => (
                  <div className="marking" key={index}></div>
                ))}
              </div>
            </div>
            <div className='colorsc'>
            </div>
          </div>
          <div className='track1'>
            <div className='block1'>
              <p className='t1'> Track1</p>
            </div>
            <div className='block2'>
              <div className="timeline-bar" onClick={handleSeek}>
                <div className="played-bar" style={{ width: `${played * 100}%` }} />
              </div>
            </div>
          </div>
          <div className='track2'>
            <div className='b1'>
              <div className='name'>
                Track2
              </div>
            </div>
            <div className='b2'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPageNavbar
