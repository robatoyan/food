import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { selectEat } from '../../../features/eatSlice';
import { Contactss, OurTopCiti } from '../../../app/type';

export const Contacts: React.FC = (): JSX.Element => {
    const cities = useSelector(selectEat)
    return (
        <div className='Contacts'>
            <div className='contactsBox OurTopSities'>
                <h2>Our top cities</h2>
                <div className='citiesAll'>
                    {
                        cities.cities.map((e: OurTopCiti, i: any) => {
                            return (
                                <div key={i}>
                                    {
                                        e.cities.map((a, i) => {
                                            return (
                                                <ul key={i}>
                                                    <li>{a}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='contactsBox AllOfUsContacts' >
                <div className=' contacts_Data'>
                    {
                        cities.contacts.map((e: Contactss, i: any) => {
                            return (
                                <div>
                                    <h3>{e.title}</h3>
                                    {
                                        e.contacts.map((a, i) => {
                                            return (
                                                <ul key={i}>
                                                    <li>{a}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className='follow_Us'>
                    <h2>Follow Us</h2>
                    <div className='faIcons'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <h3>Receive exclusive offers in your mailbox</h3>
                    <div className='Email'>
                        <div className='EnterEmail'><label htmlFor='Email'><i className="fa fa-envelope" aria-hidden="true"></i></label><input placeholder='Enter Your email' id='Email'/></div>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='contactsBox Your_Company'>
                <div>
                    <h2>All rights Reserved</h2>
                    <h2>Your Company, 2021</h2>
                </div>
                <div>
                    <h2>Made with <i className="fa fa-heart" aria-hidden="true"></i> by</h2>
                    <h2>Themewagon</h2>
                </div>
            </div>
        </div>
    )
}