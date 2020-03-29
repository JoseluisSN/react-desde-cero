import React from 'react'

const Curso = () => (
        <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png" alt="Poster del curso"/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
            </h3>
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <div class="card__avatar s-mr-1">
                        <div class="circle img-container">
                        <img src="https://lh3.googleusercontent.com/OMX8m3-SNgxf50xmUcA0QaSQubC5AgxGGIVArb3uahj9I2McrDo-pEsK2cPuIAVr-wgV=s85" alt="tio joseluis"/>
                        </div>
                    </div>
                    <span class="small">Joseluis SN</span>
                    </div>
                </div>
            <div class="s-main-center">
                <a class="button--ghost-alert button--tiny" href="#">$ 200USD</a>
            </div>
        </div>
    </article>
)
export default Curso