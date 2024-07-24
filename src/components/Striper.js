import React from 'react';

function Striper() {
    return (
        <>
            <div className="container-fluid tw-bg-pink-800 tw-text-white py-4">
                <div className="container">
                    <div className="tw-grid sm:tw-grid-cols-3 md:tw-gap-4 md:tw-py-4 tw-grid-cols-1">
                        <div className="number-1 tw-text-center">
                            <h3>+1K</h3>
                            <p>Clientes passaram pelos <br />cuidados da nossa equipe.</p>
                        </div>
                        <div className="number-2 tw-text-center">
                            <h3>92%</h3>
                            <p>É a taxa de satisfação de <br />nossos maravilhosos clientes.</p>
                        </div>
                        <div className="number-3 tw-text-center">
                            <h3>+500</h3>
                            <p>É a média de engajamento de <br />nossos clientes nas redes sociais.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Striper;
