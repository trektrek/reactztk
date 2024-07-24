import React from 'react';
import Logo from '../img/logos/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faRss } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer className="tw-relative tw-z-10 tw-bg-black tw-text-white tw-pt-20 tw-pb-10 lg:pt-[120px] lg:pb-10">
        <div className="container mx-auto">
          <div className="tw-grid md:tw-grid-cols-5 tw-grid-cols-1 gap-4 tw-text-left">
            <div className="w-full px-4 tw-sm:w-2/3 tw-lg:w-3/12">
              <div className="tw-w-full mb-5">
                <a href="/" className="mb-5 inline-block">
                  <img src={Logo} alt="logo" className="h-15" width="100%" />
                </a>
                <p className="tw-text-base tw-text-body-color my-3">
                  Para nós a tecnologia é somente um meio para conectar pessoas.
                </p>
                <p className="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-white ">
                  <span className="tw-mr-3 tw-text-pink-500">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  </span>
                  <a className="tw-text-white" href="https://api.whatsapp.com/send?phone=5548984653147&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20a%20Zerotrack">
                    <span><FontAwesomeIcon icon={faWhatsapp} /> +55 (48) 98465 3147</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="tw-w-full tw-px-4 tw-sm:w-1/2 tw-lg:w-2/12">
              <div className="tw-w-full tw-mb-10">
                <h4 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-3">
                  Recursos
                </h4>
                <ul className="tw-space-y-3">
                  <li>
                    <a href="/#services" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                     Planejamento
                    </a>
                  </li>
                  <li>
                    <a href="/#services" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Desenvolvimento
                    </a>
                  </li>
                  <li>
                    <a href="/#services" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Otimização SEO
                    </a>
                  </li>
                  <li>
                    <a href="/#services" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Social Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tw-w-full tw-px-4 tw-sm:w-1/2 tw-lg:w-2/12">
              <div className="tw-w-full tw-mb-10">
                <h4 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-3">
                  Empresa
                </h4>
                <ul className="tw-space-y-3">
                  <li>
                    <a href="/#about" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Sobre nós
                    </a>
                  </li>
                  <li>
                    <a href="/#contacts" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                     Contato & Suporte
                    </a>
                  </li>
                  <li>
                    <a href="/#cases" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Histórias de sucesso
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tw-w-full tw-px-4 tw-sm:w-1/2 tw-lg:w-2/12">
              <div className="tw-w-full tw-mb-10">
                <h4 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-3">
                  Links rápidos
                </h4>
                <ul className="tw-space-y-3">
                  <li>
                    <a href="/#contacts" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Suporte premium
                    </a>
                  </li>
                  <li>
                    <a href="/#services" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Nossos serviços
                    </a>
                  </li>
                  <li>
                    <a href="/#team" className="inline-block text-base leading-loose text-body-color hover:text-primary ">
                      Nossa equipe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tw-w-full tw-px-4 tw-sm:w-1/2 tw-lg:w-3/12">
              <div className="tw-w-full tw-mb-10">
                <h4 className="tw-text-lg tw-font-semibold tw-text-white tw-mb-3">
                  Siga nos
                </h4>
                <div className="tw-flex tw-items-center tw-mb-6">
                  <a href="https://www.facebook.com/zerotrack/" className="tw-flex tw-items-center tw-justify-center tw- tw-w-8 tw-h-8 tw-mr-3 tw-border tw-rounded-full tw-text-dark tw-hover:border-primary tw-hover:bg-primary tw-border-stroke tw-hover:text-white tw-sm:mr-4 tw-lg:mr-3 tw-xl:mr-4" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://www.twitter.com/zerotrack/" className="tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-mr-3 tw-border tw-rounded-full tw-text-dark tw-hover:border-primary tw-hover:bg-primary tw-border-stroke tw-hover:text-white tw-sm:mr-4 tw-lg:mr-3 tw-xl:mr-4" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="https://www.instagram.com/zerotrack/" className="tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-mr-3 tw-border tw-rounded-full tw-text-dark tw-hover:border-primary tw-hover:bg-primary tw-border-stroke tw-hover:text-white tw-sm:mr-4 tw-lg:mr-3 tw-xl:mr-4" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="/#blog" className="tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-mr-3 tw-border tw-rounded-full tw-text-dark tw-hover:border-primary tw-hover:bg-primary tw-border-stroke tw-hover:text-white tw-sm:mr-4 tw-lg:mr-3 tw-xl:mr-4">
                  <FontAwesomeIcon icon={faRss} />
                  </a>
                </div>
                <p className="text-base tw-text-body-color ">
                  &copy; 2024 Zerotrack
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 bottom-0 z-[-1]">

          </span>
          <span className="absolute top-10 right-10 z-[-1]">

          </span>
        </div>
      </footer>
    </>

  );
}

export default Footer;
