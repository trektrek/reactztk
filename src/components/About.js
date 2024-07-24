import React from 'react';
import Ilustra1 from '../img/ilustras/ilustra1.png';
import Ilustra2 from '../img/ilustras/ilustra2.png';
import Ilustra3 from '../img/ilustras/ilustra3.png';

function About() {
    return (
        <>
            <div id="about" className="container-fluid tw-bg-pink-900 tw-text-white py-5">
                <div className="container py-5">
                    <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 tw-grid-cols-1">
                        <div className="tw-grid tw-grid-cols-2 tw-gap-2">
                            <div className=""><img className="shadow" src={Ilustra1} alt="" /><br/><br/>
                                <img className="shadow" src={Ilustra2} alt="" /></div>
                            <div className="tw-mt-3 mt-5 pt-5 "><img class="shadow" src={Ilustra3} alt="" />
                            </div>
                        </div>
                        <div class="pt-5 mt-5">
                            <small>Por que nos escolher ?</small>
                            <h3 className="py-2 my-2">Fazemos o que amamos<br/>
                                há mais de 20 anos</h3>
                            <p className="py-2 my-2">Nosso DNA é desenvolvimento web desde 2002, conhecemos os caminhos para planejar, desenvolver e otimizar seu website como a palma da nossa mão.</p>
                            <p className="py-2 my-2">Temos trabalhado duro durante todo esse tempo para nos manter atualizados em estratégias, paradigmas e ferramentas que entregam performance aos nossos clientes.</p>
                            <a href="/#contacts" rel="noopener">
                                <button className="btn btn-danger tw-bg-pink-500 tw-text-white tw-mt-3">Vamos conversar?</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;


