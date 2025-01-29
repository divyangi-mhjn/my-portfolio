import React from 'react'

export const Work = () =>{
    return (
        <>
        <h2 className="major">Work Experience</h2>
        
                  <div className="tab-container" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
                    <div style={{ paddingTop: '20px' }}> <h3 className="text-sm font-normal mb-1">LTIMindtree</h3>
        
                      <span className="text-sm font-medium opacity-50" >Senior Software Engineer</span>
        
                    </div>
                    <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        
                      <h3 className="text-sm font-normal mb-1">Feb 2022 - Present</h3>
        
                    </div>
                  </div>
                  <hr />
        
                  <div className="tab-container" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
        
        
                    <div style={{ paddingTop: '20px' }}> <h3 className="text-sm font-normal mb-1">Tata Consultancy Services</h3>
        
                      <span className="text-sm font-medium opacity-50" >System Engineer</span>
        
                    </div>
        
                    <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
        
                      <h3 className="text-sm font-normal mb-1">Mar 2019 - Feb 2022</h3>
        
                    </div>
                  </div>
                  <hr />
        
                  <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
        
                    <div style={{ paddingTop: '20px' }}> <h3 className="text-sm font-normal mb-1">Skill Lotto Solutions</h3>
        
                      <span className="text-sm font-medium opacity-50">Software Developer</span>
                    </div>
                    <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                      <h3 className="text-sm font-normal mb-1">Jun 2018 - Feb 2019</h3>
                    </div>
                  </div>
        </>
    )
}