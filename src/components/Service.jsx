import React from 'react'
import { Title } from './Title'
import { serviceLinks } from '../data'

export const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services'/>
     
      <div className="section-center services-center">
         
         {serviceLinks.map((link)=>{
          const {id,icon,para,text} = link
          return(
            <article className="service" id='key'>
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{text}</h4>
              <p className="service-text">
                 {para}
              </p>
            </div>
          </article>
          )
         })}
      </div>
    </section>
  )
}
