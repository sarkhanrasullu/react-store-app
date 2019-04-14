import React from 'react'

export default ({name, title}) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold">
                {name} 
                <strong className="text-blue">{title}</strong>
            </h1>
        </div>
      </div>
    </div>
  )
}
