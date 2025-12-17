
export const IMAGES = {
    intro: "/oracion-todos-los-dias.png",
    hollyFamily: "/holly-family.png",
    virgen: "/virgen-maria.png",
    sanJose: "/san-jose-bunuelo.png",
    nino: "/bebe-jesus.png",
    gozos: "/gozos.png",
    villancicos: "/villancicos.png",
    family: "/family-1.png",
    family2: "/family-2.png",
    family3: "/family-3.png"
};

export const DATA = {
    oracionTodosDias: {
        titulo: "Oración para Todos los Días",
        imagen: IMAGES.intro,
        texto: `<p class="mb-4">Benignísimo Dios de infinita caridad, que tanto amasteis a los hombres, que les disteis en vuestro Hijo la mejor prenda de vuestro amor, para que hecho hombre en las entrañas de una Virgen naciese en un pesebre para nuestra salud y remedio; yo, en nombre de todos los mortales, os doy infinitas gracias por tan soberano beneficio.</p>
        <p class="mb-4">En retorno de él os ofrezco la pobreza, humildad y demás virtudes de vuestro Hijo humanado, suplicándoos por sus divinos méritos, por las incomodidades en que nació y por las tiernas lágrimas que derramó en el pesebre, que dispongáis nuestros corazones con humildad profunda, con amor encendido, con tal desprecio de todo lo terreno, para que Jesús recién nacido tenga en ellos su cuna y more eternamente.</p>
        <p>Amén.</p>
        <p class="mt-4 text-center italic text-sm text-gray-600">(Se reza tres veces el Gloria al Padre)</p>`
    },
    oracionVirgen: {
        titulo: "Oración a la Santísima Virgen",
        imagen: IMAGES.virgen,
        texto: `<p class="mb-4">Soberana María, que por vuestras grandes virtudes y especialmente por vuestra humildad, merecisteis que todo un Dios os escogiese por madre suya, os suplico que vos misma preparéis y dispongáis mi alma y la de todos los que en este tiempo hiciesen esta novena, para el nacimiento espiritual de vuestro adorado Hijo.</p>
        <p class="mb-4">¡Oh dulcísima madre!, comunicadme algo del profundo recogimiento y divina ternura con que lo aguardasteis vos, para que nos hagáis menos indignos de verle, amarle y adorarle por toda la eternidad.</p>
        <p>Amén.</p>
        <p class="mt-4 text-center italic text-sm text-gray-600">(Se reza nueve veces el Avemaría)</p>`
    },
    oracionSanJose: {
        titulo: "Oración a San José",
        imagen: IMAGES.sanJose,
        texto: `<p class="mb-4">¡Oh santísimo José, esposo de María y padre putativo de Jesús! Infinitas gracias doy a Dios porque os escogió para tan altos ministerios y os adornó con todos los dones proporcionados a tan excelente grandeza. Os ruego, por el amor que tuvisteis al Divino Niño, me abracéis en fervorosos deseos de verle y recibirle sacramentalmente, mientras en su divina esencia le veo y le gozo en el cielo.</p>
        <p>Amén.</p>
        <p class="mt-4 text-center italic text-sm text-gray-600">(Se reza el Padrenuestro, el Avemaría y el Gloria)</p>`
    },
    gozosData: {
        coro: "Dulce Jesús mío, mi niño adorado, ¡Ven a nuestras almas! ¡Ven no tardes tanto!",
        imagen: IMAGES.gozos,
        estrofas: [
            {
                texto: "¡Oh Sapiencia suma del Dios soberano, que a nivel de un niño te hayas rebajado! ¡Oh Divino Infante, ven para enseñarnos la prudencia que hace verdaderos sabios!",
                significado: "Celebra la sabiduría infinita de Dios que, siendo todopoderoso ('suma sapiencia'), elige por amor hacerse pequeño y frágil como un niño. Nos recuerda que la verdadera sabiduría no está en el poder, sino en la humildad y la sencillez."
            },
            {
                texto: "¡Oh Adonai potente que Moisés hablando, de Israel al pueblo diste los mandatos! ¡Ah, ven prontamente para rescatarnos, y que un niño débil muestre brazo fuerte!",
                significado: "'Adonai' es el nombre hebreo de Dios como Señor y Legislador. Esta estrofa recuerda el poder de Dios al dar la Ley a Moisés en el Sinaí, y contrasta ese poder aterrador con la tierna fuerza del Niño Jesús que viene a salvarnos no con truenos, sino con amor."
            },
            {
                texto: "¡Oh raíz sagrada de Jesé que en lo alto presentas al orbe tu fragante nardo! ¡Dulcísimo Niño que has sido llamado Lirio de los Valles, Bella flor del campo!",
                significado: "Jesé fue el padre del Rey David. Aquí se reconoce a Jesús como el fruto prometido de ese linaje real (la 'raíz'), cumpliendo las profecías. Se usan metáforas florales (nardo, lirio) para exaltar su belleza espiritual y pureza."
            },
            {
                texto: "¡Llave de David que abre al desterrado las cerradas puertas de regio palacio! ¡Sácanos, Oh Niño con tu blanca mano, de la cárcel triste que labró el pecado!",
                significado: "Jesús es la 'Llave' que tiene la autoridad para reabrir las puertas del Cielo (el 'regio palacio') que el pecado de la humanidad había cerrado. Es un clamor por la libertad espiritual y el perdón."
            },
            {
                texto: "¡Oh Lumbre de Oriente, sol de eternos rayos, que entre las tinieblas tu esplendor veamos! ¡Niño tan precioso, dicha del cristiano, luzca la sonrisa de tus dulces labios!",
                significado: "Se compara a Jesús con el sol naciente ('Oriente'). Así como el sol disipa la noche, Jesús llega para iluminar la oscuridad del mundo y de nuestras conciencias, trayendo la alegría ('dicha') de una nueva esperanza."
            },
            {
                texto: "¡Espejo sin mancha, santo de los santos, sin igual imagen del Dios soberano! ¡Borra nuestras culpas, salva al desterrado y en forma de niño, da al mísero amparo!",
                significado: "Jesús es el reflejo perfecto ('espejo') de la bondad de Dios Padre. Al llamarlo 'sin mancha', invocamos su pureza perfecta para que limpie nuestras propias manchas (culpas) y proteja a los desamparados."
            },
            {
                texto: "¡Rey de las naciones, Emmanuel preclaro, De Israel anhelo Pastor del rebaño! ¡Niño que apacientas con suave cayado ya la oveja arisca, ya el cordero manso!",
                significado: "Emmanuel significa 'Dios con nosotros'. Aquí se le ve como el Pastor Universal que une a todos los pueblos. Su liderazgo no es violento, sino suave, guiando tanto a los rebeldes ('oveja arisca') como a los fieles ('cordero manso')."
            },
            {
                texto: "¡Ábranse los cielos y llueva de lo alto bienhechor rocío como riego santo! ¡Ven hermoso Niño, ven Dios humanado! ¡Luce, hermosa estrella, brota flor del campo!",
                significado: "Basado en una profecía de Isaías (Rorate caeli). Pedimos que la salvación caiga del cielo como una lluvia suave ('rocío') que devuelve la vida a la tierra seca. Es la súplica de una humanidad sedienta de Dios."
            },
            {
                texto: "¡Ven, que ya María previene sus brazos, do su niño vean, en tiempo cercano! ¡Ven, que ya José, con anhelo sacro, se dispone a hacerse de tu amor sagrario!",
                significado: "Esta estrofa nos conecta con la emoción humana de María y José. Nos invita a imitar su ansiosa espera y preparación. Ellos son los primeros 'sagrarios' (lugares donde habita Dios) y modelos de acogida."
            },
            {
                texto: "¡Del débil auxilio, del doliente amparo, consuelo del triste, luz del desterrado! ¡Vida de mi vida, mi dueño adorado, mi constante amigo, mi divino hermano!",
                significado: "Una declaración íntima de lo que Jesús significa para el creyente: ayuda en la debilidad, consuelo en la tristeza y, sobre todo, un 'divino hermano' que se hace cercano a nuestro sufrimiento."
            },
            {
                texto: "¡Ven ante mis ojos, de ti enamorados! ¡Bese ya tus plantas! ¡Bese ya tus manos! ¡Prosternado en tierra, te tiendo los brazos, y aún más que mis frases, te dice mi llanto!",
                significado: "Es el clímax emocional de la oración. Expresa un deseo profundo de adoración física y entrega total. Las lágrimas aquí no son de tristeza, sino de emoción incontenible por el encuentro con lo Divino."
            },
            {
                texto: "Niño del pesebre, nuestro Dios y hermano, tú sabes y entiendes del dolor humano; que cuando suframos dolores y angustias, siempre recordemos que nos has salvado.",
                significado: "Resalta la cercanía de Jesús con el sufrimiento humano. Al hacerse hombre, Dios no es ajeno a nuestro dolor, sino que lo comparte y nos da esperanza en los momentos de angustia."
            },
            {
                texto: "Bajaste del cielo, te hiciste un esclavo, para liberarnos de toda opresión. Todos somos hijos del Padre celeste y todos hermanos: familia de Dios.",
                significado: "Enfatiza la igualdad fundamental de todos los seres humanos. Al hacerse 'esclavo' (servidor), Jesús rompe las cadenas de la opresión y nos recuerda que nuestra mayor dignidad es ser hijos de un mismo Padre."
            },
            {
                texto: "Haz de nuestra patria una gran familia; siembra en nuestro suelo tu amor y tu paz. Danos fe en la vida, danos esperanza y un amor sincero que nos una más.",
                significado: "Una oración patriótica por la unidad nacional. Pide sanar las divisiones del país ('nuestro suelo') a través de las virtudes teologales: fe, esperanza y caridad (amor sincero)."
            },
            {
                texto: "Tú te hiciste niño en una familia llena de ternura y calor humano. Vivan los hogares, aquí congregados, el gran compromiso del amor cristiano.",
                significado: "Exalta el valor de la familia como núcleo de la sociedad y de la fe. Bendice a los hogares presentes y les recuerda que su misión principal es vivir y transmitir el amor cristiano."
            },
            {
                texto: "¡Ven Salvador nuestro por quien suspiramos. ¡Ven a nuestras almas, Ven no tardes tanto!",
                significado: "El resumen final de la Novena. Toda la historia humana y el deseo personal se condensan en este último suspiro: la necesidad urgente de que el Salvador venga a habitar en nosotros."
            }
        ]
    },
    oracionNino: {
        titulo: "Oración al Niño Jesús",
        imagen: IMAGES.nino,
        texto: `<p class="mb-4">Acordaos, ¡oh dulcísimo Niño Jesús!, que dijisteis a la venerable Margarita del Santísimo Sacramento, y en persona suya a todos vuestros devotos, estas palabras tan consoladoras para nuestra pobre humanidad agobiada y doliente: "Todo lo que quieras pedir, pídelo por los méritos de mi infancia y nada te será negado".</p>
        <p class="mb-4">Llenos de confianza en vos, ¡oh Jesús!, que sois la misma verdad, venimos a exponeros toda nuestra miseria. Ayúdanos a llevar una vida santa, para conseguir una eternidad bienaventurada. Concédenos por los méritos infinitos de vuestra encarnación y de vuestra infancia, la gracia de la cual necesitamos tanto.</p>
        <p class="mb-4">Nos entregamos a vos, ¡oh Niño omnipotente!, seguros de que no quedará frustrada nuestra esperanza, y de que en virtud de vuestra divina promesa, acogeréis y despacharéis favorablemente nuestra súplica.</p>
        <p>Amén.</p>`
    },
    dias: [
        {
            dia: 1, fecha: "16 de Diciembre", titulo: "Día Primero", subtitulo: "El Verbo Eterno", texto: `En el principio de los tiempos\nel Verbo reposaba en el seno de\nsu Padre en lo más alto de los\ncielos; allí era la causa, a la par\nque el modelo de toda la creación.\nEn esas profundidades de una\nincalculable eternidad permanecía\nel Niño de Belén antes de que se\ndignara bajar a la tierra y tomara\nvisiblemente posesión de la gruta\nde Belén. Allí es donde debemos\nbuscar sus principios que jamás\nhan comenzado; de allí debemos\ndatar la genealogía de lo eterno,\nque no tiene antepasados y\ncontemplar la vida de complacencia\ninfinita que allí llevaba.\nLa vida del Verbo eterno en el\nseno de su Padre era una vida\nmaravillosa y sin embargo,\n¡misterio sublime!, busca otra\nmorada, una mansión creada. No\nera porque en su mansión eterna\nfaltase algo a su infinita felicidad,\nsino porque su misericordia\ninfinita anhelaba la redención y\nla salvación del género humano,\nque sin Él no podría verificarse.\nEl pecado de Adán había ofendido a\nDios y esa ofensa infinita no podía\nser condonada sino por los méritos\ndel mismo Dios. La raza de Adán\nhabía desobedecido y merecido un\ncastigo eterno; era pues necesario\npara salvarla y satisfacer su\nculpa, que Dios, sin dejar el cielo,\ntomase la forma del hombre sobre\nla tierra y con la obediencia a los\ndesignios de su Padre expiase\naquella desobediencia, ingratitud y\nrebeldía. Era necesario, en las miras\nde su amor, que tomase la forma,\nlas debilidades e ignorancias\nsistemáticas del hombre; que\ncreciese para darle crecimiento\nespiritual; que sufriese, para\nenseñarle a morir a sus pasiones\ny a su orgullo. Y por eso el Verbo\neterno, ardiendo en deseos de salvar\nal hombre, resolvió hacerse hombre\ntambién y así redimir al culpable.`
        },
        {
            dia: 2, fecha: "17 de Diciembre", titulo: "Día Segundo", subtitulo: "La Encarnación", texto: `El verbo eterno se halla a punto de\ntomar su naturaleza creada en la\nsanta casa de Nazaret, en donde\nmoraban María y José. Cuando la\nsombra del decreto divino vino a\ndeslizarse sobre ella, María estaba\nsola y engolfada en la oración.\nPasaba las silenciosas horas de la\nnoche en la unión más estrecha\ncon Dios; y mientras oraba, el Verbo\ntomó posesión de su morada creada.\nSin embargo, no llegó\ninopinadamente: antes de\npresentarse envió a un mensajero,\nque fue el Arcángel San Gabriel para\npedir a María de parte de Dios su\nconsentimiento para la encarnación.\nEl creador no quiso efectuar ese\ngran misterio sin la aquiescencia de\nsu criatura.\nAquel momento fue muy solemne:\nera potestativo en María rehusar...\nCon qué adorables delicias, con qué\ninefable complacencia aguardaría\nla Santísima Trinidad a que María\nabriese los labios y pronunciase el\n“sí” que debió ser suave melodía\npara sus oídos, y con el cual se\nconformaba su profunda humildad\na la omnipotente voluntad divina.\nLa Virgen Inmaculada ha dado\nsu asentimiento. El arcángel ha\ndesaparecido. Dios se ha revestido\nde una naturaleza creada; la\nvoluntad eterna está cumplida y la\ncreación completa. En las regiones\ndel mundo angélico estalla el júbilo\ninmenso, pero la Virgen María\nni le oía ni le hubiese prestado\natención a él. Tenía inclinada la\ncabeza y su alma estaba sumida\nen el silencio que se asemejaba al\nde Dios. El Verbo se había hecho\ncarne, y aunque todavía invisible\npara el mundo, habitaba ya entre\nlos hombres que su inmenso\namor había venido a rescatar.\nNo era ya solo el Verbo eterno,\nera el Niño Jesús revestido de la\napariencia humana, y justificando ya\nel elogio que de Él han hecho todas\nlas generaciones en llamarle el más\nhermoso de los hijos de los hombres.`
        },
        {
            dia: 3, fecha: "18 de Diciembre", titulo: "Día Tercero", subtitulo: "El Niño en el Seno de María", texto: `Así había comenzado su vida\nencarnada el Niño Jesús.\nConsideremos el alma gloriosa y el\nsanto cuerpo que había tomado,\nadorándolos profundamente.\nAdmirado en el primer lugar\nen el alma de ese Divino Niño,\nconsiderarnos en ella la plenitud\nde su gracia santificadora; la de su\nciencia beatífica, por lo cual desde\nel primer momento de su vida vio la\ndivina esencia más claramente que\ntodos los ángeles y leyó lo pasado\ny lo por venir con todos sus arcanos\nconocimientos. No supo por\nadquisición nada que no supiese\npor infusión desde el primer\nmomento de su ser, pero Él adoptó\ntodas las enfermedades de nuestra\nnaturaleza a que dignamente podía\nsometerse, aun cuando no fuese\nnecesario para la grande obra\nque debía cumplir. Pidámosle que\nsus divinas facultades suplan la\ndebilidad de las nuestras y les den\nnueva energía; que su memoria nos\nenseñe a recordar sus beneficios,\nsu entendimiento a pensar en Él, su\nvoluntad a no hacer sino lo que Él\nquiere y en servicio suyo.\nDel alma del Niño Jesús pasemos\nahora a su cuerpo, que era un\nmundo de maravillas, una obra\nmaestra de la mano de Dios. No era,\ncomo el nuestro, una traba para el\nalma; era, por el contrario, un nuevo\nelemento de\nsantidad. Quiso\nque fuese\npequeño y débil\ncomo el de los\nniños, y sujeto\na todas las\nincomodidades\nde la\ninfancia, para\nasemejarse más a nosotros\ny participar de nuestras\nhumillaciones. El Espíritu Santo\nformó ese cuerpecillo divino con\ntal delicadeza y tal capacidad de\nsentir, que pudiese sufrir el exceso\npara cumplir la grande obre de\nnuestra redención.\nLa belleza de ese cuerpo divino fue\nsuperior a cuanto se ha imaginado\njamás; la divina sangre que por sus\nvenas empezó a circular desde el\nmomento de la encarnación es la\nque lava todas las manchas del\nmundo culpable.\nPidámosle que lave las nuestra en\nel sacramento de la penitencia,\npara que el día de su Navidad nos\nencuentre purificados, perdonados\ny dispuestos a recibirle con amor y\nprovecho espiritual.`
        },
        {
            dia: 4, fecha: "19 de Diciembre", titulo: "Día Cuarto", subtitulo: "La Humildad de Jesús", texto: `Desde el seno de su madre\ncomenzó el Niño Jesús a poner\nen práctica su entera sumisión a\nDios, que continuó sin la menor\ninterrupción durante toda su vida.\nAdoraba a su Eterno Padre, le\namaba, se sometía a su voluntad,\naceptaba con resignación el estado\nen que se hallaba conociendo toda\nsu debilidad, toda su humillación,\ntodas sus incomodidades.\n¿Quién de nosotros quisiera\nretroceder a un estado semejante\ncon el pleno goce de la razón y\nde la reflexión?, ¿quién pudiera\nsostener a sabiendas un martirio\ntan prolongado, tan penoso de\ntodas maneras?. Por ahí entró\nel Divino Niño en su dolorosa y\nhumilde carrera; así empezó a\nanonadarse delante de su Padre,\na enseñarnos lo que Dios merece\npor parte de su criatura, a expiar\nnuestro orgullo, origen de todos\nnuestros pecados, y hacemos\nsentir toda la criminalidad\ny desórdenes del orgullo.\nDeseamos hacer una verdadera\noración; empecemos por\nformarnos de ella una exacta idea\ncontemplando al Niño en el seno\nde su madre, El Divino Niño ora\ny ora del modo más excelente.\nNo habla, no medita ni se deshace\nen tiernos afectos. Su mismo\nestado, aceptado con la intención\nde honrar a Dios, es su oración y\nese estado expresa altamente todo\nlo que Dios merece y de qué modo\nquiere ser adorado por nosotros.\nUnámonos a las oraciones del\nNiño Dios en el seno de María,\nunámonos al profundo abatimiento\ny sea este el primer afecto de\nnuestro sacrificio a Dios. Démonos\na Dios, no para ser algo como lo\npretende continuamente nuestra\nvanidad, sino para ser nada, para\nquedar eternamente consumidos\ny anonadados, para renunciar\na la estimulación de nosotros\nmismos, a todo cuidado de nuestra\ngrandeza aunque sea espiritual,\na todo movimiento de vanagloria.\nDesaparezcamos a nuestros propios\nojos y que Dios sólo sea todo para\nnosotros.`
        },
        {
            dia: 5, fecha: "20 de Diciembre", titulo: "Día Quinto", subtitulo: "La Vida de María", texto: `Ya hemos visto la vida que llevaba\nel Niño Jesús en el seno de su\npurísima Madre; veamos hoy\ntoda la vida que llevaba también\nMaría durante el mismo espacio\nde tiempo. Necesidad hoy de que\nno tengamos en ella si queremos\ncomprender, en cuanto es posible\na nuestra limitada capacidad,\nlos sublimes misterios de la\nencarnación y el modo como hemos\nde corresponder a ellos.\nMaría no cesaba de aspirar por el\nmomento en que gozaría de esa\nvisión beatífica terrestre; la faz de\nDios encarnado. Estaba a punto de\nver aquella faz humana que debía\niluminar el cielo durante toda la\neternidad, iba a leer el amor filial\nen aquellos mismos ojos cuyos\nrayos deberían esparcir para\nsiempre la felicidad en millones\nde elegidos. Iba a ver aquel rostro\ntodos los días, a todas horas, cada\ninstante, durante muchos años. Iba\na verle en la ignorancia aparente\nde la infancia, en los encantos\nparticulares de la juventud y en\nla serenidad reflexiva de la edad\nmadura... Haría todo lo que quisiese\nde aquella faz divina; podría\nestrecharla contra la suya con toda\nla libertad del amor materno; cubrir\nde besos los labios que deberían\npronunciar la sentencia a todos los\nhombres; contemplarla a su gusto\ndurante su sueño o despierta,\nhasta que la hubiese aprendido de\nmemoria...¡Cuán ardientemente\ndeseaba ese día!\nTal era la expectativa de María...\nera inaudita en sí misma, mas\nno por eso dejaba de ser el tipo\nmagnífico de toda la vida cristiana.\nNo nos contentemos con admirar a\nJesús residiendo en María, sino por\nesencia, potencia y presencia.\nSí, Jesús nace continuamente\nen nosotros y de nosotros, por\nlas buenas obras que nos hace\ncapaces de cumplir y por nuestra\ncooperación a la gracia; de manera\nque el alma del que se halla en\ngracia es un seno perpetuo de\nMaría, un Belén interior sin fin.\nDespués de la comunión, Jesús\nhabita en nosotros durante algunos\ninstantes, real y sustancialmente\ncomo Dios y como hombre, porque\nel mismo Niño que estaba en María\nestá también en el Santísimo\nSacramento. ¿Qué es todo esto\nsino una participación de la vida\nde María durante esos maravillosos\nmeses, y una expectativa llena de\ndelicias como la suya?`
        },
        {
            dia: 6, fecha: "21 de Diciembre", titulo: "Día Sexto", subtitulo: "El Viaje a Belén", texto: `Jesús había sido concebido en\nNazaret, domicilio de José y\nMaría, y allí era de creerse que\nhabía de nacer, según todas las\nprobabilidades. Mas Dios lo tenía\ndispuesto de otra manera y los\nprofetas habían anunciado que el\nmesías nacería en Belén de Judá,\nciudad de David.\nPara que se cumpliese esa\npredicción, Dios se sirvió de\nun medio que no parecía tener\nninguna relación con este objeto,\na saber la orden dada por el\nemperador Augusto, que todos los\nsúbditos del imperio romano se\nempadronasen en el lugar de donde\neran originarios. María y José, como\ndescendientes que eran de David,\nno estaban dispensados de ir a\nBelén. Ni la situación de la Virgen\nSantísima ni la necesidad en que\nestaba José del trabajo diario que\nles aseguraba la subsistencia, pudo\neximirles de este largo y penoso\nviaje, en la estación más rigurosa e\nincómoda del año.\nNo ignora Jesús en qué lugar debe\nnacer e inspira a sus padres que\nse entreguen a la Providencia, y\nque de esta manera concurran\ninconscientemente a la ejecución\nde los designios. Almas interiores,\nobservad este manejo del Divino\nNiño, porque es el más importante\nde la vida espiritual; aprended que\nquien se haya entregado a Dios ya\nno ha de pertenecerse a sí mismo,\nni ha de querer a cada instante\nsino lo que Dios quiera para él;\nsiguiéndole ciegamente aun en\nlas cosas exteriores, tales como el\ncambio de lugar donde quiera que le\nplazca conducirle. Ocasión tendréis\nde observar esta dependencia y\nfidelidad inviolable en toda la vida\nde Jesucristo, y este es el punto\nsobre el cual se han esmerado en\nimitarle los santos y las almas\nverdaderamente interiores,\nrenunciando absolutamente a su\npropia voluntad.`
        },
        {
            dia: 7, fecha: "22 de Diciembre", titulo: "Día Séptimo", subtitulo: "La Llegada a Belén", texto: `Representémonos el viaje de\nMaría y José hacia Belén, llevando\nconsigo, aún no nacido, al Creador\ndel universo hecho hombre.\nContemplemos la humanidad y la\nobediencia de este Divino Niño que\naunque de raza judía y habiendo\namado durante siglos a su pueblo\ncon una predilección inexplicable,\nobedece así a un príncipe extranjero\nque forma el censo de población de\nsu provincia, como si hubiese para\nÉl en esa circunstancia algo que le\nhalagase, y quisiese apresurarse a\naprovechar la ocasión de hacerse\nempadronar oficial y auténticamente\ncomo súbdito en el momento en\nel que venía al mundo. ¿No es\nextraño que la humillación, que\ncausa tan invencible repugnancia\na la criatura, parezca ser la única\ncosa creada que tenga atractivos\npara el Creador? ¿No nos enseñará\nla humildad de Jesús a amar esa\nhermosa virtud?.\n¡Ah...!Que llegue el\nmomento en que aparezca\nel deseado de las naciones,\nporque todo clama por\neste feliz acontecimiento,\nEl mundo, sumido en la\noscuridad y el malestar\nbuscando y no encontrando\nel alivio de sus males,\nsuspira por su Libertador.\nEl anhelo de José, la\nexpectativa de María, son cosa\nque no puede expresar el lenguaje\nhumano. El Padre Eterno se halla,\nsi es lícito emplear esta expresión\nadorablemente impaciente por dar\na su Hijo único al mundo, y verle\nocupar su puesto entre las criaturas\nvisibles.\nEl Espíritu Santo arde en deseos\nde presentar a la luz del día esta\nsanta humanidad tan bella que El\nmismo ha formado con tan especial\ny divino esmero. En cuando al\nDivino Niño, objeto de tantos\nanhelos, recordemos que hacia\nnosotros avanza lo mismo que hacia\nBelén. Apresuremos con nuestro\ndeseo el momento de su llegada,\npurifiquemos nuestras almas para\nque sean su mística morada, y\nnuestros corazones para que sean su\nManis terrenal, que nuestros actos\nde mortificación desprendimiento\n“preparen los caminos del Señor y\nhagan rectos sus senderos”.`
        },
        {
            dia: 8, fecha: "23 de Diciembre", titulo: "Día Octavo", subtitulo: "La Búsqueda de Posada", texto: `Llegan a Belén José y María,\nbuscando hospedaje en los\nmesones; pero no lo encuentran\nya por hallarse todo ocupado, ya\nporque se les desechase a causa de\nsu pobreza. Empero, puede turbar\nla paz interior de los que están\nfijos en Dios. Si José experimentaba\nsorpresa cuando era rechazado\nde casa en casa, porque pensaba\nen María y en el Niño, sonríase\ntambién con tanta tranquilidad\ncuando fijaba sus miradas en\nsu casta esposa. El niño aún no\nnacido regocijábase de aquellas\nnegativas que eran el preludio de\nsus humillaciones venideras. Cada\nvoz áspera, el nido de cada puerta\nque se cerraba ante ellos, era lo\nque había venido a buscar. El deseo\nde esas humillaciones era lo que\nhabía contribuido a hacerle tomar\nla forma humana.\n¡Oh Divino Niño de Belén! Estos\ndías que tantos han pasado en\nfiestas y diversiones o descansando\nmuellemente en cómodas y ricas\nmansiones, han sido para vuestros\npadres un día de fatiga y vejaciones\nde toda clase. ¡Ay! El espíritu de Belén\nes el de un mundo que ha olvidado\na Dios. ¡Cuántas veces no ha sido\ntambién el nuestro! ¿No cerramos\ncontinuamente con ruda ignorancia\nla puerta a los llamamientos de\nDios, que nos solicita convertirnos,\no santificarnos o conformarnos con\nsu voluntad? ¿No hacemos mal uso\nde nuestras penas, desconociendo\nsu carácter celestial con que cada\nuno a su modo lo lleva grabado en\nsi? Dios viene a nosotros muchas\nveces en la vida, pero no conocemos\nsu faz, o le reconocemos hasta que\nnos vuelve la espalda y se aleja\ndespués de nuestra negativa.\nSe pone el sol de 24 de diciembre\ndetrás de los tejados de Belén y\nsus últimos rayos doran las cimas\nde las rocas escarpadas que lo\nrodean. Hombres groseros codean\nrudamente al Señor en las calles de\naquella aldea oriental, y cierran sus\npuertas al ver a su madre, la bóveda\nde los cielos aparece purpurina\npor encima de aquellas colinas\nfrecuentadas por los pastores. Las\nestrellas van apareciendo una tras\notra. Algunas horas más y aparecerá\nel Verbo eterno.`
        },
        {
            dia: 9, fecha: "24 de Diciembre", titulo: "Día Noveno", subtitulo: "El Nacimiento de Jesús", texto: `La noche ha cerrado del todo en\nlas campiñas de Belén. Desechados\npor los hombres, y viéndose sin\nabrigo, María y José han salido\nde la inhospitalaria población y\nse han refugiado en una gruta\nque se encontraba al pie de la\ncolina. Seguía a la reina de los\nángeles el jumento que le había\nservido de humilde cabalgadura\ndurante el viaje, y en aquella cueva\nhallaron un manso buey, dejado\nallí probablemente por alguno de\nlos caminantes que habían ido a\nbuscar hospedaje en la ciudad.\nEl Divino Niño, desconocido por\nsus criaturas racionales, va a tener\nque acudir a loas irracionales para\nque calienten con su tibio aliento\nla atmósfera helada de esa noche\nde invierno, y le manifiesten con\nesto y con su humilde actitud el\nrespeto y la adoración que le había\nnegado Belén. La rojiza linterna\nque José tiene en la mano ilumina\ntenuemente ese pobrísimo recinto,\nese pesebre lleno de paja que es\nfigura profética de las maravillas\ndel altar, y de la íntima y prodigiosa\nunión eucarística que Jesús ha\nde contraer con los hombres.\nMaría está en adoración en medio\nde la gruta, y así van pasando\nsilenciosamente las horas de esa\nnoche llena de misterio.\nPero ha llegado la medianoche,\ny de repente vemos dentro de\nese pesebre, poco antes vacío, al Divino Niño esperado, vaticinado,\ndeseado durante cuatro mil años\ncon inefable anhelo.\nA sus pies se postra su Santísima\nMadre, en los transportes de una\nadoración de la cual nada puede dar\nidea. José también se acerca y le\nrinde el homenaje con que inaugura\nsu misterioso e imponderable oficio\nde padre adoptivo del Redentor de\nlos hombres.\nLa multitud de ángeles que\ndesciende de los cielos a contemplar\nesa maravilla sin par, dejan estallar\nsu alegría y hacen vibrar en los\naires las armonías de ese Gloria\nin Excelsis que es el eco de la\nadoración que se produce en torno\ndel Altísimo, hecha perceptible\npor un instante a los oídos de la\npobre tierra. Convocados por ellos,\nvienen en tropel los pastores de la\ncomarca a adorar al recién nacido y\npresentarle sus humildes ofrendas.\nYa brilla en oriente la misteriosa\nestrella de Jacob, y ya se pone en\nmarcha hacia Belén la caravana\nespléndida de los Reyes Magos,\nque dentro de pocos días vendrán\na depositar a los pies del Divino\nNiño el oro, el incienso, y la mirra,\nque son símbolos de la caridad, la\nadoración y la mortificación.\n¡Oh adorado Niño! Nosotros\ntambién, los que hemos hecho\nesta novena para prepararnos al\ndía de vuestra Navidad, queremos\nofreceros nuestra pobre adoración.\n¡No la rechacéis! ¡Ven a nuestras\nalmas, venid a nuestros corazones\nllenos de amor!\nEncended en ellos la devoción\na vuestra santa infancia, no\nintermitente y sólo circunscrita\nal tiempo de vuestra Navidad,\nsino siempre y en todos los\ntiempos; devoción que fielmente\npracticada y celosamente\npropagada, nos conduzca a la vida\neterna, librándonos del pecado\ny sembrando nosotros todas las\nvirtudes cristianas.`
        }
    ],
    villancicos: [
        {
            titulo: "Tutaina",
            letra: `(Coro)\nTutaina tuturuma\nTutaina tuturumaina\nTutaina tuturuma, turuma\nTutaina tuturumaina.\n\nLos pastores de Belén\nVienen a adorar al Niño;\nLa Virgen y San José\nLos reciben con cariño.\n(Coro)\n\nTres reyes vienen también\nCon incienso, mirra y oro,\nA ofrendar a Dios su Bien\nComo el más grande tesoro.\n(Coro)`
        },
        {
            titulo: "Anton Tiruliru Liru",
            letra: `(Coro)\nAntón tiruliru liru\nAntón tiruliru la\nAntón tiruliru liru\nAntón tiruliru la\n\nJesús al pesebre\nVamos a adorar\nJesús al pesebre\nVamos a adorar.\n\nDuérmete Niño chiquito\nQue la noche viene ya;\nCierra pronto tus ojitos\nQue el viento te arrullará.\n(Coro)`
        },
        {
            titulo: "Los Peces en el Río",
            letra: `La Virgen se está peinando\nEntre cortina y cortina\nLos cabellos son de oro\nY el peine de plata fina.\n\n(Coro)\nPero mira cómo beben los peces en el río\nPero mira cómo beben por ver al Dios nacido\nBeben y beben y vuelven a beber\nLos peces en el río por ver a Dios nacer.`
        },
        {
            titulo: "Mi Burrito Sabanero",
            letra: `Con mi burrito sabanero, voy camino de Belén\nCon mi burrito sabanero, voy camino de Belén\n\nSi me ven, si me ven, voy camino de Belén\nSi me ven, si me ven, voy camino de Belén\n\nEl lucerito mañanero ilumina mi sendero\nEl lucerito mañanero ilumina mi sendero\n\nSi me ven, si me ven, voy camino de Belén\nSi me ven, si me ven, voy camino de Belén\n\n(Coro)\nTuqui tuqui tuqui tuqui, Tuqui tuqui tuqui ta\nApúrate mi burrito que ya vamos a llegar\nTuqui tuqui tuqui tuqui, Tuqui tuqui tuqui ta\nApúrate mi burrito vamos a ver a Jesús.`
        }
    ]
};
