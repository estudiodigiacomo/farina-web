
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const CARDS_COLLECTION = "cards";


export const getCards = async () => {
    try {
        const cardsCollection = collection(db, "cards");
        const snapshot = await getDocs(cardsCollection);
        const cards = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return cards;
    } catch (error) {
        console.error("Error fetching cards:", error);
        throw error;
    }
};


export const addCard = async (card) => {
    try {
        const cardsCollection = collection(db, CARDS_COLLECTION);
        await addDoc(cardsCollection, card);
        console.log("Card added successfully!");
    } catch (error) {
        console.error("Error adding card:", error);
        throw error;
    }
};


const cardData = [
    { id: 1, title: "Derecho Agrario y Agroalimentario", content: "La agricultura como fuente generadora de riqueza tiene características especiales cuya normativa se ve condicionada por factores económicos, sociales y ecológicos, entre otros. La agricultura sostenible requiere de la aplicación de políticas acordes con esos factores, cumpliendo con los acuerdos internacionales existentes, regionales o binacionales que obligan o recomiendan la adopción y ejecución de medidas aplicables a la actividad agropecuaria y a toda la cadena agroalimentaria.La Dra. Farina brinda asesoramiento legal integral para que las diversas actividades que se encuentran incluidas en la agricultura sostenible y en la producción pecuaria sostenible, se lleven a cabo de forma tal que mejoren la seguridad alimentaria, la salud humana, vegetal y animal, propiciando el bienestar animal, que resulten económicamente rentables y que no pongan en riesgo la conservación de los recursos suelo, agua, los recursos genéticos, la flora y la fauna. Asimismo, asiste legalmente a sus clientes en todas las etapas de la cadena de valor de la producción agraria y alimentaria, para dar cumplimiento con el principio de garantía de inocuidad relativo a los productos que se incorporan al mercado en cualquier forma de agronegocio y en materia de responsabilidad por productos elaborados. Brinda asesoramiento en cuestiones regulatorias a nivel provincial y nacional", banner: "src/assets/img/areas/derecho-agrario.webp" },
    { id: 2, title: "Agronegocios y Derecho Agroindustrial", content: "La Dra. Farina entiende las necesidades de sus clientes en asuntos relacionados en negocios agropecuarios. Asiste a clientes locales que realizan producción primaria y agroindustrial. El agronegocio abarca los negocios vinculados a la producción primaria de materias primas destinadas a alimentos y energía, y las cuestiones jurídicas derivadas de la agroindustria, comprendiendo las distintas etapas desde la producción hasta la industrialización de cada producto. Para atender las necesidades de cada cliente, ofrece asesoramiento legal y consultoría permanente para el sector productivo y el industrial en las diferentes ramas del derecho, siendo el régimen jurídico de los agronegocios transversal a todo el andamiaje jurídico, por cuánto comprende al derecho agrario y abarca cuestiones civiles, (como contratos, daños y perjuicios, etc.) comerciales, laborales, aduaneras, ambientales, etc. Abarca tanto el derecho público como el privado, de aplicación al ámbito territorial nacional, provincial y municipal.", banner: "src/assets/img/areas/agroindustrial.webp" },
    { id: 3, title: "Derecho Civil y Comercial", content: "La Dra. Farina tiene una amplia experiencia en litigios, habiendo intervenido en procesos contenciosos, brindando trabajo de asesoría, cuestiones previas al procedimiento, negociaciones, redacción de cláusulas de resolución de conflictos y representación durante la totalidad del proceso judicial. Los principales temas civiles abordados son sucesiones, planificación sucesoria, daños y perjuicios por accidente de tránsito, mala práxis médica, incumplimiento contractual, entre otros, trámites de usucapión, división de condominio, ejecución hipotecaria y prendaria. Es corresponsal en Tres Arroyos del estudio FVR abogados, apoderados de compañías de seguro de primera línea y diferentes empresas fabricantes, importadoras y distribuidoras. En materia comercial, intervine en procesos por cobro de facturas, juicios ejecutivos, concursos y quiebras, y asuntos bancarios.", banner: "src/assets/img/areas/derecho-civil.webp" },
    { id: 4, title: "Derecho Bancario y Financiero", content: "La Dra. Farina fue colaboradora del estudio ABAL-DANS, apoderados del Banco de Corrientes S.A., y trabajó para estudio corresponsal en Tres Arroyos, en representación del Banco Patagonia S.A. Su asesoramiento involucra temas de defensa del consumidor, juicios ejecutivos, juicios ordinarios, verificaciones de crédito, ejecuciones hipotecarias y prendarias, en otros.", banner: "src/assets/img/areas/bancario y financiero.webp" },
    { id: 5, title: "Derecho Laboral", content: "La Dra. Farina posee una amplia experiencia en litigios individuales y procedimientos administrativos ante las autoridades gubernamentales. Asimismo, brinda asesoramiento laboral a empresas locales. Interviene en juicios por accidentes de trabajo, por ante los tribunales laborales y la Comisión Médica correspondiente. Entre sus servicios ofrece consultoría permanente, en especial de carácter preventivo, y atención de conflictos laborales que su susciten en el marco de la ley de contrato de trabajo, el régimen especial de contrato de trabajo para el personal de casas particulares, y en especial, en el régimen jurídico del trabajo agrario.", banner: "src/assets/img/areas/laboral.webp" },
    { id: 6, title: "Recursos Naturales y Derecho Ambiental", content: "La Dra. Farina se encuentra altamente comprometida con la conservación de los recursos naturales, la aplicación de la normativa ambiental y la creación de negocios sustentables. Participa activamente en dos Institutos de Derecho Ambiental. El derecho ambiental es un derecho que transversalmente atraviesa todos los sectores productivos y de conservación, de ahí la importancia de aplicarlo a toda actividad económica. La evolución de la materia ambiental obliga a las empresas a tenerla especialmente en consideración previamente en las decisiones vinculadas a las transacciones comerciales, dando particular atención al cumplimiento normativo ambiental, y a propender a la reducción y eliminación de las contingencias ambientales en el desarrollo de actividades productivas. Para el cumplimiento de dicho objetivo, brinda asesoramiento preventivo, gestión de conflictos y atiende litigios ambientales, ofrece asistencia a clientes en la realización de estudios de impacto ambiental y tramitación de permisos ambientales y capacitación en materia ambiental. Cuenta con un grupo interdisciplinario de profesionales que efectúan servicios de consultoría legal-ambiental y monitoreo ambiental, ayudando a los clientes a detectar y prevenir contingencias civiles, penales y administrativas. Asimismo, asesora jurídicamente para que la agricultura sostenible se lleve a cabo permitiendo la viabilidad de la diversidad biológica y de los agroecosistemas, y aumentando la resiliencia al cambio climático y a los desastres naturales", banner: "src/assets/img/areas/recursos-naturales.webp" },
    { id: 7, title: "Derecho a la Salud", content: "La Dra. Farina durante su desarrollo profesional ha adquirido experiencia profesional en litigios, y solución de conflictos vinculados al derecho a la salud, por haber sido colaboradora durante tres años consecutivos en un estudio jurídico que representa a empresas de salud y medina prepaga. Los temas abordados han sido mala praxis médica, defensa del consumidor, cobro de facturas a proveedores, litigios laborales, entre otros. También asiste a sus clientes ofreciendo el servicio de reclamos por vía de amparo de salud.", banner: "Banner 3" },
    { id: 8, title: "Defensa del Consumidor", content: "La Dra. Farina brinda asesoramiento integral en materia de defensa del consumidor por reclamos extrajudiciales efectuados por el consumidor, ya sean ante la autoridad competente o ante la misma empresa o proveedor del servicio.  Asiste a sus clientes en audiencias ante las distintas autoridades competentes. ", banner: "src/assets/img/areas/salud.webp" },
    { id: 9, title: "Contratos", content: "La Dra. Farina asesora en la redacción de cláusulas contractuales acordes con el modelo de negocio a emprender, buscando la optimización de los recursos según las necesidades del cliente, que comprende las etapas de negociación, celebración, ejecución y finalización del contrato. Especialmente brinda asesoramiento legal para negocios y contratos del agro.", banner: "src/assets/img/areas/contratos.webp" },
    { id: 10, title: "Inmobiliario y Construcción", content: "La Dra. Farina asesora en materia de proyectos inmobiliarios, atendiendo a las necesidades de sus clientes, forma equipos interdisciplinarios para brindar asesoramiento eficiente y con valor agregado. Asesoramiento y análisis regulatorio específico en asuntos de progreso urbano, acordes al ordenamiento territorial, propiciando el desarrollo sostenible. Asimismo, brinda asesoramiento legal para la adquisición de inmuebles urbanos y rurales, principalmente en relación a límites y restricciones al dominio. Interviene en la confección de boletos de compraventa. Se desempeña como docente de segunda en la cátedra de Derecho Notarial Ambiental.", banner: "src/assets/img/areas/inmobiliario-y-contruccion.webp" },
];

