import React from 'react';
import Logo1 from '../img/logos/imperatriz-logo.png'
import Logo2 from '../img/logos/rbs-logo.png'
import Logo3 from '../img/logos/coruja-logo.png'
import Logo4 from '../img/logos/juntos.la-logo.png'
import Logo5 from '../img/logos/Imaginarium-logo.png'
import Logo6 from '../img/logos/unimed-logo.png'
import Logo7 from '../img/logos/Ciclo-logo.png'
import Logo8 from '../img/logos/sesi-logo.png'
import Logo9 from '../img/logos/cvb-logo.png'
import Logo10 from '../img/logos/weg-logo.png'

function Customers() {
    return (
        <>
            <div id="customers" class="container-fluid tw-bg-pink-700 py-5 tw-text-center tw-text-white">
                <div class="container py-5">
                    <div class="col-12 col-md-4 offset-md-4">
                        <h3 class="tw-mb-5">Alguns de nossos clientes satisfeitos</h3>
                    </div>
                    <div class="tw-grid md:tw-grid-cols-5 tw-grid-cols-1 tw-gap-10 tw-text-center">
                        <img src={Logo1} alt="" />
                        <img src={Logo2} alt="" />
                        <img src={Logo3} alt="" />
                        <img src={Logo4} alt="" />
                        <img src={Logo5} alt="" />
                        <img src={Logo6} alt="" />
                        <img src={Logo7} alt="" />
                        <img src={Logo8} alt="" />
                        <img src={Logo9} alt="" />
                        <img src={Logo10} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customers;