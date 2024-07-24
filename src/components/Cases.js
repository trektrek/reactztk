import React from 'react';
import Proj1 from '../img/projects/project1.png'
import Proj2 from '../img/projects/project2.png'
import Proj3 from '../img/projects/project3.png'
import Proj4 from '../img/projects/project4.png'
import Proj5 from '../img/projects/project5.png'
// import Proj6 from '../img/projects/project6.png'
import Proj7 from '../img/projects/project7.png'
// import Proj8 from '../img/projects/project8.png'

const Style1 = {
    backgroundImage: `url(${Proj1})`,
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: '255px',
    width: '100%',
};

const Style2 = {
    backgroundImage: `url(${Proj2})`,
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: '255px',
    width: '100%',
};

const Style3 = {
    backgroundImage: `url(${Proj3})`,
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: '255px',
    width: '100%',
};

const Style4 = {
    backgroundImage: `url(${Proj4})`,
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: '255px',
    width: '100%',
};

const Style5 = {
    backgroundImage: `url(${Proj5})`,
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: '255px',
    width: '100%',
};

// const Style6 = {
//     backgroundImage: `url(${Proj6})`,
//     backgroundSize: '100%',
//     backgroundPosition: 'center top',
//     height: '255px',
//     width: '100%',
// };

const Style7 = {
    backgroundImage: `url(${Proj7})`,
    backgroundSize: '100%',
    backgroundPosition: 'center top',
    height: '255px',
    width: '100%',
};

// const Style8 = {
//     backgroundImage: `url(${Proj8})`,
//     backgroundSize: '100%',
//     backgroundPosition: 'center top',
//     height: '255px',
//     width: '100%',
// };

function Customers() {
    return (
        <>
            <div className="container-fluid tw-bg-pink-950 py-5 tw-text-center tw-text-white" id="cases">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <small className="mb-5">Nosso portifolio</small> <br />
                            <h3 className="mb-2">Alguns projetos recentes</h3>
                            <p className="mb-5">em todos esses anos foram muitos websites e lojas virtuais que criamos <br /> além de aplicativos e games sociais, estes são os projetos mais recentes.</p>

                            <div className="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-gap-10 tw-text-center">
                                <div className="card tw-mb-4 tw-bg-pink-950 text-white border-0 tw-rounded">
                                    <div className="card-img" style={Style2} >
                                    </div>
                                    <div className="card-body tw-bg-pink-800 text-white">
                                        <h5 className="card-title">Curtadoc.tv</h5>
                                        <p className="card-text">Um dos maiores sites de documentários da América Latina.</p>
                                        <a href="https://www.curtadoc.tv" className="btn btn-danger">veja mais</a>
                                    </div>
                                </div>
                                <div className="card tw-mb-4 tw-bg-pink-950 text-white border-0 tw-rounded">
                                    <div className="card-img" style={Style5} ></div>
                                    <div className="card-body tw-bg-pink-800 text-white tw-rounded">
                                        <h5 className="card-title">Juntos.la</h5>
                                        <p className="card-text">Site e ferramenta Sass especializada em criação de causas sociais</p>
                                        <a href="https://juntos.la" className="btn btn-danger">veja mais</a>
                                    </div>
                                </div>
                                <div className="card tw-mb-4 tw-bg-pink-950 text-white border-0 tw-rounded">
                                    <div className="card-img" style={Style1}>
                                    </div>
                                    <div className="card-body tw-bg-pink-800 text-white">
                                        <h5 className="card-title">Chegadeabandono.com.br</h5>
                                        <p className="card-text">Site da causa social que defende a criação de leis para proteção animal.</p>
                                        <a href="https://chegadeabandono.com.br" className="btn btn-danger">veja mais</a>
                                    </div>
                                </div>
                                <div className="card tw-mb-4 tw-bg-pink-950 text-white border-0 tw-rounded" >
                                    <div className="card-img" style={Style7} >
                                    </div>
                                    <div className="card-body tw-bg-pink-800 tw-text-white">
                                        <h5 className="card-title">mobilizebrasil.com</h5>
                                        <p className="card-text">Site de consultoria para partidos políticos.</p>
                                        <a href="https://mobilizrbrasil.com" className="btn btn-danger">veja mais</a>
                                    </div>
                                </div>
                                <div className="card tw-mb-4 tw-bg-pink-950 text-white border-0 tw-rounded">
                                    <div className="card-img" style={Style4}>
                                    </div>
                                    <div className="card-body tw-bg-pink-800 text-white">
                                        <h5 className="card-title">Expressaobrasiliense.com</h5>
                                        <p className="card-text">Um dos maiores Sites de notícias políticas de Brasília</p>
                                        <a href="https://expressaobrasiliense.com" className="btn btn-danger">veja mais</a>
                                    </div>
                                </div>
                                <div className="card tw-mb-4 tw-bg-pink-950 text-white border-0 tw-rounded">
                                    <div className="card-img" style={Style3}>
                                    </div>
                                    <div className="card-body tw-bg-pink-800 text-white">
                                        <h5 className="card-title">destaquedf.com.br</h5>
                                        <p className="card-text">Site que acompanha as notícias da sociedade de Brasília</p>
                                        <a href="https://destaquedf.com.br" className="btn btn-danger">veja mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Customers;