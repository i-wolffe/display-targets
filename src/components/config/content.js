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
                description: `Realizar un estudio para conocer los motivos y el proceso del lavado de las copas para buscar
                eficientarlo .`
            },
            {
                name: "Workshop con los talleres de producción para cultura de contaminación",
                metric: "Numerica",
                objective: "3",
                description: `Llevar a cabo Workshops para concientizar al personal de los talleres de producción sobre la
                contaminación que se genera y las acciones que se deben tomar para mitigarla.`
            },
            {
                name: "Reducción de Frecuencia: Solvente de extrusión (exxol D-40)",
                metric: "OK / NOK",
                objective: "OK",
                description: `Disminuir la frecuencia de uso actual de 3 días a 1 mes para reducir el consumo del solvente.`
            },
            {
                name: "Evaluación de recipientes para reutilizar",
                metric: "Porcentaje",
                objective: "100%",
                description: `Evaluar el estado actual de recipientes para reciduos y utilizar aquellos que puedan ser reusados 
                para contener diferentes residuos.`
            },
            {
                name: "Investigar proveedores para desechos actuales RME",
                metric: "OK / NOK",
                objective: "OK",
                description: `Analizar distintas opciones con proveedores en la zona para el manejo de estos desechos.`
            },
            {
                name: "Eficientar la entrega de trapos en almacén",
                metric: "Numerica",
                objective: "3",
                description: `Modificar el procedimiento actual para lograr optimizar y contabilizar la entrega de este material.`
            },
            {
                name: "Eliminar puntos de certificación en terminado como proceso normal",
                metric: "Porcentaje",
                objective: "<50%",
                description: `Modificar la práctica que se tiene de marcar con puntos, para así disminuir el gasto en consumibles.
                ÚNICAMENTE llevar a cabo el proceso en casos de contenciones.`
            },
            {
                name: "Investigación del proceso de segregación de RP desde celda",
                metric: "OK / NOK",
                objective: "OK",
                description: `Realizar un análisis de las prácticas actuales que se tiene por celda para la segregación de Residuos 
                Peligrosos y buscar alternativas que faciliten el proceso.`
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
                description: `Adquirir e instalar un sistema de almacenamiento para el manejo y seguimiento de la información 
                de las APUs.`
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
                description: `Diseño y desarrollo de herramientas que faciliten la creación de formatos de auditoría y su llenado.`
            },
            {
                name: "Realizar auditorías digitales",
                metric: "Porcentaje",
                objective: "100%",
                description: `Migrar la realización de auditorías a las nuevas herramientas para poder guardar registros y 
                generar reportes.`
            },
            {
                name: "Actualizar el sistema de Preventeo",
                metric: "Porcentaje",
                objective: "100%",
                description: `Modificar la metodología actual para el sistema de Preventeo, para conseguir información más 
                acertada y mejores resultados.`
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
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            },
            {
                name: "Realización de Auditorías Cruzadas",
                metric: "Porcentaje",
                objective: "90%",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            },
            {
                name: "Implementación de Comités de seguridad para procesimientos Claves",
                metric: "Numérica",
                objective: "10",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            },
            {
                name: "Cumplimiento de rquisito legal",
                metric: "Porcentaje",
                objective: "90%",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            },
            {
                name: "Implementación de Fase I / Fase II",
                metric: "OK / NOK",
                objective: "OK",
                description: `Implementación de sistema de gestion ISO 45001 con el cual se.
                gestionan mejoras enfocadas al cuidado de la salud y seguridad ocupacional`
            },
        ]
    },
    {
		name: "Implementación interna de ISO-18788 (Seguridad Patrimonial)",
        type: "1",
        target: "OK",
        badge: "3",
        actions: [
            {
                name: "Desarrollo de procedimientos",
                metric: "OK / NOK",
                objective: "OK",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus.`
            },
            {
                name: "Implementación de sistemas",
                metric: "Auditorías",
                objective: "OK",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus..`
            },
            {
                name: "Desarrollo de auditoría interna",
                metric: "OK / NOK",
                objective: "OK",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. .`
            }
        ]
    },
];

export default content;
