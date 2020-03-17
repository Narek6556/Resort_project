import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {

    state = { 
        services: [
            { 
                icon: <FaCocktail />,
                title: 'Free Cocktail',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.'
            },
            { 
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.'
            },
            { 
                icon: <FaShuttleVan />,
                title: 'Free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.'
            },
            { 
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corrupti.'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title = 'services' />
                <div className="services-center">
                    {this.state.services.map( 
                        (item, index) => { 
                            return <article key = {index} className = 'service'> 
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        }
                    )}
                </div>
            </section>
        )
    }
}


