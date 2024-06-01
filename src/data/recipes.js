const recipes = [
    {
        id: 1,
        title: 'Pasta al Pomodoro',
        category: 'Primi piatti',
        ingredients: ['pasta', 'pomodori', 'basilico', 'olio', 'sale'],
        instructions: [
            'Cuocere la pasta in acqua salata bollente seguendo le istruzioni sulla confezione.',
            'Preparare il sugo di pomodoro facendo rosolare dell\'aglio in olio extravergine di oliva, quindi aggiungere i pomodori pelati e il basilico. Cuocere per circa 20 minuti a fuoco medio-basso, schiacciando i pomodori con una forchetta e aggiungendo sale e pepe a piacere.',
            'Scolare la pasta al dente e condirla con il sugo preparato. Mescolare bene e servire calda, guarnendo con foglie di basilico fresco e un filo di olio extravergine di oliva.'
        ],
        image: 'https://i.ibb.co/fdndZnd/Pasta-Sugo.jpg',
        preparation: 10,
        cookTime: 20, // in minuti
        servings: 4, // numero di persone
    },
    {
        id: 2,
        title: 'Tiramisù',
        category: 'Dolci', // Categoria aggiunta
        ingredients: ['savoiardi', 'caffè', 'mascarpone', 'uova', 'zucchero', 'cacao'],
        instructions: [
            'Preparare il caffè e lasciarlo raffreddare.',
            'Separare gli albumi dai tuorli. In una ciotola, sbattere i tuorli con lo zucchero fino a ottenere un composto chiaro e spumoso. Aggiungere il mascarpone e mescolare fino a ottenere una crema omogenea.',
            'Montare gli albumi a neve ferma e incorporarli delicatamente al composto di mascarpone.',
            'Inzuppare i savoiardi nel caffè e sistemarli in uno stampo da tiramisù. Coprire con uno strato di crema al mascarpone. Ripetere l\'operazione fino a esaurimento degli ingredienti, terminando con uno strato di crema.',
            'Coprire lo stampo con pellicola trasparente e mettere in frigorifero per almeno 4 ore, meglio se tutta la notte.',
            'Prima di servire, spolverare la superficie con cacao amaro in polvere.'
        ],
        image: 'https://i.ibb.co/f1rx7rr/Tiramisu.jpg',
        preparation: "20-25",
        cookTime: "//",
        servings: 6,
    },
    {
        id: 3,
        title: 'Risotto ai Funghi',
        category: 'Primi piatti', // Categoria aggiunta
        ingredients: ['riso', 'funghi', 'brodo vegetale', 'parmigiano', 'cipolla', 'burro', 'olio', 'sale', 'pepe'],
        instructions: [
            'Tagliare finemente la cipolla e farla soffriggere in una padella con un po\' di olio e burro.',
            'Aggiungere i funghi puliti e tagliati a fettine. Farli rosolare fino a quando non perdono il liquido di vegetazione.',
            'Aggiungere il riso e tostarlo per qualche minuto mescolando continuamente.',
            'Versare un mestolo di brodo vegetale caldo sul riso e mescolare finché il liquido non viene assorbito.',
            'Continuare ad aggiungere il brodo, un mestolo alla volta, e mescolare frequentemente fino a cottura completa del risotto (circa 18-20 minuti).',
            'A cottura ultimata, mantecare il risotto con il parmigiano grattugiato e una noce di burro. Regolare di sale e pepe secondo gusto.',
            'Servire caldo, guarnendo con qualche fogliolina di prezzemolo fresco se desiderato.'
        ],
        image: 'https://i.ibb.co/SNgTDYS/Risotto-Funghi.jpg',
        preparation: "15-20",
        cookTime: "18-20",
        servings: 4,
    },
    {
        id: 4,
        title: 'Lasagne alla Bolognese',
        category: 'Primi piatti', // Categoria aggiunta
        ingredients: ['lasagne', 'ragù', 'besciamella', 'parmigiano', 'olio', 'sale'],
        instructions: [
            'Preparare il ragù di carne seguendo la ricetta tradizionale, utilizzando carne macinata, passata di pomodoro, sedano, carota, cipolla, vino rosso e aromi.',
            'Preparare la besciamella facendo sciogliere il burro in una pentola, aggiungere la farina e cuocere per qualche minuto. Aggiungere il latte caldo poco alla volta, mescolando continuamente fino a ottenere una crema densa e omogenea. Insaporire con sale e pepe.',
            'In una teglia da forno, alternare strati di pasta per lasagne, ragù di carne, besciamella e parmigiano grattugiato, fino ad esaurimento degli ingredienti. Terminare con uno strato di besciamella e parmigiano.',
            'Infornare in forno preriscaldato a 180°C per circa 30-40 minuti, o fino a quando la superficie risulta dorata e croccante.',
            'Lasciar riposare per alcuni minuti prima di servire, in modo che le lasagne si compattino leggermente.'
        ],
        image: 'https://i.ibb.co/MR6F4Mt/Lasagne-Bolognesi.jpg',
        preparation: "30-40",
        cookTime: "30-40",
        servings: 6,
    },
    {
        id: 5,
        title: 'Insalata Caprese',
        category: 'Antipasti', // Categoria aggiunta
        ingredients: ['pomodori', 'mozzarella', 'basilico', 'olio', 'sale', 'pepe'],
        instructions: [
            'Lavare i pomodori e tagliarli a fette spesse.',
            'Tagliare la mozzarella a fette sottili.',
            'Disporre alternativamente su un piatto le fette di pomodoro e mozzarella.',
            'Condire con foglie di basilico fresco, sale, pepe e un filo di olio extravergine di oliva.',
            'Servire subito come antipasto o contorno.'
        ],
        image: 'https://i.ibb.co/QKvSL3V/Insalata-Caprese.jpg',
        preparation: "5-10",
        servings: 2,
    },
    {
        id: 6,
        title: 'Pesto alla Genovese',
        category: 'Salse e Condimenti', // Categoria aggiunta
        ingredients: ['basilico', 'pinoli', 'parmigiano', 'pecorino', 'aglio', 'olio', 'sale'],
        instructions: [
            'In un frullatore o un mixer ad immersione, aggiungere il basilico lavato e asciugato, i pinoli, il parmigiano grattugiato, il pecorino grattugiato, l’aglio sbucciato, l’olio extravergine d’oliva e un pizzico di sale.',
            'Frullare tutto a bassa velocità, facendo attenzione a non surriscaldare il pesto. Continuare a frullare fino a ottenere una salsa omogenea e dalla consistenza cremosa. Se necessario, aggiungere un po\' di olio in più per raggiungere la consistenza desiderata.',
            'Assaggiare e regolare di sale, se necessario.',
            'Trasferire il pesto in una ciotola e coprirlo con un sottile strato di olio per evitare che ossidi e mantenga il suo colore verde brillante.'
        ],
        image: 'https://i.ibb.co/BN0vXPv/Pesto-Genovese.jpg',
        preparation: "15-20",
        servings: 4,
    },
    {
        id: 7,
        title: 'Carbonara',
        category: 'Primi piatti', // Categoria aggiunta
        ingredients: ['spaghetti', 'guanciale', 'uova', 'pecorino', 'pepe', 'sale'],
        instructions: [
            'Cuocere gli spaghetti in abbondante acqua salata seguendo le istruzioni sulla confezione. Scolarli al dente, conservando un po\' di acqua di cottura.',
            'Tagliare il guanciale a cubetti e rosolarlo in una padella antiaderente senza aggiungere grassi finché diventa croccante e rilascia il grasso.',
            'In una ciotola capiente, sbattere le uova intere con il pecorino grattugiato e il pepe nero macinato fresco.',
            'Aggiungere gli spaghetti alla ciotola con le uova e il formaggio, aggiungendo un po\' di acqua di cottura degli spaghetti per allungare la crema e mescolare rapidamente per amalgamare bene il tutto. L\'importante è che gli spaghetti siano caldi ma non bollenti per evitare che le uova si rapprendano troppo velocemente.',
            'Aggiustare di sale, se necessario, e servire immediatamente, guarnendo con altro pecorino e pepe nero macinato fresco a piacere.'
        ],
        image: 'https://i.ibb.co/nbrj3zQ/Carbonara.jpg',
        preparation: "10-15",
        cookTime: "10-15",
        servings: 4,
    },
    {
        id: 8,
        title: 'Minestrone',
        category: 'Zuppe e Minestre', // Categoria aggiunta
        ingredients: ['verdure miste', 'patate', 'fagioli', 'pasta', 'olio', 'sale', 'pepe'],
        instructions: [
            'Lavare e tagliare le verdure miste (come carote, sedano, zucchine, patate) a dadini.',
            'In una pentola capiente, far scaldare un filo d\'olio extravergine di oliva e far soffriggere le verdure tagliate per alcuni minuti.',
            'Aggiungere i fagioli precedentemente lessati o quelli di scatola, le patate tagliate a dadini e coprire il tutto con brodo vegetale o acqua. Portare ad ebollizione e lasciar cuocere a fuoco medio per circa 20-30 minuti o finché le verdure non saranno tenere.',
            'Unire la pasta al minestrone e cuocere per il tempo indicato sulla confezione della pasta o fino a quando sarà cotta al dente.',
            'Regolare di sale e pepe secondo gusto.',
            'Servire caldo, magari accompagnato con una spolverata di formaggio grattugiato e un filo d\'olio a crudo.'
        ],
        image: 'https://i.ibb.co/zhxHrz1/Minestrone.jpg',
        preparation: "15-20",
        cookTime: "40-45",
        servings: 6,
    },
    {
        id: 9,
        title: 'Pizza Margherita',
        category: 'Pizze',
        ingredients: ['farina', 'lievito di birra', 'acqua', 'sale', 'olio extravergine di oliva', 'pomodori', 'mozzarella', 'basilico fresco'],
        instructions: [
            'Preparare l\'impasto per la pizza e lasciar lievitare.',
            'Stendere l\'impasto su una teglia da pizza e condire con pomodoro, mozzarella e basilico.',
            'Infornare a temperatura alta fino a quando la pizza è dorata e croccante.'
        ],
        image: 'https://i.ibb.co/JntY5WZ/Pizza-Margherita.jpg',
        preparation: 20,
        cookTime: 30,
        servings: 4,
    },
    {
        id: 10,
        title: 'Pollo al Curry',
        category: 'Secondi piatti',
        ingredients: ['petto di pollo', 'curry in polvere', 'latte di cocco', 'cipolla', 'aglio', 'zenzero', 'peperoncino', 'olio', 'sale'],
        instructions: [
            'Rosolare cipolla, aglio e zenzero in olio.',
            'Aggiungere il pollo tagliato a dadini e cuocere fino a doratura.',
            'Aggiungere curry, latte di cocco e cuocere fino a cottura completa del pollo.'
        ],
        image: 'https://i.ibb.co/Lz5JYXp/Pollo-Curry.jpg',
        preparation: "10-15",
        cookTime: "15-20",
        servings: 4,
    },
    {
        id: 11,
        title: 'Crostata di Frutta',
        category: 'Dolci',
        ingredients: ['pasta frolla', 'frutta fresca (fragole, pesche, kiwi)', 'gelatina trasparente', 'zucchero a velo'],
        instructions: [
            'Cuocere la pasta frolla e farla raffreddare.',
            'Tagliare la frutta a pezzetti e riempire la crostata.',
            'Spennellare la frutta con gelatina trasparente sciolta e servire con zucchero a velo.'
        ],
        image: 'https://i.ibb.co/ngWTVFb/Crostata-Frutta.jpg',
        preparation: "20-25",
        cookTime: "20-25",
        servings: 6,
    },
    {
        id: 12,
        title: 'Sushi Rolls',
        category: 'Antipasti',
        ingredients: ['riso per sushi', 'fogli di alga nori', 'pesce crudo (salmone, tonno)', 'avocado', 'cetriolo', 'aceto di riso', 'zucchero', 'sale', 'salsa di soia'],
        instructions: [
            'Cuocere il riso per sushi e condire con aceto di riso, zucchero e sale.',
            'Stendere il riso su un foglio di alga nori.',
            'Aggiungere il pesce, l\'avocado e il cetriolo, arrotolare e tagliare a fette.'
        ],
        image: 'https://i.ibb.co/gPtR21B/Sushi-Rolls.jpg',
        preparation: "30-35",
        cookTime: "//",
        servings: 4,
    },
    {
        id: 13,
        title: 'Gazpacho',
        category: 'Zuppe e Minestre',
        ingredients: ['pomodori maturi', 'peperoni', 'cetrioli', 'cipolla rossa', 'aglio', 'pane raffermo', 'aceto di vino rosso', 'olio extravergine di oliva', 'sale', 'pepe'],
        instructions: [
            'Frullare tutti gli ingredienti fino a ottenere una crema omogenea.',
            'Lasciare raffreddare in frigorifero.',
            'Servire freddo.'
        ],
        image: 'https://i.ibb.co/w01XnND/Gazpacho.jpg',
        preparation: "10-15",
        cookTime: "//",
        servings: 4,
    },
    {
        id: 14,
        title: 'Torta al Cioccolato',
        category: 'Dolci',
        ingredients: ['farina', 'zucchero', 'burro', 'uova', 'cacao in polvere', 'lievito', 'latte'],
        instructions: [
            'Preriscaldare il forno a 180°C. Imburrare e infarinare una tortiera.',
            'In una ciotola, sbattere il burro con lo zucchero fino a ottenere una crema soffice. Aggiungere le uova una alla volta, mescolando bene dopo ogni aggiunta.',
            'Setacciare insieme la farina, il cacao in polvere e il lievito, quindi aggiungerli gradualmente al composto di burro e uova, alternando con il latte.',
            'Versare l\'impasto nella tortiera preparata e livellare la superficie. Cuocere in forno per circa 35-40 minuti, o fino a quando uno stecchino inserito al centro esce pulito.',
            'Lasciar raffreddare completamente la torta nella tortiera prima di sformarla e servirla.'
        ],
        image: 'https://i.ibb.co/LR7vdzD/Torta-Cioccolato.jpg',
        preparation: "15-20",
        cookTime: "35-40",
        servings: 8,
    },
    {
        id: 15,
        title: 'Panna Cotta',
        category: 'Dolci',
        ingredients: ['panna fresca', 'zucchero', 'vaniglia', 'gelatina in fogli', 'frutti di bosco'],
        instructions: [
            'Mettere a bagno i fogli di gelatina in acqua fredda per circa 10 minuti.',
            'In una casseruola, scaldare la panna fresca con lo zucchero e la vaniglia, mescolando fino a quando lo zucchero si sarà sciolto. Non portare a ebollizione.',
            'Togliere dal fuoco e aggiungere la gelatina strizzata, mescolando fino a che si sarà completamente sciolta.',
            'Versare la panna cotta in stampini individuali e lasciar raffreddare a temperatura ambiente. Poi, trasferire in frigorifero per almeno 4 ore, meglio se tutta la notte.',
            'Prima di servire, sformare la panna cotta su piatti da dessert e guarnire con frutti di bosco freschi.'
        ],
        image: 'https://i.ibb.co/CKxrhwv/Panna-Cotta.jpg',
        preparation: "10-15",
        servings: 6,
    },
    {
        id: 16,
        title: "Insalata di Mare",
        category: "Antipasti",
        ingredients: ["gamberetti", "calamari", "polpo", "cozze", "limone", "prezzemolo fresco", "olio extravergine di oliva", "sale", "pepe"],
        instructions: [
            "Pulire e cuocere separatamente i gamberetti, i calamari e il polpo. Scolare e lasciar raffreddare.",
            "Pulire le cozze e cuocerle in una pentola coperta finché non si aprono. Sgusciarle e lasciar raffreddare.",
            "Tagliare i calamari e il polpo a pezzi. Mescolare insieme tutti i frutti di mare in una ciotola grande.",
            "Condire con succo di limone, olio extravergine di oliva, sale e pepe.",
            "Aggiungere il prezzemolo fresco tritato e mescolare bene.",
            "Servire freddo."
        ],
        image: "https://i.ibb.co/3vvDGKt/Insalata-Mare.jpg",
        preparation: '20-25',
        cookTime: "10-15",
        servings: 4
    },
    {
        id: 17,
        title: "Crostini con Paté di Fegato",
        category: "Antipasti",
        ingredients: ['pane casereccio', 'fegatini di pollo', 'cipolla', 'burro', 'vino bianco', 'brodo di pollo', 'capperi', 'acciughe', 'sale', 'pepe'],
        instructions: [
            "Tagliare il pane a fette e tostarlo leggermente.",
            "In una padella, sciogliere il burro e aggiungere la cipolla tritata. Cuocere fino a che la cipolla è dorata.",
            "Aggiungere i fegatini di pollo e cuocere fino a quando sono dorati su tutti i lati.",
            "Sfumare con il vino bianco e cuocere fino a che l'alcol è evaporato.",
            "Aggiungere il brodo di pollo e cuocere fino a che i fegatini sono ben cotti e il liquido si è ridotto.",
            "Trasferire il tutto in un frullatore, aggiungere capperi e acciughe, e frullare fino a ottenere un composto liscio. Aggiustare di sale e pepe.",
            "Spalmare il paté sui crostini di pane tostato e servire."
        ],
        image: "https://i.ibb.co/mB8SL0m/Crostini-Pat-Fegato.jpg",
        preparation: '15-20',
        cookTime: "20-25",
        servings: 6,
    },
    {
        id: 18,
        title: "Zuppa di Lenticchie",
        category: "Zuppe e Minestre",
        ingredients: ["lenticchie secche", "carote", "sedano", "cipolla", "pomodori pelati", "olio extravergine di oliva", "brodo vegetale", "alloro", "sale", "pepe"],
        instructions: [
            "Sciacquare le lenticchie sotto acqua corrente.",
            "Pulire e tagliare a dadini le carote, il sedano e la cipolla.",
            "In una pentola grande, scaldare l'olio extravergine di oliva e aggiungere la cipolla tritata. Cuocere fino a che la cipolla è dorata.",
            "Aggiungere le carote e il sedano e cuocere per alcuni minuti, mescolando di tanto in tanto.",
            "Aggiungere le lenticchie sciacquate e i pomodori pelati tagliati a pezzi. Mescolare bene.",
            "Versare il brodo vegetale nella pentola fino a coprire le lenticchie e le verdure. Aggiungere una foglia di alloro.",
            "Portare a ebollizione, poi abbassare la fiamma e far cuocere a fuoco lento per circa 45-50 minuti, finché le lenticchie sono tenere.",
            "Aggiustare di sale e pepe a piacere. Rimuovere la foglia di alloro prima di servire. Servire caldo."
        ],
        image: "https://i.ibb.co/641dzTF/Zuppa-Lenticchie.jpg",
        preparation: '15-20',
        cookTime: "45-50",
        servings: 6
    },
    {
        id: 19,
        title: "Vellutata di Zucca",
        category: "Zuppe e Minestre",
        ingredients: ["zucca", "patate", "cipolla", "brodo vegetale", "olio extravergine di oliva", "sale", "pepe", "panna fresca", "rosmarino"],
        instructions: [
            "Pulire e tagliare la zucca a cubetti. Pelare e tagliare le patate a cubetti.",
            "In una grande pentola, scaldare l'olio extravergine di oliva e soffriggere la cipolla tritata fino a che diventa trasparente.",
            "Aggiungere la zucca e le patate e cuocere per alcuni minuti mescolando di tanto in tanto.",
            "Versare il brodo vegetale fino a coprire completamente le verdure. Portare a ebollizione.",
            "Abbassare la fiamma e cuocere a fuoco lento per circa 30 minuti, finché le verdure sono tenere.",
            "Frullare la zuppa con un frullatore a immersione fino a ottenere una consistenza liscia e vellutata.",
            "Aggiustare di sale e pepe. Aggiungere un filo di panna fresca e mescolare bene.",
            "Servire caldo con un rametto di rosmarino come guarnizione."
        ],
        image: "https://i.ibb.co/pRH9L4q/Vellutata-Zucca.jpg",
        preparation: '15-20',
        cookTime: "30-35",
        servings: 4
    },
    {
        id: 20,
        title: 'Pizza 4 formaggi',
        category: 'Pizze',
        ingredients: ['farina', 'lievito di birra', 'acqua', 'sale', 'olio extravergine di oliva', 'gorgonzola', 'mozzarella', 'fontina','parmigiano'],
        instructions: [
            'Preparare l\'impasto per la pizza e lasciar lievitare.',
            'Stendere l\'impasto su una teglia da pizza e condire con gorgonzola e la fontina.',
            'Poni della mozzarella spezzettandola grossolanamente.',
            'Distribuire tutti i formaggi e aggiungere un pizzico di sale e pepe.',
            'Infornare a temperatura alta fino a quando la pizza è dorata e croccante.'
        ],
        image: 'https://i.ibb.co/M7650Bb/Pizza4-Formaggi.jpg',
        preparation: 15,
        cookTime: 30,
        servings: 4,
    },
    {
        id: 21,
        title: 'Pizza Diavola',
        category: 'Pizze',
        ingredients: ['farina', 'lievito di birra', 'acqua', 'sale', 'olio extravergine di oliva', 'pomodoro', 'salame piccante'],
        instructions: [
            'Preparare l\'impasto per la pizza e lasciar lievitare.',
            'Stendere l\'impasto su una teglia da pizza e condire con pomodoro e mozzarella.',
            'Poni della mozzarella spezzettandola grossolanamente.',
            'Distribuire il saalme piccante privadogli della pelle.',
            'Infornare a temperatura alta fino a quando la pizza è dorata e croccante.'
        ],
        image: 'https://i.ibb.co/VwjCXcY/Pizza-Diavola.jpg',
        preparation: 15,
        cookTime: 30,
        servings: 4,
    },
    {
        id: 22,
        title: 'Pizza Patate con pancetta',
        category: 'Pizze',
        ingredients: ['farina', 'lievito di birra', 'acqua', 'sale', 'olio extravergine di oliva', 'mozzarella', 'patate'],
        instructions: [
            'Preparare l\'impasto per la pizza e lasciar lievitare.',
            'Stendere l\'impasto su una teglia da pizza e condire con pomodoro e mozzarella.',
            'Poni della mozzarella spezzettandola grossolanamente.',
            'Distribuire il saalme piccante privadogli della pelle.',
            'Infornare a temperatura alta fino a quando la pizza è dorata e croccante.'
        ],
        image: 'https://i.ibb.co/3TvygF3/Pizza-Patate-Pancetta.jpg',
        preparation: 20,
        cookTime: 60,
        servings: 4,
    },
    {
        "id": 23,
        "title": "Bruschetta al Pomodoro e Basilico",
        "category": "Antipasti",
        "ingredients": ["4 fette di pane rustico", "2 pomodori maturi", "2 spicchi d'aglio", "Basilico fresco", "Olio extravergine di oliva", "Sale", "Pepe nero macinato"],
        "instructions": [
            "Taglia i pomodori a cubetti piccoli e mettili in una ciotola.",
            "Aggiungi qualche foglia di basilico fresco tagliato a striscioline sottili.",
            "Aggiungi un pizzico di sale e pepe nero macinato ai pomodori e al basilico. Mescola bene.",
            "Tosta le fette di pane su entrambi i lati fino a renderle croccanti.",
            "Sfrega leggermente gli spicchi d'aglio sulle fette di pane tostate.",
            "Disponi abbondantemente il condimento di pomodoro e basilico sopra le fette di pane tostate.",
            "Termina con un filo di olio extravergine di oliva su ciascuna bruschetta.",
            "Servi immediatamente e goditi questa fresca e saporita bruschetta come antipasto o spuntino leggero."
        ],
        "image": "https://i.ibb.co/hHGZYys/Bruschette.jpg",
        "preparation": "15",
        "cookTime": "//",
        "servings": 4
    },
    {
        "id": 24,
        "title": "Assortimento di Salumi e Formaggi",
        "category": "Antipasti",
        "ingredients": [
            "Prosciutto crudo",
            "Salame",
            "Mortadella",
            "Coppa",
            "Formaggio stagionato (es. Pecorino, Parmigiano)",
            "Olive miste",
            "Peperoncini",
            "Pane croccante o grissini"
        ],
        "instructions": [
            "Disporre i salumi a fette su un grande piatto da portata.",
            "Tagliare il formaggio stagionato a pezzi o fette e aggiungerlo al piatto.",
            "Aggiungere le olive miste e i peperoncini tagliati a pezzetti.",
            "Accompagnare il tutto con pane croccante o grissini.",
            "Servire l'assortimento di salumi e formaggi come piatto freddo, ideale da gustare insieme a un buon bicchiere di vino."
        ],
        "image": "https://i.ibb.co/1s3FSw2/Assortimento-Salumi-Formaggi.jpg",
        "preparation": null,
        "cookTime": null,
        "servings": 4
    },
    {
        "id": 25,
        "title": "Rigatoni alla Norma",
        "category": "Primi piatti",
        "ingredients": ["rigatoni", "melanzane", "pomodori", "ricotta salata", "basilico", "aglio", "olio extravergine di oliva", "sale", "pepe"],
        "instructions": [
            "Tagliare le melanzane a cubetti e farle saltare in padella con olio extravergine di oliva fino a doratura. Scolarle su carta assorbente per eliminare l'eccesso di olio.",
            "Preparare il sugo di pomodoro facendo rosolare dell'aglio in olio extravergine di oliva, quindi aggiungere i pomodori pelati e cuocere a fuoco medio-basso per circa 20 minuti, schiacciando i pomodori con una forchetta e aggiustando di sale e pepe.",
            "Cuocere i rigatoni in abbondante acqua salata bollente seguendo le istruzioni sulla confezione.",
            "Unire le melanzane al sugo di pomodoro e aggiungere foglie di basilico spezzettate.",
            "Scolare i rigatoni al dente e condire con il sugo preparato.",
            "Servire caldi, guarnendo ogni piatto con ricotta salata grattugiata e una foglia di basilico."
        ],
        "image": "https://i.ibb.co/71YKvhF/Rigatoni-Norma.jpg",
        "preparation": 15,
        "cookTime": 25,
        "servings": 4
    },
    {
        "id": 26,
        "title": "Ravioli di Zucca con Burro e Salvia",
        "category": "Primi piatti",
        "ingredients": ["ravioli di zucca", "burro", "salvia", "parmigiano reggiano", "sale", "pepe"],
        "instructions": [
            "Portare a ebollizione una pentola d'acqua salata e cuocere i ravioli seguendo le istruzioni sulla confezione.",
            "In una padella, fare sciogliere il burro a fuoco medio-basso finché non diventa dorato.",
            "Aggiungere le foglie di salvia e farle friggere leggermente nel burro dorato per circa un minuto.",
            "Scolare delicatamente i ravioli cotti e trasferirli nella padella con il burro e la salvia, mescolando delicatamente per coprirli uniformemente.",
            "Servire caldi con una generosa spolverata di parmigiano reggiano, sale e pepe a piacere."
        ],
        "image": "https://i.ibb.co/GQ9TXCy/Ravioli-Zucca.jpg",
        "preparation": 15,
        "cookTime": 10,
        "servings": 4
    },
    {
        "id": 27,
        "title": "Linguine ai Frutti di Mare",
        "category": "Primi piatti",
        "ingredients": ["linguine", "frutti di mare misti (cozze, vongole, gamberetti, calamari, etc.)", "pomodori ciliegino", "aglio", "prezzemolo", "vino bianco secco", "peperoncino", "olio extravergine di oliva", "sale", "pepe"],
        "instructions": [
            "Portare una pentola d'acqua salata a ebollizione e cuocere le linguine seguendo le istruzioni sulla confezione.",
            "In una grande padella, scaldare un po' di olio extravergine di oliva e aggiungere l'aglio tritato e il peperoncino (a piacere) per aromatizzare l'olio.",
            "Aggiungere i frutti di mare precedentemente puliti e sciacquati. Cuocere finché non si aprono le cozze e le vongole, e i calamari e i gamberetti sono cotti.",
            "Sfumare con il vino bianco e lasciar evaporare l'alcol.",
            "Aggiungere i pomodori ciliegino tagliati a metà e il prezzemolo fresco tritato. Continuare la cottura per qualche minuto, regolando di sale e pepe secondo gusto.",
            "Scolare le linguine al dente e trasferirle direttamente nella padella con il condimento. Mescolare bene per far amalgamare i sapori.",
            "Servire le linguine ai frutti di mare calde, guarnendo ogni piatto con un filo d'olio extravergine di oliva e una spolverata di prezzemolo fresco."
        ],
        "image": "https://i.ibb.co/wM3sk7z/Linguine-Frutti-Mare.jpg",
        "preparation": 20,
        "cookTime": 15,
        "servings": 4
    },
    {
        "id": 28,
        "title": "Fettuccine Alfredo",
        "category": "Primi piatti",
        "ingredients": ["fettuccine", "burro", "panna", "parmigiano reggiano", "noce moscata", "sale", "pepe"],
        "instructions": [
            "Cuocere le fettuccine in abbondante acqua salata seguendo le istruzioni sulla confezione.",
            "In una padella, sciogliere il burro a fuoco basso.",
            "Aggiungere la panna e cuocere a fuoco lento mescolando costantemente fino a quando la salsa si addensa leggermente.",
            "Incorporare il parmigiano reggiano grattugiato e mescolare fino a ottenere una salsa cremosa. Aggiustare di sale, pepe e una grattugiata di noce moscata.",
            "Scolare le fettuccine al dente e aggiungerle alla salsa. Mescolare bene per amalgamare il tutto.",
            "Servire le fettuccine Alfredo calde, guarnendo con ulteriore parmigiano grattugiato se desiderato."
        ],
        "image": "https://i.ibb.co/3FvP3kN/Fettuccine-Alfredo.jpg",
        "preparation": 10,
        "cookTime": 15,
        "servings": 4
    },
    {
        "id": 29,
        "title": "Arancini di Riso",
        "category": "Antipasti",
        "ingredients": [
            "Riso",
            "Burro",
            "Parmigiano",
            "Uova",
            "Mozzarella",
            "Piselli",
            "Prosciutto cotto",
            "Pangrattato",
            "Olio per friggere",
            "Sale",
            "Pepe"
        ],
        "instructions": [
            "Cuocere il riso in acqua salata e, una volta cotto, mescolarlo con burro e parmigiano. Lasciar raffreddare.",
            "Formare delle palline di riso inserendo al centro un cubetto di mozzarella, piselli e prosciutto cotto.",
            "Passare le palline nelle uova sbattute e poi nel pangrattato.",
            "Scaldare l'olio in una padella profonda e friggere gli arancini fino a doratura.",
            "Scolare su carta assorbente e servire caldi."
        ],
        "image": "https://i.ibb.co/jTcPdmQ/Arancini-Riso.jpg",
        "preparation": 60,
        "cookTime": 20,
        "servings": 4
    },
    {
        "id": 30,
        "title": "Fiori di Zucca Ripieni",
        "category": "Antipasti",
        "ingredients": [
            "Fiori di zucca",
            "Mozzarella",
            "Acciughe",
            "Farina",
            "Acqua frizzante",
            "Olio per friggere",
            "Sale"
        ],
        "instructions": [
            "Lavare i fiori di zucca e rimuovere delicatamente il pistillo interno.",
            "Tagliare la mozzarella a strisce e inserire un pezzo di mozzarella e un filetto di acciuga all'interno di ogni fiore di zucca.",
            "Preparare una pastella mescolando farina e acqua frizzante fino a ottenere una consistenza liscia.",
            "Scaldare l'olio in una padella profonda.",
            "Immergere i fiori di zucca ripieni nella pastella e friggerli fino a quando sono dorati e croccanti.",
            "Scolare su carta assorbente e aggiungere un pizzico di sale. Servire caldi."
        ],
        "image": "https://i.ibb.co/yqyfy2y/Fiori-Zucca-Ripieni.jpg",
        "preparation": 20,
        "cookTime": 15,
        "servings": 4
    },
    {
        "id": 31,
        "title": "Ribollita",
        "category": "Zuppe e Minestre",
        "ingredients": [
            "200g di fagioli cannellini secchi (ammollati per una notte)",
            "2 carote",
            "2 coste di sedano",
            "1 cipolla",
            "2 patate",
            "2 pomodori maturi",
            "1 mazzo di cavolo nero",
            "4 fette di pane toscano raffermo",
            "2 spicchi d'aglio",
            "Olio extravergine di oliva",
            "Sale",
            "Pepe",
            "Brodo vegetale (o acqua)"
        ],
        "instructions": [
            "In una pentola grande, far bollire i fagioli cannellini in abbondante acqua leggermente salata finché sono morbidi (circa 1-2 ore). Scolare e tenere da parte.",
            "Preparare le verdure: pulire e tagliare a dadini le carote, il sedano, la cipolla, le patate e i pomodori. Tritare finemente l'aglio.",
            "In una pentola capiente, far scaldare un po' di olio extravergine di oliva. Aggiungere la cipolla e l'aglio tritati e farli soffriggere fino a che diventano dorati.",
            "Aggiungere le carote, il sedano e le patate. Far cuocere per qualche minuto, poi aggiungere i pomodori. Mescolare bene.",
            "Aggiungere i fagioli cannellini cotti e il cavolo nero tagliato a pezzi. Coprire con brodo vegetale (o acqua) e portare a ebollizione.",
            "Cuocere a fuoco medio-basso per circa 30-40 minuti, finché le verdure sono tenere e il brodo si è ridotto.",
            "Aggiustare di sale e pepe a piacere.",
            "Aggiungere le fette di pane toscano raffermo nella zuppa. Lasciarle ammorbidire per alcuni minuti.",
            "Servire la ribollita calda, condita con un filo d'olio extravergine di oliva."
        ],
        "image": "https://i.ibb.co/frRHwzk/Ribollita.jpg",
        "preparation": "20",
        "cookTime": "1-2 ore",
        "servings": 4
    },
    {
        "id": 32,
        "title": "Pizza ai Funghi Porcini",
        "category": "Pizze",
        "ingredients": [
            "300g di farina per pizza",
            "5g di lievito di birra secco",
            "200ml di acqua tiepida",
            "1 cucchiaino di sale",
            "2 cucchiai di olio extravergine di oliva",
            "200g di mozzarella",
            "200g di funghi porcini freschi",
            "2 spicchi d'aglio",
            "2 cucchiai di prezzemolo fresco tritato",
            "Sale e pepe q.b.",
            "Olio extravergine di oliva q.b."
        ],
        "instructions": [
            "In una ciotola grande, mescola la farina, il lievito di birra secco e il sale. Aggiungi l'acqua tiepida e l'olio extravergine di oliva. Mescola fino a ottenere un impasto omogeneo.",
            "Trasferisci l'impasto su una superficie infarinata e impasta per circa 5-7 minuti, finché diventa liscio ed elastico. Forma una palla e lasciala lievitare coperta con un canovaccio umido per circa 1 ora, o finché raddoppia di volume.",
            "Nel frattempo, prepara i funghi porcini. Pulisci i funghi e tagliali a fettine sottili. In una padella, scalda un po' di olio extravergine di oliva e aggiungi gli spicchi d'aglio schiacciati. Aggiungi i funghi e cuoci a fuoco medio-basso finché sono dorati e morbidi. Aggiusta di sale e pepe e aggiungi il prezzemolo tritato. Togli dal fuoco e lascia da parte.",
            "Preriscalda il forno a 220°C e prepara una teglia da pizza oliata o rivestita con carta da forno.",
            "Stendi l'impasto sulla teglia preparata, formando un cerchio uniforme. Distribuisci uniformemente le fettine di mozzarella sulla pizza.",
            "Aggiungi i funghi porcini cotti sopra la mozzarella, distribuendoli in modo uniforme.",
            "Inforna la pizza in forno preriscaldato per 15-20 minuti, o finché la crosta è dorata e croccante e il formaggio è fuso e leggermente dorato.",
            "Sforna la pizza, tagliala a fette e servila calda. Buon appetito!"
        ],
        "image": "https://i.ibb.co/5skGZSQ/Pizza-Funghi.jpg",
        "preparation": 25,
        "cookTime": 20,
        "servings": 4
    }




];

export default recipes;
