const content = [
	{
		name: "Reducción de Electricidad",
        target: "-10%",
        actions: [
            {
                name: "Instalacion de Medidores de energia",
                description: `Se tienen detectados en planta los equipos que por su alto consumo representan un uso significativo de 
                la energía, el propósito es instalar medidores de energía para monitorear su consumo en tiempo real por medio de 
                un sistema conectado de manera inalámbrica y poder tomar acciones correctivas inmediatas cuando estos equipos 
                incrementen su consumo de manera drástica o anormal.`
            },
            {
                name: "Implementar hibernación de equipos en el area de producción",
                description: `Cuando los equipos están fuera de uso la energía eléctrica y neumática sigue presente en el equipo, 
                por medio de un tablero de control y un arreglo electrónico se pretende programar los equipos de producción para que 
                automáticamente entren a un modo de cero consumo de energía.`
            },
            {
                name: "Instalación de un compresor de aire de alta eficiencia",
                description: `Uno de los equipos de mayor consumo en la planta es el compresor de aire, en 2024 se tiene programado 
                realizar la instalación de un nuevo compresor de 175 HPs de una eficiencia mayor el cual se espera tenga un impacto 
                positivo en el consumo de energía eléctrica.`
            }
        ],
	},
    {
		name: "Reducción del Consumo de Agua",
        target: "-20%",
        actions: [
            {
                name: "Instalacion de Mingitorios Secos",
                description: `Para este punto se pretende reemplazar los actuales migitorios de los baños de hombre los cuales son 
                drenados a base de agua, por migitorios de tipo seco, estos mijitorios cuentan con una válvula especial que evita 
                los malos olores y por su diseño no requieren agua para su limpieza, el ahorro promedio de cada mingitorio es de 
                164 mil litros de agua al año, hoy en día nuestro consumo mensual de agua es de 14mil metros cúbicos mensuales promedio.`
            }
        ],
	}
];

export default content;
