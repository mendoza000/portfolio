import React from "react";
import Project from "./Project";
import img1 from "../../assets/rain000.jpeg";
import img2 from "../../assets/ppt.jpeg";
// import img3 from '../../assets/hotel.png'
import img4 from "../../assets/journal000.jpeg";
// import img5 from '../../assets/barber.png'
import img6 from "../../assets/xo.jpeg";
import img7 from "../../assets/avoStore.png";
import img8 from "../../assets/lemonFlow.png";
import img9 from "../../assets/my-brand-landing-page.png";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects mx" id="projects">
      <h3 className="projects_title">
        <box-icon name="rocket" color="#1d915f"></box-icon>
        Proyectos
      </h3>

      <div className="projects_list">
        <Project
          img={img1}
          title="Aplicación web del clima"
          skill="HTML - CSS - JS - WEBPACK"
          urlWeb="https://mendoza000.github.io/rain000/"
          urlRepo="https://github.com/mendoza000/rain000"
        />

        {/* <Project
          img={img2}
          title="Juego web de piedra, papel y tijeras"
          skill="HTML - CSS - JS - WEBPACK"
          urlWeb="https://ppt000.netlify.app/"
          urlRepo="https://github.com/mendoza000/ppt"
        /> */}

        {/*<Project 
					img={img3}
					title='Página web de hotel'
					skill='HTML - CSS'
					urlWeb='https://hotel-demo.vercel.app/'
					urlRepo='https://github.com/mendoza000/htbp-demo'
				/>*/}

        <Project
          img={img4}
          title="Aplicación web de notas"
          skill="SASS - JS - VITE - REACT - REDUX - FIREBASE"
          urlWeb="https://journal000.vercel.app/"
          urlRepo="https://github.com/mendoza000/journalapp"
        />

        {/* <Project 
					img={img5}
					title='Página web de barberia'
					skill='SASS - JS - VITE - REACT - REDUX'
					urlWeb='https://barber-shop000.vercel.app/'
					urlRepo='https://github.com/mendoza000/barber-shop'
				/> */}

        <Project
          img={img6}
          title="Juego web de ceros y cruces"
          skill="SASS - JS - VITE - REACT - REDUX"
          urlWeb="https://xo000.vercel.app/"
          urlRepo="https://github.com/mendoza000/xo"
        />

        <Project
          img={img7}
          title="Tienda virtual de Agucates"
          skill="JS - NEXTJS - SCSS - REDUX"
          urlWeb="https://avostore000.vercel.app/"
          urlRepo="https://github.com/mendoza000/avo-store"
        />

        <Project
          img={img8}
          title="Registro de ingresos y gastos"
          skill="VUE3 - PINIA - TAILWIND - VITE - JS"
          urlWeb="https://lemon-flow.vercel.app/"
          urlRepo="https://github.com/mendoza000/lemon-flow"
        />

        <Project
          img={img9}
          title="Landing page"
          skill="VUE3 - TAILWIND - VITE - JS"
          urlWeb="https://mybrand000.vercel.app/"
          urlRepo="https://github.com/mendoza000/my-brand-landing-page"
        />
      </div>
    </div>
  );
};

export default Projects;