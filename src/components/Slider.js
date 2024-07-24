import React from 'react';

function Slider() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade d-none d-sm-block pt-md-5 mt-md-5 " data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://zerotrack.com.br/wp-content/themes/generic/img/banners/researchX.png" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Planejamento</h5>
                            <p>Tudo começa na pesquisa, quem conhece a história não está fadado a repeti-la..</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://zerotrack.com.br/wp-content/themes/generic/img/banners/developmentX.png" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Desenvolvimento</h5>
                            <p> Usamos hoje as melhores tecnologias e metodologias projetadas para o futuro.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://zerotrack.com.br/wp-content/themes/generic/img/banners/monitoringX.png" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Monitoramento</h5>
                            <p>Monitoramos sua presença digital para extrair conhecimento crucial para derrubar suas barreias.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://zerotrack.com.br/wp-content/themes/generic/img/banners/optimizationsX.png" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Otimização</h5>
                            <p>Otimizamos minunciosamenteo seu website ou e-commerce, cada detalhe importa.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://zerotrack.com.br/wp-content/themes/generic/img/banners/artificial-inteligence-2X.png" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Inteligência Artificial</h5>
                            <p>87% dos nossos processos já são turbinados pela inteligência artificial.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://zerotrack.com.br/wp-content/themes/generic/img/banners/strategyX.png" class="d-block w-100" alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Estratégia</h5>
                            <p>Este é o nome do nosso jogo</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Slider;
