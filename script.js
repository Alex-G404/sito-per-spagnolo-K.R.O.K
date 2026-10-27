// =========================================================
// 1. CURRENT STATE
// =========================================================
let currentLang = 'es';
let isNightMode = false;
let batteryLevel = 85;
let isDeployed = false;
let isSleeping = false;

// =========================================================
// 2. IDIOMS / MODI DI DIRE DICTIONARY (DAY VS. NIGHT)
// =========================================================
const robotIdioms = {
  es: {
    day: [
      "«¡Pan comido! La cocina ya está limpia, jefe.»",
      "«¡En un abrir y cerrar de ojos dejo tu salón como los chorros del oro!»",
      "«¡A quien madruga, K.R.O.K. le ayuda! Tus tortitas están listas.»",
      "«¡No hay mal que por bien no venga! Hoy limpio yo toda la casa.»"
    ],
    night: [
      "«Aquí no entra ni el Tato. Perímetro asegurado al 100%.»",
      "«Camarón que se duerme se lo lleva la corriente... pero mis cámaras térmicas nunca duermen.»",
      "«Más vale prevenir que curar: puertas blindadas y sensores activos.»",
      "«Ojo de halcón y mandíbula de caimán: nadie toca a esta familia.»"
    ]
  },
  it: {
    day: [
      "«È un gioco da ragazzi! Ho già lavato tutti i piatti, capo!»",
      "«Chi dorme non piglia pesci... ma tu riposa pure, oggi cucino io!»",
      "«Tutto liscio come l'olio! Pavimento pulito al 100%.»",
      "«Il mattino ha l'oro in bocca! La colazione è pronta in tavola.»"
    ],
    night: [
      "«Can che abbaia non morde... ma io sono un coccodrillo di titanio di due metri.»",
      "«Patti chiari, amicizia lunga: se sei un ladro, ti conviene correre!»",
      "«Non passa uno spillo! Porte bloccate e telecamere termiche attive.»",
      "«Uomo avvisato, mezzo salvato: perimetro domestico sotto controllo.»"
    ]
  },
  en: {
    day: [
      "«See you later, alligator! ...Wait, I AM an alligator. Time to vacuum!»",
      "«Easy peasy lemon squeezy! All the dishes are clean, boss!»",
      "«The early bird catches the worm, and I just made you fresh pancakes!»",
      "«Piece of cake! I lifted the sofa and cleaned every speck of dust.»"
    ],
    night: [
      "«Curiosity killed the cat... and my thermal sensors just locked onto the front door.»",
      "«Mess with the gator, you get the jaws later. Perimeter 100% secure.»",
      "«Better safe than sorry! Night vision active from 12 AM to 6 AM.»",
      "«Not on my watch! This house is locked down tighter than Fort Knox.»"
    ]
  }
};

// =========================================================
// 3. FULL WEBSITE TRANSLATIONS (ES / IT / EN)
// =========================================================
const translations = {
  es: {
    hud_cam: "REC // CAM 01A - SALÓN PRINCIPAL",
    hud_night: "NOCHE 1",
    hud_battery_label: "BATERÍA DEL SISTEMA:",
    chest_night: "GUARDIA 12AM",
    chest_day: "OK",
    nav_id: "1. Identificación",
    nav_desc: "2. Descripción",
    nav_func: "3. Funciones",
    nav_use: "4. Uso y Estación",
    nav_conc: "5. Conclusión",
    btn_night_mode: "Modo Guardia (12 AM)",
    btn_day_mode: "Modo Hogar (Día)",
    btn_sleep_mode: "Suspender",
    sleep_title: "SISTEMA EN SUSPENSIÓN (STANDBY)",
    sleep_sub: "A.G./TECH K.R.O.K.-02 en modo de ahorro energético. Circuitos hidráulicos en reposo.",
    sleep_battery_label: "BATERÍA DE RESERVA:",
    btn_wake_up: "Reactivar Sistema",
    sleep_hint: "Haz clic en cualquier parte o pulsa una tecla para despertar la unidad",
    badge_type1: "🏠 Robot Doméstico y de Seguridad",
    badge_type2: "🐊 Humanoide Animatrónico",
    badge_type3: "⚙️ Serie Réplica de Fábrica",
    hero_model_tag: "(\"MONTY-HOGAR\")",
    hero_desc: "El primer animatrónico inteligente de doble propósito. Por el día es un asistente doméstico amable que limpia y cocina; por la noche es un guardián de seguridad con inteligencia artificial que protege tu hogar.",
    btn_voice: "Cambiar Frase Típica",
    status_day: "☀️ MODO DÍA: ASISTENTE DOMÉSTICO",
    status_night: "🚨 12:00 AM: MODO GUARDIA NOCTURNA",
    visual_caption: "Vista frontal del modelo K.R.O.K.-02 con pantalla en el pecho y gafas térmicas.",
    sec2_tag: "SECCIÓN 02 // ESPECIFICACIONES FÍSICAS",
    sec2_title: "Descripción Física del Robot",
    sec2_subtitle: "Diseño industrial inspirado en los animatrónicos de fábrica de alta resistencia.",
    spec_size_title: "Tamaño",
    spec_size_desc: "Es un robot <strong>grande y alto</strong>. Mide exactamente <strong>2 metros de altura</strong> y pesa 150 kilos, pero se mueve en silencio.",
    spec_shape_title: "Forma",
    spec_shape_desc: "Tiene forma <strong>humanoide y de cocodrilo</strong>. Su torso es <strong>rectangular</strong> y fuerte, con una cabeza alargada y hombros anchos.",
    spec_color_title: "Colores",
    spec_color_desc: "Es de color <strong>verde esmeralda, amarillo dorado y morado</strong>. Tiene luces LED <strong>azules</strong> por el día y <strong>rojas</strong> por la noche.",
    swatch1_title: "Verde Original",
    swatch2_title: "Edición Dorada",
    swatch3_title: "Negro Táctico",
    spec_parts_title: "Partes del Cuerpo",
    spec_parts_desc: "Tiene dos <strong>brazos hidráulicos</strong> fuertes, <strong>piernas</strong> articuladas, una <strong>cola</strong> robótica para el equilibrio, una <strong>pantalla</strong> táctil en el pecho, <strong>antenas</strong> Wi-Fi y <strong>cámaras</strong> térmicas en sus gafas.",
    spec_mat_title: "Materiales",
    spec_mat_desc: "Por dentro tiene un endoesqueleto de <strong>metal (titanio)</strong> muy resistente. Por fuera está cubierto de <strong>plástico brillante</strong> y <strong>fibra de carbono</strong>.",
    sec3_tag: "SECCIÓN 03 // CAPACIDADES E INTELIGENCIA ARTIFICIAL",
    sec3_title: "Funciones y Capacidades Principales",
    sec3_subtitle: "¿Qué hace K.R.O.K.-02 y cómo ayuda a las personas todos los días?",
    verb_1: "1. LIMPIA",
    func1_title: "Limpia y ordena la casa",
    func1_desc: "<strong>Limpia</strong> el suelo, aspira el polvo y ordena las habitaciones rápidamente. Gracias a su fuerza, levanta sofás pesados para limpiar debajo sin esfuerzo.",
    verb_2: "2. COCINA",
    func2_title: "Cocina para toda la familia",
    func2_desc: "<strong>Cocina</strong> platos saludables y deliciosos. Usa la pantalla de su pecho para mostrar recetas y prepara el desayuno antes de que la familia se despierte.",
    verb_3: "3. PROTEGE",
    func3_title: "Protege el hogar por la noche",
    func3_desc: "<strong>Protege</strong> a las personas contra ladrones o peligros. Su inteligencia artificial reconoce las caras de la familia y bloquea las puertas si detecta a un intruso.",
    verb_4: "4. VIGILA",
    func4_title: "Vigila con cámaras térmicas",
    func4_desc: "<strong>Vigila</strong> toda la casa en la oscuridad con sus gafas infrarrojas. También <strong>cuida</strong> a los niños y a los ancianos, y avisa a los médicos si alguien se cae.",
    verb_5: "5. TRADUCE",
    func5_title: "Traduce y enseña idiomas",
    func5_desc: "<strong>Traduce</strong> conversaciones en tiempo real en español, italiano e inglés, y <strong>enseña</strong> a los estudiantes con sus divertidas frases típicas.",
    verb_6: "6. RECARGA",
    func6_title: "Recarga su batería solo",
    func6_desc: "Cuando tiene poca energía, <strong>vuelve</strong> automáticamente a su cápsula en la pared y <strong>recarga</strong> su batería al 100% en solo 20 minutos.",
    sec4_tag: "SECCIÓN 04 // ENTORNO Y ESTACIÓN TITANFALL",
    sec4_title: "¿Dónde, Cuándo y Quién lo Usa?",
    where_title: "¿Dónde funciona?",
    where_desc: "Funciona principalmente <strong>en casa</strong> (en la cocina, el salón, el jardín y el garaje), pero también funciona en <strong>hospitales, escuelas y fábricas</strong> gracias a su fuerza física.",
    when_title: "¿Cuándo se necesita?",
    when_desc: "Se necesita <strong>todos los días</strong>. Funciona <strong>por el día</strong> para hacer las tareas domésticas y <strong>por la noche (de 12:00 AM a 6:00 AM)</strong> o <strong>en emergencias</strong> para vigilar y proteger.",
    who_title: "¿Quién lo usa?",
    who_desc: "Lo usan <strong>las familias ocupadas</strong>, los <strong>estudiantes</strong> que necesitan ayuda, los <strong>ancianos</strong> que viven solos y los trabajadores de seguridad.",
    tf_tag: "TECNOLOGÍA DE CÁPSULA (ESTILO TITANFALL 2)",
    tf_title: "Estación de Recarga y Despliegue Rápido",
    tf_desc: "Cuando el robot no trabaja, permanece bloqueado en su estación vertical de pared con abrazaderas hidráulicas. Desde este panel puedes recargar su núcleo o desplegar la unidad en 2 segundos en caso de emergencia.",
    tf_btn_charge: "Recargar Núcleo (100%)",
    tf_btn_deploy: "Desplegar Unidad (Activar)",
    tf_btn_dock: "Guardar en Cápsula",
    pod_bay_title: "BAHÍA-02 // CÁPSULA VERTICAL",
    clamps_locked: "ABRAZADERAS: BLOQUEADAS 🔒",
    clamps_open: "ABRAZADERAS: ABIERTAS 🔓",
    pod_status_docked: "EN CÁPSULA / LISTO",
    pod_status_deployed: "UNIDAD DESPLEGADA 🚀",
    tf_battery_label: "ENERGÍA DEL NÚCLEO:",
    sec5_tag: "SECCIÓN 05 // NOTA DEL CREADOR",
    sec5_title: "Conclusión Personal",
    why_title: "¿Por qué he creado este robot?",
    why_desc: "He creado a <strong>K.R.O.K.-02</strong> porque me encantan los videojuegos como <em>Five Nights at Freddy's</em> y <em>Titanfall 2</em>, y quería transformar un robot que normalmente parece aterrador en un compañero útil, divertido y bueno que ayuda a las familias en casa y garantiza su seguridad.",
    fav_title: "¿Qué me gusta más de mi invención?",
    fav_desc: "Lo que más me gusta de mi invención es su <strong>doble personalidad</strong> (amable por el día para limpiar y cocinar, e imponente por la noche para proteger) y su <strong>estación de recarga vertical</strong> que despliega al robot en pocos segundos cuando alguien necesita ayuda.",
    footer_text: "Proyecto de Español — Presentación de Producto 'Mi Robot Ideal' | Faz-Tech Industries © 2026"
  },

  it: {
    hud_cam: "REC // CAM 01A - SALOTTO PRINCIPALE",
    hud_night: "NOTTE 1",
    hud_battery_label: "BATTERIA DI SISTEMA:",
    chest_night: "GUARDIA 12AM",
    chest_day: "OK",
    nav_id: "1. Identificazione",
    nav_desc: "2. Descrizione",
    nav_func: "3. Funzioni",
    nav_use: "4. Uso e Stazione",
    nav_conc: "5. Conclusione",
    btn_night_mode: "Modalità Guardia (12 AM)",
    btn_day_mode: "Modalità Casa (Giorno)",
    btn_sleep_mode: "Sospensione",
    sleep_title: "SISTEMA IN SOSPENSIONE (STANDBY)",
    sleep_sub: "A.G./TECH K.R.O.K.-02 in modalità a basso consumo energetico. Circuiti idraulici in riposo.",
    sleep_battery_label: "BATTERIA DI RISERVA:",
    btn_wake_up: "Riattiva Sistema",
    sleep_hint: "Fai clic ovunque o premi un tasto per riattivare l'unità",
    badge_type1: "🏠 Robot Domestico e di Sicurezza",
    badge_type2: "🐊 Umanoide Animatronico",
    badge_type3: "⚙️ Serie Replica di Fabbrica",
    hero_model_tag: "(\"MONTY-CASA\")",
    hero_desc: "Il primo animatronico intelligente a doppio scopo. Di giorno è un amichevole assistente domestico che pulisce e cucina; di notte è un guardiano di sicurezza con intelligenza artificiale che protegge la tua casa.",
    btn_voice: "Cambia Modo di Dire",
    status_day: "☀️ MODALITÀ GIORNO: ASSISTENTE DOMESTICO",
    status_night: "🚨 12:00 AM: MODALITÀ GUARDIA NOTTURNA",
    visual_caption: "Vista frontale del modello K.R.O.K.-02 con schermo sul petto e occhiali termici.",
    sec2_tag: "SEZIONE 02 // SPECIFICHE FISICHE",
    sec2_title: "Descrizione Fisica del Robot",
    sec2_subtitle: "Design industriale ispirato agli animatronici di fabbrica ad alta resistenza.",
    spec_size_title: "Dimensione",
    spec_size_desc: "È un robot <strong>grande e alto</strong>. Misura esattamente <strong>2 metri di altezza</strong> e pesa 150 chili, ma si muove in totale silenzio.",
    spec_shape_title: "Forma",
    spec_shape_desc: "Ha una forma <strong>umanoide e da coccodrillo</strong>. Il suo torso è <strong>rettangolare</strong> e robusto, con una testa allungata e spalle larghe.",
    spec_color_title: "Colori",
    spec_color_desc: "È di colore <strong>verde smeraldo, giallo dorato e viola</strong>. Ha luci LED <strong>azzurre</strong> di giorno e <strong>rosse</strong> di notte.",
    swatch1_title: "Verde Originale",
    swatch2_title: "Edizione Dorata",
    swatch3_title: "Nero Tattico",
    spec_parts_title: "Parti del Corpo",
    spec_parts_desc: "Ha due <strong>braccia idrauliche</strong> forti, <strong>gambe</strong> articolate, una <strong>coda</strong> robotica per l'equilibrio, uno <strong>schermo</strong> touch sul petto, <strong>antenne</strong> Wi-Fi e <strong>telecamere</strong> termiche negli occhiali.",
    spec_mat_title: "Materiali",
    spec_mat_desc: "All'interno ha un endoscheletro di <strong>metallo (titanio)</strong> molto resistente. All'esterno è ricoperto di <strong>plastica lucida</strong> e <strong>fibra di carbonio</strong>.",
    sec3_tag: "SEZIONE 03 // CAPACITÀ E INTELLIGENZA ARTIFICIALE",
    sec3_title: "Funzioni e Capacità Principali",
    sec3_subtitle: "Cosa fa K.R.O.K.-02 e come aiuta le persone tutti i giorni?",
    verb_1: "1. PULISCE",
    func1_title: "Pulisce e riordina la casa",
    func1_desc: "<strong>Pulisce</strong> il pavimento, aspira la polvere e riordina le stanze rapidamente. Grazie alla sua forza, solleva divani pesanti per pulire sotto senza sforzo.",
    verb_2: "2. CUCINA",
    func2_title: "Cucina per tutta la famiglia",
    func2_desc: "<strong>Cucina</strong> piatti sani e deliziosi. Usa lo schermo sul petto per mostrare le ricette e prepara la colazione prima che la famiglia si svegli.",
    verb_3: "3. PROTEGGE",
    func3_title: "Protegge la casa di notte",
    func3_desc: "<strong>Protegge</strong> le persone dai ladri o dai pericoli. La sua intelligenza artificiale riconosce i volti della famiglia e blocca le porte se rileva un intruso.",
    verb_4: "4. SORVEGLIA",
    func4_title: "Sorveglia con telecamere termiche",
    func4_desc: "<strong>Sorveglia</strong> tutta la casa al buio con i suoi occhiali a infrarossi. Inoltre <strong>si prende cura</strong> dei bambini e degli anziani e avvisa i medici se qualcuno cade.",
    verb_5: "5. TRADUCE",
    func5_title: "Traduce e insegna le lingue",
    func5_desc: "<strong>Traduce</strong> conversazioni in tempo reale in spagnolo, italiano e inglese, e <strong>insegna</strong> agli studenti con i suoi divertenti modi di dire.",
    verb_6: "6. RICARICA",
    func6_title: "Ricarica la batteria da solo",
    func6_desc: "Quando ha poca energia, <strong>torna</strong> automaticamente alla sua capsula a muro e <strong>ricarica</strong> la batteria al 100% in soli 20 minuti.",
    sec4_tag: "SEZIONE 04 // AMBIENTE E STAZIONE TITANFALL",
    sec4_title: "Dove, Quando e Chi lo Usa?",
    where_title: "Dove funziona?",
    where_desc: "Funziona principalmente <strong>a casa</strong> (in cucina, salotto, giardino e garage), ma funziona anche in <strong>ospedali, scuole e fabbriche</strong> grazie alla sua forza fisica.",
    when_title: "Quando serve?",
    when_desc: "Serve <strong>tutti i giorni</strong>. Funziona <strong>di giorno</strong> per fare le faccende domestiche e <strong>di notte (dalle 12:00 AM alle 6:00 AM)</strong> o <strong>nelle emergenze</strong> per sorvegliare e proteggere.",
    who_title: "Chi lo usa?",
    who_desc: "Lo usano <strong>le famiglie impegnate</strong>, gli <strong>studenti</strong> che hanno bisogno di aiuto, gli <strong>anziani</strong> che vivono da soli e gli addetti alla sicurezza.",
    tf_tag: "TECNOLOGIA A CAPSULA (STILE TITANFALL 2)",
    tf_title: "Stazione di Ricarica e Dispiegamento Rapido",
    tf_desc: "Quando il robot non lavora, rimane bloccato nella sua stazione verticale a parete con morsetti idraulici. Da questo pannello puoi ricaricare il nucleo o dispiegare l'unità in 2 secondi in caso di emergenza.",
    tf_btn_charge: "Ricarica Nucleo (100%)",
    tf_btn_deploy: "Dispiega Unità (Attiva)",
    tf_btn_dock: "Blocca nella Capsula",
    pod_bay_title: "BAIA-02 // RASTRELLIERA STALKER",
    clamps_locked: "MORSETTI: BLOCCATI 🔒",
    clamps_open: "MORSETTI: RILASCIATI 🔓",
    pod_status_docked: "IN CAPSULA / PRONTO",
    pod_status_deployed: "UNITÀ ATTIVA 🚀",
    tf_battery_label: "ENERGIA DEL NUCLEO:",
    sec5_tag: "SEZIONE 05 // NOTA DEL CREATORE",
    sec5_title: "Conclusione Personale",
    why_title: "Perché ho creato questo robot?",
    why_desc: "Ho creato <strong>K.R.O.K.-02</strong> perché amo i videogiochi come <em>Five Nights at Freddy's</em> e <em>Titanfall 2</em>, e volevo trasformare un robot che di solito sembra spaventoso in un compagno utile, divertente e buono che aiuta le famiglie in casa e garantisce la loro sicurezza.",
    fav_title: "Cosa mi piace di più della mia invenzione?",
    fav_desc: "Ciò che mi piace di più della mia invenzione è la sua <strong>doppia personalità</strong> (amichevole di giorno per pulire e cucinare, imponente di notte per proteggere) e la sua <strong>stazione di ricarica verticale</strong> che attiva il robot in pochi secondi quando qualcuno ha bisogno di aiuto.",
    footer_text: "Progetto di Spagnolo — Presentazione Prodotto 'Il Mio Robot Ideale' | Faz-Tech Industries © 2026"
  },

  en: {
    hud_cam: "REC // CAM 01A - MAIN LIVING ROOM",
    hud_night: "NIGHT 1",
    hud_battery_label: "SYSTEM BATTERY:",
    chest_night: "GUARD 12AM",
    chest_day: "OK",
    nav_id: "1. Identification",
    nav_desc: "2. Description",
    nav_func: "3. Functions",
    nav_use: "4. Usage & Pod",
    nav_conc: "5. Conclusion",
    btn_night_mode: "Guard Mode (12 AM)",
    btn_day_mode: "Home Mode (Day)",
    btn_sleep_mode: "Sleep Mode",
    sleep_title: "SYSTEM IN SLEEP MODE (STANDBY)",
    sleep_sub: "A.G./TECH K.R.O.K.-02 running on low power mode. Hydraulic circuits on standby.",
    sleep_battery_label: "BACKUP BATTERY:",
    btn_wake_up: "Wake Up System",
    sleep_hint: "Click anywhere or press any key to wake the unit",
    badge_type1: "🏠 Domestic & Security Robot",
    badge_type2: "🐊 Animatronic Humanoid",
    badge_type3: "⚙️ Factory Replica Series",
    hero_model_tag: "(\"MONTY-HOME\")",
    hero_desc: "The first dual-purpose smart animatronic. By day, a friendly home assistant that cleans and cooks; by night, an AI-powered security guardian that protects your home.",
    btn_voice: "Change Catchphrase",
    status_day: "☀️ DAY MODE: DOMESTIC ASSISTANT",
    status_night: "🚨 12:00 AM: NIGHT GUARD MODE",
    visual_caption: "Front view of the K.R.O.K.-02 model featuring a chest screen and thermal visor.",
    sec2_tag: "SECTION 02 // PHYSICAL SPECIFICATIONS",
    sec2_title: "Physical Description of the Robot",
    sec2_subtitle: "Heavy-duty industrial design inspired by factory-line animatronics.",
    spec_size_title: "Size",
    spec_size_desc: "It is a <strong>large and tall</strong> robot. It stands exactly <strong>2 meters tall</strong> and weighs 150 kg, yet moves silently.",
    spec_shape_title: "Shape",
    spec_shape_desc: "It has a <strong>humanoid crocodile</strong> shape. Its torso is <strong>rectangular</strong> and strong, with an elongated snout and broad shoulders.",
    spec_color_title: "Colors",
    spec_color_desc: "It is <strong>emerald green, golden yellow, and purple</strong>. It has <strong>blue</strong> LED lights by day and <strong>red</strong> lights at night.",
    swatch1_title: "Original Green",
    swatch2_title: "Golden Edition",
    swatch3_title: "Tactical Black",
    spec_parts_title: "Body Parts",
    spec_parts_desc: "It features two strong <strong>hydraulic arms</strong>, articulated <strong>legs</strong>, a robotic <strong>tail</strong> for balance, a chest <strong>touchscreen</strong>, Wi-Fi <strong>antennas</strong>, and thermal <strong>cameras</strong> in its visor.",
    spec_mat_title: "Materials",
    spec_mat_desc: "Inside, it has a heavy-duty <strong>metal (titanium)</strong> endoskeleton. Outside, it is covered in <strong>glossy plastic</strong> and <strong>carbon fiber</strong>.",
    sec3_tag: "SECTION 03 // AI & CAPABILITIES",
    sec3_title: "Main Functions and Capabilities",
    sec3_subtitle: "What does K.R.O.K.-02 do and how does it help people every day?",
    verb_1: "1. CLEANS",
    func1_title: "Cleans and tidies the house",
    func1_desc: "It <strong>cleans</strong> floors, vacuums dust, and tidies rooms quickly. Thanks to its strength, it lifts heavy sofas to clean underneath effortlessly.",
    verb_2: "2. COOKS",
    func2_title: "Cooks for the whole family",
    func2_desc: "It <strong>cooks</strong> healthy and delicious meals. It uses its chest screen to display recipes and prepares breakfast before the family wakes up.",
    verb_3: "3. PROTECTS",
    func3_title: "Protects the home at night",
    func3_desc: "It <strong>protects</strong> people against burglars or danger. Its AI recognizes family faces and locks the doors if it detects an intruder.",
    verb_4: "4. WATCHES",
    func4_title: "Monitors with thermal cameras",
    func4_desc: "It <strong>watches</strong> the entire house in the dark with infrared glasses. It also <strong>cares</strong> for kids and the elderly, alerting doctors if someone falls.",
    verb_5: "5. TRANSLATES",
    func5_title: "Translates and teaches languages",
    func5_desc: "It <strong>translates</strong> real-time conversations in Spanish, Italian, and English, and <strong>teaches</strong> students using fun local idioms.",
    verb_6: "6. RECHARGES",
    func6_title: "Recharges its own battery",
    func6_desc: "When low on energy, it automatically <strong>returns</strong> to its wall pod and <strong>recharges</strong> its battery to 100% in just 20 minutes.",
    sec4_tag: "SECTION 04 // ENVIRONMENT & TITANFALL POD",
    sec4_title: "Where, When, and Who Uses It?",
    where_title: "Where does it work?",
    where_desc: "It works mainly <strong>at home</strong> (in the kitchen, living room, garden, and garage), but also works in <strong>hospitals, schools, and factories</strong> thanks to its strength.",
    when_title: "When is it needed?",
    when_desc: "It is needed <strong>every day</strong>. It works <strong>during the day</strong> for household chores and <strong>at night (12:00 AM to 6:00 AM)</strong> or <strong>in emergencies</strong> to guard and protect.",
    who_title: "Who uses it?",
    who_desc: "It is used by <strong>busy families</strong>, <strong>students</strong> who need help, <strong>elderly people</strong> living alone, and security workers.",
    tf_tag: "WALL POD TECHNOLOGY (TITANFALL 2 STYLE)",
    tf_title: "Rapid Recharge & Deployment Station",
    tf_desc: "When off duty, the robot stays locked in its vertical wall rack with hydraulic clamps. From this panel you can recharge its core or deploy the unit in 2 seconds during an emergency.",
    tf_btn_charge: "Recharge Core (100%)",
    tf_btn_deploy: "Deploy Unit (Activate)",
    tf_btn_dock: "Dock in Pod",
    pod_bay_title: "BAY-02 // STALKER RACK",
    clamps_locked: "CLAMPS: LOCKED 🔒",
    clamps_open: "CLAMPS: RELEASED 🔓",
    pod_status_docked: "DOCKED / STANDBY",
    pod_status_deployed: "UNIT DEPLOYED 🚀",
    tf_battery_label: "CORE POWER:",
    sec5_tag: "SECTION 05 // CREATOR'S NOTE",
    sec5_title: "Personal Conclusion",
    why_title: "Why did I create this robot?",
    why_desc: "I created <strong>K.R.O.K.-02</strong> because I love video games like <em>Five Nights at Freddy's</em> and <em>Titanfall 2</em>, and I wanted to turn a robot that usually looks scary into a helpful, fun, and good companion that helps families at home and keeps them safe.",
    fav_title: "What do I like most about my invention?",
    fav_desc: "What I like most about my invention is its <strong>dual personality</strong> (friendly by day to clean and cook, badass by night to protect) and its <strong>vertical recharge station</strong> that deploys the robot in seconds when someone needs help.",
    footer_text: "Spanish Project — Product Launch 'My Ideal Robot' | Faz-Tech Industries © 2026"
  }
};

// =========================================================
// 4. FUNCTIONS: LANGUAGE, IDIOMS, NIGHT MODE, TITANFALL POD
// =========================================================

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(lang));
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.getElementById('swatch1').title = translations[lang].swatch1_title;
  document.getElementById('swatch2').title = translations[lang].swatch2_title;
  document.getElementById('swatch3').title = translations[lang].swatch3_title;

  updateDynamicLabels();
  nextIdiom(); // Refresh idiom line in the new language
}

function toggleNightMode() {
  isNightMode = !isNightMode;
  document.body.classList.toggle('night-mode', isNightMode);

  updateDynamicLabels();
  nextIdiom();
}

function updateDynamicLabels() {
  const t = translations[currentLang];
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const robotModeBadge = document.getElementById('robotModeBadge');
  const podStatusText = document.getElementById('podStatusText');
  const podClamps = document.getElementById('podClamps');
  const chestText = document.getElementById('chestScreenText');

  if (isNightMode) {
    modeToggleBtn.innerHTML = `☀️ <span>${t.btn_day_mode}</span>`;
    robotModeBadge.innerHTML = t.status_night;
    chestText.textContent = t.chest_night;
    chestText.setAttribute('fill', '#ff0033');
  } else {
    modeToggleBtn.innerHTML = `🌙 <span>${t.btn_night_mode}</span>`;
    robotModeBadge.innerHTML = t.status_day;
    chestText.textContent = `${t.chest_day} ${batteryLevel}%`;
    chestText.setAttribute('fill', '#00f5d4');
  }

  if (isDeployed) {
    podStatusText.innerHTML = t.pod_status_deployed;
    podClamps.textContent = t.clamps_open;
    podClamps.className = "clamp-open";
  } else {
    podStatusText.innerHTML = t.pod_status_docked;
    podClamps.textContent = t.clamps_locked;
    podClamps.className = "clamp-locked";
  }
}

// Cycles through idioms without speech synthesis audio
function nextIdiom() {
  const modeKey = isNightMode ? 'night' : 'day';
  const list = robotIdioms[currentLang][modeKey];
  const randomPhrase = list[Math.floor(Math.random() * list.length)];
  document.getElementById('speechBubble').textContent = randomPhrase;
}

// Change SVG Crocodile Armor Colors in Section 2
function changeArmorColor(mainColor, secondaryColor) {
  document.querySelectorAll('.armor-main').forEach(el => el.setAttribute('fill', mainColor));
  document.querySelectorAll('.armor-secondary').forEach(el => el.setAttribute('fill', secondaryColor));
}

// Titanfall 2 Station Functions
function chargeRobot() {
  batteryLevel = 100;
  updateBatteryUI();
}

function deployRobot() {
  isDeployed = true;
  if (batteryLevel > 15) batteryLevel -= 15;
  document.getElementById('podChamber').classList.add('deployed');
  updateBatteryUI();
  updateDynamicLabels();
}

function dockRobot() {
  isDeployed = false;
  document.getElementById('podChamber').classList.remove('deployed');
  updateDynamicLabels();
}

function updateBatteryUI() {
  document.getElementById('batteryPercent').textContent = `${batteryLevel}%`;
  document.getElementById('batteryBarFill').style.width = `${batteryLevel}%`;
  document.getElementById('hudBattery').textContent = `${batteryLevel}%`;
  const sleepBat = document.getElementById('sleepBatteryPercent');
  if (sleepBat) sleepBat.textContent = `${batteryLevel}%`;
  updateDynamicLabels();
}

// =========================================================
// 5. CARICAMENTO SISTEMA & TERMINALE DI LOGIN
// =========================================================

const bootLogs = [
  "Inizializzazione firmware animatronico...",
  "Calibrazione servomotori e mandibola...",
  "Sincronizzazione fotocamere termiche (CAM 01A)...",
  "Collegamento alla rastrelliera Titanfall Pod...",
  "Protocollo di sicurezza attivo. Autenticazione richiesta."
];

// Esegui la sequenza di caricamento al caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
  const isAlreadyAuthenticated = sessionStorage.getItem('krok_authenticated');
  
  if (isAlreadyAuthenticated === 'true') {
    const boot = document.getElementById('bootScreen');
    if (boot) boot.style.display = 'none';
  } else {
    startBootSequence();
  }

  // Risveglio premendo un tasto qualsiasi della tastiera quando in Sleep Mode
  window.addEventListener('keydown', () => {
    if (isSleeping) {
      wakeFromSleep();
    }
  });
});

function startBootSequence() {
  const bootBar = document.getElementById('bootBar');
  const bootLog = document.getElementById('bootLog');
  const bootLoader = document.getElementById('bootLoader');
  const securityTerminal = document.getElementById('securityTerminal');

  let progress = 0;
  let logIndex = 0;

  const interval = setInterval(() => {
    progress += 20;
    bootBar.style.width = `${progress}%`;

    if (logIndex < bootLogs.length) {
      bootLog.textContent = bootLogs[logIndex];
      logIndex++;
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        bootLoader.style.display = 'none';
        securityTerminal.style.display = 'block';
      }, 400);
    }
  }, 350); // ~1.7 secondi in totale
}

// Gestione form di login con credenziali
function handleLoginSubmit(event) {
  event.preventDefault();
  const empId = document.getElementById('empId').value.trim();
  const empPin = document.getElementById('empPin').value.trim();
  const feedback = document.getElementById('loginFeedback');

  if (empPin === '1987' || empPin === '1234' || empPin === '' || empId.toLowerCase() === 'krok') {
    unlockSystem(`Accesso accordato! Benvenuto, agente ${empId || 'K.R.O.K.'}`);
  } else {
    feedback.className = 'login-feedback error';
    feedback.textContent = '❌ CODICE ERRATO // Suggerimento: 1987';
  }
}

// Simulazione Scansione Passkey / Biometrica
function simulatePasskey() {
  const passkeyText = document.getElementById('passkeyText');
  const passkeyIcon = document.getElementById('passkeyIcon');
  const feedback = document.getElementById('loginFeedback');

  feedback.className = 'login-feedback';
  feedback.textContent = '⏳ Scansione sensore biometrico in corso...';
  passkeyIcon.textContent = '🔄';
  passkeyText.textContent = 'Verifica credenziale FIDO2...';

  setTimeout(() => {
    passkeyIcon.textContent = '✅';
    passkeyText.textContent = 'Passkey Confermata!';
    unlockSystem('Riconoscimento biometrico riuscito!');
  }, 1200);
}

// Bypass rapido per professore / ospite
function bypassLogin() {
  unlockSystem('Accesso ospite concesso.');
}

// Sblocco e dissolvenza dell'overlay
function unlockSystem(message) {
  const feedback = document.getElementById('loginFeedback');
  feedback.className = 'login-feedback success';
  feedback.textContent = `✔ ${message}`;

  sessionStorage.setItem('krok_authenticated', 'true');

  setTimeout(() => {
    const boot = document.getElementById('bootScreen');
    boot.classList.add('fade-out');
    setTimeout(() => {
      boot.style.display = 'none';
    }, 500);
  }, 800);
}

// =========================================================
// 6. FUNZIONI MODALITÀ SLEEP / STANDBY
// =========================================================

function enterSleepMode() {
  isSleeping = true;
  const overlay = document.getElementById('sleepOverlay');
  const sleepBattery = document.getElementById('sleepBatteryPercent');
  if (sleepBattery) sleepBattery.textContent = `${batteryLevel}%`;
  
  overlay.style.display = 'flex';
}

function wakeFromSleep() {
  if (!isSleeping) return;
  isSleeping = false;
  const overlay = document.getElementById('sleepOverlay');
  overlay.style.display = 'none';
}