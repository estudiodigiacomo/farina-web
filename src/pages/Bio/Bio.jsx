import React from 'react'
import BioText from '../../components/BioText/BioText'
import ProfessionalDropdown from '../../components/Dropdown/Dropdown'
import GalleryAndCarousel from '../../components/GaleryTitles/GaleryTitles'

const Bio = () => {
  const professionalItems = [
    "Carrera de Especialización en Derecho Agrario. Universidad Nacional del Litoral. Agosto 2021-2023.",
    "Diplomatura en Derecho Alimentario y Agronegocios. Universidad de Buenos Aires. Agosto-Noviembre 2021.",
    "Diplomatura Cuestiones Agronómicas y Jurídicas del Suelo y del Agua. Fundación para la Educación, la Ciencia y la Cultura. Agosto-Noviembre 2020.",
    "Práctica Profesional en Asesoramiento Jurídico a Pymes. Grupo Professional. Marzo - Mayo 2020.",
    "Régimen Jurídico de los Agronegocios. Universidad Austral. Facultad de Derecho. Mayo-Noviembre 2019.",
    "Introducción al Derecho Tributario. Universidad Católica Argentina 'Santa María de los Buenos Aires'. Facultad de Derecho. Departamento de Postgrado y Extensión Jurídica. Septiembre – Noviembre 2012.",
    "Derecho Bancario y Financiero. Universidad Católica Argentina 'Santa María de los Buenos Aires'. Facultad de Derecho. Departamento de Postgrado y Extensión Jurídica. Mayo – Diciembre 2011.",
    "Asesoramiento Jurídico Empresario. Universidad Católica Argentina 'Santa María de los Buenos Aires'. Facultad de Derecho. Departamento de Postgrado y Extensión Jurídica. Abril – Septiembre 2010.",
    "Carrera de Especialización en Asesoramiento Empresario. Universidad del Museo Social Argentino. Marzo 2008 - Diciembre 2009.",
    "Abogada egresada de la Facultad de Derecho y Ciencias Sociales de la Universidad de Buenos Aires en el año 2006."
  ];
  

  const courseItems = [
    "XIV Encuentro de Colegios de Abogados sobre Temas de Derecho Agrario. Colegio de Abogados de Rosario. 24 y 25 de octubre de 2024.",
    "Estructuración aplicada de Bonos Sociales, Verdes y Sustentables (SVS+). UCEMA. 5 de junio de 2024 a 17 de junio de 2024.",
    "Programa de Futuros y Opciones (PFyO). Matba Rofex School. 14 de mayo de 2024 a 6 de junio de 2024.",
    "Curso 'Sistema de Gestión Ambiental en la Industria Alimentaria'. PCyT FAUBA. UBA AGRONOMÍA. 24 y 25 de Mayo de 2024.",
    "Jornada Argentino Brasilera de Derecho Agrario y Alimentario. Derecho UNNE. 7 y 10 de noviembre de 2023.",
    "Jornada Nacional de Derecho Agrario. Facultad de Derecho y Ciencias Sociales y Políticas. Universidad Nacional del Nordeste. 26 de octubre de 2023.",
    "VII Congreso Nacional de Derecho Agrario Provincia. Azul-Tandil. Facultad de Derecho. Unicen. 28 al 30 de septiembre de 2023.",
    "IX Congreso Argentino de Derecho Ambiental. Fundación Expoterra. 8 y 9 de junio de 2023.",
    "Negocios y Contratos del Agro. Bolsa de Cereales. 21 de septiembre de 2022.",
    "1º Ciclo de Conferencias Técnico Jurídicas para profesionales de la Agronomía y la Abogacía. F.A.D.I.A. Agosto 2022.",
    "VIII Congreso Argentino de Derecho Ambiental. Fundación Expoterra. 5 y 6 de mayo de 2022.",
    "'Régimen Jurídico de la Gestión de Pesticidas'. Instituto de Derecho Agrario y Ambiental. Colegio de Abogados de Pergamino. 4 de diciembre de 2020.",
    "'Las Reglas del Comercio Internacional para los productos agrarios y los alimentos en tiempos difíciles: preocupaciones ambientales, seguridad alimentaria y covid, desarrollo y proteccionismo'. Universidad del Noroeste. 20 de noviembre de 2020.",
    "'Agroecología Bien Pensada'. CAPACITAGRO. Noviembre-Diciembre 2020.",
    "Jornada Uso Responsable de Fitosanitarios. Instituto de Derecho Ambiental del CABB. 31 de julio de 2020.",
    "Jornada 'Ambiente, consumo sustentable, derecho y sociedad: nuevos paradigmas'. Instituto de Derecho del consumidor del CABB. 16 de junio de 2020.",
    "La crisis empresaria y de los trabajadores ante la emergencia. Grupo Professional. Mayo 2020.",
    "Primeras Jornadas on line de Derecho Societario. Universidad Austral. Mayo 2020.",
    "VI Jornadas de Derecho Ambiental del Colegio de Abogados y Procuradores de Bahía Blanca sobre Cuestiones Agroambientales. Noviembre 2019.",
    "Curso 'Derecho Procesal Ambiental'. ADATA. 28 de septiembre de 2018.",
    "XI Congreso Iberoamericano, Regulación Económica, Infraestructura y Servicios Públicos. Infraestructura pública, Desarrollo Económico y Social. 23 al 25 de Noviembre de 2016. UCA, Buenos Aires, Argentina.",
    "Curso de Capacitación Continua Régimen Jurídico del Automotor. Universidad de Ciencias Empresariales y Sociales. Abril 2015- Noviembre 2015.",
    "11° Congreso Nacional de Encargados de Registros – AAERPA. Universidad de Buenos Aires. Noviembre 2014.",
    "Curso de Capacitación Continua Régimen Jurídico del Automotor. Universidad de Ciencias Empresariales y Sociales. Abril 2014- Noviembre 2014.",
    "Curso de Comercio Exterior y Operatoria Aduanera. Capacitaciones Tres Arroyos. Abril-Julio 2014.",
    "'Clase abierta sobre Registros No Inmobiliarios'. Universidad Notarial Argentina. 27 de noviembre de 2013.",
    "Seminario 'Derecho Registral y Notarial para Abogados'. C.P.A.C.F. Octubre- Noviembre 2013.",
    "Curso para Inversores Bursátiles Nivel General. Fundación Bolsa de Comercio de Buenos Aires. Marzo - Abril 2010.",
    "Curso Introductorio al Mercado de Capitales. Fundación Bolsa de Comercio de Buenos Aires. 1 al 5 de Marzo de 2010.",
    "Conferencia 'Infracciones Aduaneras'. C.P.A.C.F. 12 de Noviembre de 2009.",
    "Conferencia 'Procedimientos Aduaneros'. C.P.A.C.F. 29 de Octubre de 2009.",
    "Curso 'Contratos Empresariales Modernos/Ciclo XXII'. C.P.A.C.F. Septiembre-Octubre 2009.",
    "Seminario 'El Dictamen de Precalificación Profesional y la Nueva Normativa de la I.G.J.'. C.P.A.C.F. 23 de Septiembre de 2009.",
    "Conferencia 'Proceso Concursal'. C.P.A.C.F. 15 de Mayo de 2009.",
    "Conferencia 'Medidas Cautelares en los Procesos Societarios'. C.P.A.C.F. 23 de Abril de 2009.",
    "Curso sobre Nuevas Normas de la I.G.J. Fundación para la Investigación y Desarrollo de las Ciencias Jurídicas. Septiembre- Noviembre 2008.",
    "Curso de Derecho Profundizado de la Empresa. U.C.E.S. Mayo-Noviembre 2007.",
    "Tercer Congreso de Derecho Aduanero. Administración Federal de Ingresos Públicos. 9,10 y 11 de mayo de 2007.",
    "Jornada de Impuesto a las Ganancias. Empresas y Sociedades. Ed. La Ley. 23 y 24 de abril de 2007.",
    "Seminario: Principios de Derecho Empresarial. Universidad de Palermo. 27 y 29 de marzo de 2007.",
    "Las Crisis Empresariales y el Derecho Concursal. Ed. La Ley. Octubre- Noviembre 2006."
  ];
  
  return (
    <>
      <BioText/>
      <ProfessionalDropdown title="Formación Profesional" items={professionalItems} />
      <ProfessionalDropdown title="Cursos de Capacitacion" items={courseItems} />
      <GalleryAndCarousel/>
    </>
  )
}

export default Bio