const content = [
	{
		name: "Reducción de Electricidad",
        type: "1",
        target: "-10%",
        badge: "1",
        actions: [
            {
                name: "Instalación de Medidores de Energía",
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
		name: "Migración a sistema de recolección de datos digital",
        type: "2",
        target: "10",
        badge: "3",
        actions: [
            {
                name: "Métrica 1",
                metric: "Status",
                objective: "OK / NOK",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            },
            {
                name: "Métrica 2",
                metric: "Numérica",
                objective: "10",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            },
            {
                name: "Métrica 3",
                metric: "Porcentaje",
                objective: "100%",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet congue metus eu efficitur. 
                Sed sed eros risus. Aenean laoreet molestie nisl, sed vestibulum odio. Integer dictum, dui porttitor venenatis gravida, 
                est eros porttitor neque, vitae consectetur est arcu a metus.`
            }
        ]
    },
    {
		name: "Certificación ISO-45001",
        type: "1",
        target: "OK",
        badge: "2",
        actions: [
            {
                name: "Implementación de Fase 1 / 2",
                metric: "Status",
                objective: "OK / NOK",
                description: `Implementación de sistema de gestion ISO 45001 con el cual se.
                gestionan mejoras enfocadas al cuidado de la salud y seguridad ocupacional`
            },
            {
                
            }
        ]
    },
    {
		name: "MTTR Extrusión",
        type: "3",
        target: "Min",
        badge: "3",
        actions: [
            {
                name: "Reducción de tiempo",
                metric: "Tiempo",
                objective: "24 min",
                description: `MTTR Extrusión 24 minutos`
            }
        ]
    },
    {
		name: "MTTR Vulcanizado",
        type: "3",
        target: "Min",
        badge: "3",
        actions: [
            {
                name: "Reducción de tiempo",
                metric: "Tiempo",
                objective: "40 min",
                description: `MTTR Vulcanizado 40 minutos`
            }
        ]
    },
    {
		name: "MTTR Terminado",
        type: "3",
        target: "Min",
        badge: "3",
        actions: [
            {
                name: "Reducción de tiempo",
                metric: "Tiempo",
                objective: "29 min",
                description: `MTTR Terminado 29 minutos`
            }
        ]
    },
    {
		name: "MTBF Extrusión",
        type: "3",
        target: "Hrs",
        badge: "3",
        actions: [
            {
                name: "Tiempo",
                metric: "Tiempo",
                objective: "100 hrs",
                description: `MTBF Extrusión 100 horas`
            }
        ]
    },
    {
		name: "MTBF Vulcanizado",
        type: "3",
        target: "Hrs",
        badge: "3",
        actions: [
            {
                name: "Tiempo",
                metric: "Tiempo",
                objective: "40 min",
                description: `MTBF Vulcanizado 125`
            }
        ]
    },
    {
		name: "MTBF Terminado",
        type: "3",
        target: "Hrs",
        badge: "3",
        actions: [
            {
                name: "Tiempo",
                metric: "Tiempo",
                objective: "29 min",
                description: `MTBF Terminado 29 minutos`
            }
        ]
    },
];

export default content;
