import React from 'react'
// import NoteContext from '../context/notes/NoteContext'
import Wave from 'react-wavify'
const About = () => {

    return (
        <div style={{width:'100%'}}>
        <div className='container'>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">  {/* accordian means dropdown  */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Make your notes
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            NoteWave gives a platform to save your notes. You can edit, delete them anytime in future.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            NoteWave is a free note making tool.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Responsive and Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This works on any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera etc.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <Wave fill='#7CB9E8'
        paused={false}
        style={{ display: 'flex', width:'100%'  ,marginBottom:'0' ,position:'relative'}}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.25,
          points: 7
        }}
  />
        </div>
    )
}

export default About
