import React from 'react';
import User from './User';
import photo from './opengraph-blog.png'


function Rafael() {
  return (
    <div className="Rafael">
        <p>
          Novo Componente Rafael criado!!!
        </p>
        <User name="Rafael" photo={photo}></User>
        <User name="Mônica"></User>
      
    </div>
  );
}

export default Rafael;
