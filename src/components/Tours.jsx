import { Title } from "./Title"
import { tourServices } from "../data"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />
     

      <div className="section-center featured-center">
        {tourServices.map((link)=>{
          const {id,image,location,para,date,country,Days,rupee}= link
          return <article className="tour-card" key={id}>
          
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{location}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{date}</h4>
            </div>
            <p>
             {para}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {country}
              </p>
              <p>{Days}</p>
              <p>{rupee}</p>
            </div>
          </div>
        </article>
        })} 
      </div>
    </section>
  )
}

export default Tours