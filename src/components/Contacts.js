import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Style1 = {
    fontSize: '40px',
    position: 'relative',
};

function Contacts() {
    const [formData, setFormData] = useState({
        nome: '',
        fone: '',
        email: '',
        mensagem: ''
    });

    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your Contact Form 7 form ID and endpoint
        const formId = '00e1101';
        //const endpoint = `https://zerotrack.com.br/pb/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;
        const endpoint = `https://zerotrack.com.br/pb/wp-json/contact-form-7/v1/contact-forms/?p=${formId}/feedback`;

        const data = new FormData();
        data.append('nome', formData.nome);
        data.append('fone', formData.fone);
        data.append('email', formData.email);
        data.append('mensagem', formData.mensagem);

        axios.post(endpoint, data)
            .then(response => {
                if (response.data.status === 'mail_sent') {
                    setStatus('Mensagem enviada com sucesso!');
                } else {
                    setStatus('Ocorreu um erro ao enviar a mensagem.');
                }
            })
            .catch(error => {
                console.error('Error sending form data', error);
                setStatus('Ocorreu um erro ao enviar a mensagem.');
            });
    };

    return (
        <>
            <div className="container-fluid tw-bg-black tw-text-white py-5 tw-border-1 tw-border-black tw-border-b-white" id="contacts">
                <div className="container md:py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="tw-grid md:tw-grid-cols-2 tw-grid-cols-1">
                                <div className="tw-text-left">
                                    <small className="mb-5">Nossos contatos</small>
                                    <h3 className="mb-2">Vamos conversar ?</h3>
                                    <p className="mb-5">Queremos ouvir você , sobre sua empresa , seus produtos, serviços e suas barreiras, para discutirmos como podemos ajudá-lo a supera-las e crescer juntos, sem compromisso é claro.</p>

                                    <div className="mt-5">
                                        <div className="item tw-inline-block">
                                            <FontAwesomeIcon icon={faHome} className="tw-text-pink-500 tw-mr-5" style={Style1} />
                                        </div>
                                        <div className="item tw-inline-block tw-mb-5">
                                            <h4>Nossa sede</h4>
                                            <p>Servidão Peralta nr 02 <br />Florianópolis / SC / Brasil</p>
                                        </div>
                                        <br />
                                        <div className="item tw-inline-block">
                                            <FontAwesomeIcon icon={faWhatsapp} className="tw-text-pink-500 me-4 mt-4" style={Style1} />
                                        </div>
                                        <div className="item tw-inline-block tw-mb-5">
                                            <h4>Telefone</h4>
                                            <a className="tw-text-white no-underline" href="https://api.whatsapp.com/send?phone=5548984653147&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20a%20Zerotrack" target="_blank" rel="noreferrer">
                                                <p>+55 48 98465 3147</p>
                                            </a>
                                        </div>
                                        <br />
                                        <div className="item tw-inline-block">
                                            <FontAwesomeIcon icon={faAt} className="tw-text-pink-500 tw-mr-5 mt-4" style={Style1} />
                                        </div>
                                        <div className="item tw-inline-block tw-mb-5">
                                            <h4>Email</h4>
                                            <a className="tw-text-white no-underline" href="mailto:alexandre@zerotrack.com.br">
                                                <p>contato@zerotrack.com.br</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div id="formulario" className="px-md-5 px-2 py-md-5 py-4 mx-md-5 my-md-5 tw-bg-pink-950 tw-rounded">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                {/* <label htmlFor="name" className="form-label">Nome</label> */}
                                                <input type="text" className="form-control" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Seu nome" required />
                                            </div>
                                            <div className="mb-3">
                                               {/* ˜ <label htmlFor="phone" className="form-label">Telefone</label> */}
                                                <input type="tel" className="form-control" id="fone" name="fone" value={formData.fone} onChange={handleInputChange} placeholder="Seu fone" required />
                                            </div>
                                            <div className="mb-3">
                                                {/* <label htmlFor="email" className="form-label">Email</label> */}
                                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Seu email" required />
                                            </div>
                                            <div className="mb-3">
                                                {/* <label htmlFor="message" className="form-label">Mensagem</label> */}
                                                <textarea className="form-control" id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleInputChange} placeholder="Sua mensagem" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-danger form-control" >Enviar</button>
                                        </form>
                                        {status && <p className="mt-3">{status}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;
