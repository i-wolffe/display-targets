const content = [
	{
		name: "Reducción de Electricidad",
        type: "1",
        target: "-10%",
        badge: "1",
        actions: [
            {
                name: "Instalación de Medidores de Energía UIEn",
                metric: "Pocentaje",
                objective: "100%",
                description: `Se tienen detectados en planta los equipos que por su alto consumo representan un uso significativo de 
                la energía, el propósito es instalar medidores de energía para monitorear su consumo en tiempo real por medio de 
                un sistema conectado de manera inalámbrica y poder tomar acciones correctivas inmediatas cuando estos equipos 
                incrementen su consumo de manera drástica o anormal.`
            },
            {
                name: "Implementar hibernación de equipos en el area de producción",
                metric: "Pocentaje",
                objective: "100%",
                description: `Cuando los equipos están fuera de uso la energía eléctrica y neumática sigue presente en el equipo, 
                por medio de un tablero de control y un arreglo electrónico se pretende programar los equipos de producción para que 
                automáticamente entren a un modo de cero consumo de energía.`
            },
            {
                name: "Instalación de un compresor de aire de alta eficiencia",
                metric: "Pocentaje",
                objective: "100%",
                description: `Uno de los equipos de mayor consumo en la planta es el compresor de aire, en 2024 se tiene programado 
                realizar la instalación de un nuevo compresor de 175 HPs de una eficiencia mayor el cual se espera tenga un impacto 
                positivo en el consumo de energía eléctrica.`
            },
            {
                name: "Apagado automatico de iluminación",
                metric: "Pocentaje",
                objective: "100%",
                description: `Implementación de un sistema electronico para realizar el apagado programado de la iluminación en planta
                cuando sea requerido el sistema actuará de manera automática para encender o apagar las lamparas.`
            },
            {
                name: "Iluminación externa (45 Electricas y 15 solares)",
                metric: "Pocentaje",
                objective: "100%",
                description: `Implementación de un sistema de iluminación solar en la periferia de la planta.`
            }
        ],
	},
    {
		name: "Reducción del Consumo de Agua",
        type: "1",
        target: "-20%",
        badge: "1",
        actions: [
            {
                name: "Instalación de Mingitorios Secos",
                metric: "Pocentaje",
                objective: "100%",
                description: `Para este punto se pretende reemplazar los actuales mingitorios de los baños de hombre los cuales son 
                drenados a base de agua, por mingitorios de tipo seco, estos mijitorios cuentan con una válvula especial que evita 
                los malos olores y por su diseño no requieren agua para su limpieza, el ahorro promedio de cada mingitorio es de 
                164 mil litros de agua al año, hoy en día nuestro consumo mensual de agua es de 14mil metros cúbicos mensuales promedio.`
            },
            {
                name: "Separación de líneas de agua sanitaria y tratada",
                metric: "Pocentaje",
                objective: "100%",
                description: `: En la planta contamos con un pozo de agua el cual extrae el agua que utilizamos para todos nuestros procesos, 
                desde 2022 contamos por parte del municipio la conexión a una de las líneas de agua tratada la cual llamamos línea morada, 
                esta agua si bien no es apta para consumo humano tiene la calidad suficiente para ser utilizada en procesos como limpieza, 
                riego, baños entre otros, esta agua hace que nuestro proceso sea sustentable al no tener que extraer agua cruda el pozo para 
                nuestros procesos, el proyecto consiste en realizar una línea independiente para conectar los sanitarios de planta.`
            },
            {
                name: "Recolección de condensados en aires acondicionados",
                metric: "Pocentaje",
                objective: "100%",
                description: `Una unidad de aire acondicionado genera hasta 10 litros de agua por hora en el proceso de condensado que se 
                genera durante la etapa de enfriamiento del aire, el proyecto consiste en recuperar esta agua y utilizarla para nuestros procesos.`
            },
            {
                name: "Implementación del 100% de lavadoras interconectadas a la linea morada",
                metric: "Pocentaje",
                objective: "100%",
                description: `El uso de agua tratada en las lavadoras de autoclaves disminuye el consumo directo de agua cruda de pozo.`
            },
        ],
	},
    {
		name: "Reducción de Gas Natural",
        type: "1",
        target: "-20%",
        badge: "1",
        actions: [
            {
                name: "Cambio de Gel",
                metric: "Pocentaje",
                objective: "100%",
                description: `Las lavadoras del área de vulcanizado utilizan vapor durante el lavado para eliminar el gel que utilizamos 
                como desmoldante en los mandriles, con el uso de un gel diferente a base agua podemos lavar las mangueras sin necesidad de 
                vapor ahorrando el 26% del vapor utilizado en planta.`
            },
        ]
    },
    {
		name: "Reducción de generación de Residuos Peligrosos",
        type: "1",
        target: "-10%",
        badge: "1",
        actions: [
            {
                name: "Investigación de lavado de copas de pintura y solvente en tampografías",
                metric: "Numerica",
                objective: "1",
                description: `Las estaciones de pintura son un foco rojo ante la generación de residuos peligrosos. Se investigará alternativas 
                para el lavado de copas, así como máquinas dosificadoras de pintura para tener un control de las porciones y evitar la generación 
                de residuos por exceso de mezcla en copa.`
            },
            {
                name: "Workshop con los talleres de producción para cultura de contaminación",
                metric: "Numerica",
                objective: "3",
                description: `Se realizarán talleres con apoyo de los APU para tener un entrenamiento activo con personal producción en temas 
                de cultura ambiental, propiciando la conciencia y sensibilización en el tema de generación de residuos, así como otros de 
                preservación del medio ambiente.`
            },
            {
                name: "Reducción de Frecuencia: Solvente de extrusión (exxol D-40)",
                metric: "OK / NOK",
                objective: "OK",
                description: `Otra fuente de generación de residuos peligrosos (RP) es el solvente sucio generado en extrusión, y los trapos 
                impregnados tras el TPM de las tinas de extrusión, al ampliarse los periodos de cambio del solvente estos sin que se vean 
                afectados otros aspectos con la calidad del material, evitarán la constante generación de RP.`
            },
            {
                name: "Evaluación de recipientes para reutilizar",
                metric: "Porcentaje",
                objective: "100%",
                description: `Fomentando el reusar y reciclar, se estará en una constante búsqueda en producción y almacenes para buscar un 
                segundo uso a recipientes y alargar su vida útil.`
            },
            {
                name: "Investigar proveedores para desechos actuales RME",
                metric: "OK / NOK",
                objective: "OK",
                description: `Sumando proyectos en temas de economía circular, se busca el "zero waste", promoviendo la optimización de recursos, 
                la reducción en el consumo de materias primas y el aprovechamiento de los residuos, reciclándolos o dándoles una nueva vida 
                para convertirlos en nuevos productos.`
            },
            {
                name: "Eficientar la entrega de trapos en almacén",
                metric: "Numerica",
                objective: "3",
                description: `Al tener un control en la entrega y cantidad de los trapos desde almacén de indirectos, 
                se verá restringido su uso deliberado en producción.`
            },
            {
                name: "Eliminar puntos de certificación en terminado como proceso normal",
                metric: "Porcentaje",
                objective: "<50%",
                description: `Los marcadores "unipaint" al terminar su vida útil en planta son desechados como RP, si se reduce la 
                cantidad de puntos de certificación por ende la tinta rendirá más, y se podría apreciar una disminución en este residuo.`
            },
            {
                name: "Realizar un análisis del proceso de segregación de RP desde celda",
                metric: "OK / NOK",
                objective: "OK",
                description: `Analizar la factibilidad de color un contenedor exclusivo para RP en cada celda, o identificar los 
                ya existentes, fomentando la segregación desde el área de trabajo. `
            },
        ]
    },
    {
		name: "Reducción de Emisiones de C02 por energía eléctrica",
        type: "1",
        target: "-10%",
        badge: "1",
        actions: [
            {
                name: "Compra de energía eléctria limpia",
                metric: "Porcentaje",
                objective: "100%",
                description: `Realizar la cotización y adquisición de energía limpia para reducir la huella de carbono de algunos 
                procesos y, por consecuencia, de la planta.`
            }
        ]
    },
    {
		name: "Infraestructura Digital",
        type: "2",
        target: "100%",
        badge: "2",
        actions: [
            {
                name: "Sistema de alamacenamiento de información",
                metric: "Porcentaje",
                objective: "100%",
                description: `Se requiere adquirir e instalar un sistema de almacenamiento para el manejo y seguimiento de la 
                información de poroducción que se encuentra en las APUs, para no saturar los equipos locales.`
            },
            {
                name: "Instalación de Red de Producción",
                metric: "Porcentaje",
                objective: "100%",
                description: `Instalar una red dedicada para que los dispositivos de producción puedan actualizar la información 
                de producción y consumo energético, y ésta información pueda ser consultada y analizada.`
            },
        ]
    },
    {
		name: "Digitaliazción de información",
        type: "2",
        target: "100%",
        badge: "2",
        actions: [
            {
                name: "Implementación de sistema e-Risk",
                metric: "Porcentaje",
                objective: "100%",
                description: `Adquirir e implementar este sistema para monitoreo de riesgos en tiempo real y a escala global.`
            },
            {
                name: "Implementación de sistema Ignition",
                metric: "Porcentaje",
                objective: "100%",
                description: `Adquirir e implementar este sistema para obtener y gestionar la información directamente de las APUs 
                y poder generar visualizadores para seguimiento por área.`
            },
            {
                name: "Implementación de sistema Qlik Sense",
                metric: "Porcentaje",
                objective: "100%",
                description: `Adquirir e implementar este sistema para monitoreo general de la planta, los procesos y el 
                personal.`
            },
        ]
    },
    {
		name: "Eficientar el control del proceso de producción",
        type: "3",
        target: "100%",
        badge: "2",
        actions: [
            {
                name: "Sistema centralizado de monitoreo de autoclaves",
                metric: "Pocentaje",
                objective: "100%",
                description: `Implementar un monitoreo de las autoclaves para conocer el estado en el que se encuentran continuamente 
                y así poder tomar acciones preventivas que no interfieran con el proceso de producción.`
            },
        ]
    },
    {
		name: "Eficientar los sistemas de gestión",
        type: "3",
        target: "100%",
        badge: "2",
        actions: [
            {
                name: "Desarrollar palataformas de auditorías digitales",
                metric: "OK / NOK",
                objective: "OK",
                description: `desarrollar una plataforma interna con el objetivo de reducir los tiempos para generar los reportes de 
                auditoría, eliminando el uso de papel, y todo lo que eso conlleva.`
            },
            {
                name: "Realizar auditorías digitales",
                metric: "Porcentaje",
                objective: "100%",
                description: `Cumplir con el programa de auditorías internas de los Sistemas de Gestión y Requisitos Legales.`
            },
            {
                name: "Actualizar el sistema de Preventeo",
                metric: "Porcentaje",
                objective: "100%",
                description: `Realizar las reevaluaciones de los análisis de riesgos de cada puesto de trabajo, incluyendo los 
                nuevos proyectos previo a su liberación en la plataforma de PREVENTEO, en cumplimiento a los requisitos legales 
                aplicables (maquinaría y equipo, equipo de protección personal, sustancias químicas, etc.)`
            },
        ]
    },

    {
		name: "Obtención de certificación ISO-45001",
        type: "1",
        target: "OK",
        badge: "3",
        actions: [
            {
                name: "Actualización del sistema de gestión",
                metric: "OK / NOK",
                objective: "OK",
                description: `Revisión del sistema de gestión para elevar el nivel de conciencia y robustecer los controles operacionales.`
            },
            {
                name: "Implementación de Comités de seguridad para procesimientos Claves",
                metric: "Numérica",
                objective: "10",
                description: `Formar equipos multidisciplinarios para actualizar el Sistema de Gestión, entre los procedimientos son 
                considerados diez: Corte y soldadura, Protección de caídas, Emergencias, Derrames, Sustancias Químicas, Bloqueo de Energía, 
                Guardas y dispositivos de seguridad, Equipo móvil, Espacios Confinados y finalmente Ergonomía.`
            },
            {
                name: "Cumplimiento de Requisito Legal",
                metric: "Porcentaje",
                objective: "90%",
                description: `mantener el cumplimiento de las leyes aplicables a Planta Celaya 2 (STPS, Protección Civil, 
                    Reglamento Federal de SST, Ley Federal del Trabajo, etc.)`
            },
            {
                name: "Implementación de Fase I / Fase II",
                metric: "OK / NOK",
                objective: "OK",
                description: `Auditoría de Certificación realizada en dos fases: Fase 1 – Revisión Documental para verificar la 
                suficiencia de la organización. Fase 2: Evaluación de la implementación, incluyendo la efectividad del Sistema de Gestión de 
                la organización.`
            },
        ]
    },
    {
		name: "Implementación interna de ISO-18788 (Seguridad Patrimonial) interno",
        type: "1",
        target: "OK",
        badge: "3",
        actions: [
            {
                name: "Desarrollo de procedimientos",
                metric: "OK / NOK",
                objective: "OK",
                description: ``
            },
            {
                name: "Implementación de sistemas",
                metric: "Auditorías",
                objective: "OK",
                description: ``
            },
            {
                name: "Desarrollo de auditoría interna",
                metric: "OK / NOK",
                objective: "OK",
                description: ``
            }
        ]
    },
];

export default content;
