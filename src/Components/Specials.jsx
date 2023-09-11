import React from 'react';
import tabData from "./tab-data";

export default function Specials() {
    return (
        <section id='specials' className='specials'>
            <div className="container">
                <div className="section-title">
                    <h2>Specials</h2>
                    <p>Check Our Specials</p>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <ul class="nav nav-tabs flex-column" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">Modi sit est</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">Unde praesentium sed</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-3" aria-selected="false" role="tab" tabindex="-1">Pariatur explicabo vel</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-4" aria-selected="false" role="tab" tabindex="-1">Nostrum qui quasi</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#tab-5" aria-selected="false" role="tab" tabindex="-1">Iusto ut expedita aut</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            {tabData.map((tab, idx) => (
                                <div key={tab.id} className={`tab-pane ${idx === 0 ? 'active show' : ''}`} id={tab.id} role="tabpanel">
                                    <div className="row">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>{tab.title}</h3>
                                            <p className="fst-italic">{tab.subtitle}</p>
                                            <p>{tab.content}</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={tab.imgSrc} alt="Tab" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
