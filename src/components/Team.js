import React from 'react';
import Team1 from '../img/team/team1.png';
import Team2 from '../img/team/team2.png';
import Team3 from '../img/team/team3.png';
import Team4 from '../img/team/team4.png';
import Team5 from '../img/team/team5.png';

function Team() {
    return (
        <>
            <div id="team" className="container-fluid py-5 tw-bg-gray-300 tw-text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <small className="tw-mb-5">Nosso equipe</small>
                            <h3 className="tw-mb-2">Nossa família</h3>
                            <p className="tw-mb-5">Não somos somente uma equipe, somos uma família
                                que come, bebe e respira internet desde sempre</p>

                            <div className="tw-grid md:tw-grid-cols-5 tw-gap-10 tw-grid-cols-1 tw-text-center">
                                <div className="">

                                    <img className="tw-mx-auto" src={Team1} alt="" />
                                    <h5>Alexandre S. Silva</h5>
                                    CEO / Fullstack Developer

                                </div>
                                <div className="">

                                    <img className="tw-mx-auto" src={Team2} alt="" />
                                    <h5>Lu C.P. Silva</h5>
                                    Social media Specialist

                                </div>
                                <div className="text-center">

                                    <img className="tw-mx-auto" src={Team3} alt="" />
                                    <h4>Richard P. Silva</h4>
                                    Devops Engineer

                                </div>
                                <div className="">

                                    <img className="tw-mx-auto" src={Team4} alt="" />
                                    <h5>Robert P. Silva</h5>
                                    Wordpress Specialist

                                </div>
                                <div className="">

                                    <img className="tw-mx-auto" src={Team5} alt="" />
                                    <h5>Priscila S. Silva</h5>
                                    Content Specialist

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;


