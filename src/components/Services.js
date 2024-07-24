import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faSwatchbook, faDraftingCompass, faMicroscope, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoodreadsG } from '@fortawesome/free-brands-svg-icons';

function Services() {
    return (
        <>
        <div className="container-fluid tw-bg-pink-950 py-5 tw-text-center tw-text-white" id="services">
        <div className="container tw-text-center tw-text-white py-5">
            <div className="col-12 col-md-4 offset-md-4">
                <small className="mb-5">Nossos serviços</small>
                <h3 className="mb-2">O que oferecemos</h3>
                <p className="mb-5">”Ninguém conhece suas barreiras como você, nós estudamos diariamente estratégias para derruba-las para que sua empresa cresça em um relacionamento saudável com seu mercado”</p>
            </div>
    <div id="services-list" className="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-gap-10 tw-text-center">
                
                <div className="tw-rounded tw-px-3 tw-py-3 tw-text-white tw-bg-pink-500 tw-mb-3">
                <FontAwesomeIcon icon={faChessKing} className="rounded-pill tw-bg-pink-950 tw-py-3 tw-px-3 tw-mt-3 tw-mb-3 tw-text-white tw-text-2xl" />
                    <h3>Planejamento</h3>
                    <p>Mergulhamos no seu negócio, produtos e serviços para gerar o diferencial que você precisa para se destacar frente a concorrência.</p>
                </div>

                <div className="tw-rounded tw-px-3 tw-py-3 tw-text-white tw-bg-pink-500 tw-mb-3">
                <FontAwesomeIcon icon={faSwatchbook} className="rounded-pill tw-bg-pink-950 tw-py-3 tw-px-3 tw-mt-3 tw-mb-3 tw-text-white tw-text-2xl" />
                <h3>Webdesign</h3>
                    <p>Trabalhamos com as melhores tendências no desenvolvimento web para deixar seu site atraente e eficiente.</p>
                </div>

                <div className="tw-rounded tw-px-3 tw-py-3 tw-text-white tw-bg-pink-500 tw-mb-3">
                <FontAwesomeIcon icon={faDraftingCompass} className="rounded-pill tw-bg-pink-950 tw-py-3 tw-px-3 mt-3 tw-mb-3 tw-text-white tw-text-2xl" />
                <h3>Desenvolvimento</h3>
                    <p>Nos capacitamos constantemente nas melhores tecnologias da indústria e não temos medo de usá-las a seu favor.</p>
                </div>

                <div className="tw-rounded tw-px-3 tw-py-3 tw-text-white tw-bg-pink-500 tw-mb-3">
                <FontAwesomeIcon icon={faMicroscope} className="rounded-pill tw-bg-pink-950 tw-py-3 tw-px-3 tw-mt-3 tw-mb-3 tw-text-white tw-text-2xl" />
                <h3>Otimização SEO</h3>
                    <p>Com larga experiência em posicionamento orgânico, nossa equipe se preocupa com cada detalhe que fará diferença nas buscas.</p>
                </div>

                <div className="tw-rounded tw-px-3 tw-py-3 tw-text-white tw-bg-pink-500 tw-mb-3">
                <FontAwesomeIcon icon={faGoodreadsG} className="rounded-pill tw-bg-pink-950 tw-py-3 tw-px-3 tw-mt-3 tw-mb-3 tw-text-white tw-text-2xl" />
                <h3>Google ADs</h3>
                    <p>Se a sua concorrência anuncia para expor mais e mais sua marca, produtos e serviços, você também precisa divulgar, conte conosco</p>
                </div>

                <div className="tw-rounded tw-px-3 tw-py-3 tw-text-white tw-bg-pink-500 tw-mb-3">
                <FontAwesomeIcon icon={faShareAlt} className="rounded-pill tw-bg-pink-950 tw-py-3 tw-px-3 tw-mt-3 tw-mb-3 tw-text-white tw-text-2xl" />
                <h3>Social Media </h3>
                    <p>Parte do nosso trabalho é cuidar do relacionamento da sua marca com o mercado nas redes sociais, onde já estamos desde muito tempo.</p>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default Services;