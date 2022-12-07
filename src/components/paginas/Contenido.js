import React from 'react'
import shoe from '../../../src/imagenes/Contenido/1.png';
import shoe2 from '../../../src/imagenes/Contenido/2.png';
import shoe3 from '../../../src/imagenes/Contenido/3.png';
import shoe4 from '../../../src/imagenes/Contenido/4.png';

export const Contenido = () => {
  return (
    <>
      <h1 className='title'>Productos</h1>
      
      <div className='productos'>
          <div className='producto'>
              <a href='#'>
                  <div className='producto_img'>
                    <img src={shoe}/>
                  </div>
                </a>
                <div className='producto_footer'>
                  <h1>New Balance 550</h1>
                  <p> White-Red</p>
                  <p className='price'> $149,99 </p>
                </div>

                <div className='buttom'>
                  <button className='btn'>
                    Añadir al carrito
                  </button>
                  <a href='#' className='btn'>Vista</a>
                <div>

              </div>
            </div>
          </div>

          <div className='producto'>
              <a href='#'>
                  <div className='producto_img'>
                    <img src={shoe2}/>
                  </div>
                </a>
                <div className='producto_footer'>
                  <h1>Nike Dunk Low</h1>
                  <p> Iron Grey-Green</p>
                  <p className='price'> $119,99 </p>
                </div>
                
                <div className='buttom'>
                  <button className='btn'>
                    Añadir al carrito
                  </button>
                  <a href='#' className='btn'>Vista</a>
                <div>
                
              </div>
            </div>
          </div>
        
        
      </div>

      <div className='productos'>
          <div className='producto'>
              <a href='#'>
                  <div className='producto_img'>
                    <img src={shoe3}/>
                  </div>
                </a>
                <div className='producto_footer'>
                  <h1>Vans Old Skool MTE</h1>
                  <p> Black-White</p>
                  <p className='price'> $99,99 </p>
                </div>

                <div className='buttom'>
                  <button className='btn'>
                    Añadir al carrito
                  </button>
                  <a href='#' className='btn'>Vista</a>
                <div>

              </div>
            </div>
          </div>

          <div className='producto'>
              <a href='#'>
                  <div className='producto_img'>
                    <img src={shoe4}/>
                  </div>
                </a>
                <div className='producto_footer'>
                  <h1>Converse Chuck Taylor</h1>
                  <p> White-Grey</p>
                  <p className='price'> $59,99 </p>
                </div>
                
                <div className='buttom'>
                  <button className='btn'>
                    Añadir al carrito
                  </button>
                  <a href='#' className='btn'>Vista</a>
                <div>
                
              </div>
            </div>
          </div>
        
        
      </div>

    </>
  )
}

export default Contenido