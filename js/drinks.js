const drinks = [
{
    id: 1,

    title: "The Deal Maker",

    cocktail: "Old Fashioned",

    badge: "SIGNATURE",

    image: "images/old_fashioned.jpeg",

    description:
"A serious cocktail for serious celebrations. Premium bourbon, aromatic bitters, and a touch of sweetness come together in a timeless combination that knows how to close the deal. Smooth, confident, and always ready for the spotlight — this is what happens when a classic does business.",    ingredients: [
        "2 oz Bourbon",
        "1 Sugar Cube (or ¼ oz Simple Syrup)",
        "2 dashes Angostura Bitters",
        "Orange Peel",
        "Luxardo Cherry"
    ],

    instructions: [
        "Add sugar and bitters to a rocks glass.",
        "Add bourbon.",
        "Fill with a large ice cube.",
        "Stir until chilled.",
        "Express orange peel over the drink.",
        "Garnish with orange peel and cherry."
    ],

    variations: [
        {
            name: "Bourbon Smash",
            description:
                "Fresh mint and lemon make this a refreshing summer bourbon cocktail."
        },
        {
            name: "Kentucky Mule",
            description:
                "Swap ginger beer and lime for a bourbon twist on the Moscow Mule."
        }
    ]
},

{
    id: 2,

    title: "Executive Order",

    cocktail: "Hugo Spritz",

    badge: "SIGNATURE",

    image: "images/hugo.jpeg",

    description:
"A beautiful decision. Fresh mint, elderflower, lime, and sparkling prosecco combine into a cocktail that brings elegance and energy to the party. Light, refreshing, and exactly what you want when celebrating a tremendous occasion.",
    ingredients: [
        "2 oz St-Germain",
        "4 oz Prosecco",
        "Splash Club Soda",
        "Fresh Mint",
        "Lime Wheel"
    ],

    instructions: [
        "Fill a wine glass with ice.",
        "Add St-Germain.",
        "Pour in prosecco.",
        "Top with club soda.",
        "Stir gently.",
        "Garnish with mint and lime."
    ],

    variations: [
        {
            name: "Aperol Spritz",
            description:
                "Swap elderflower for Aperol for an Italian classic."
        },
        {
            name: "Hugo Royale",
            description:
                "Skip the soda for a richer sparkling cocktail."
        }
    ]
},

{
    id: 3,

    title: "Make Sixty Great Again",

    cocktail: "Margarita",

    badge: "SIGNATURE",

    image: "images/marg.jpeg",

    description:
"A huge celebration deserves a huge margarita. Premium tequila, fresh lime, and orange liqueur come together in a winning combination. Bright, bold, and made for people who know how to celebrate sixty years of greatness.",
    ingredients: [
        "2 oz Blanco Tequila",
        "1 oz Cointreau",
        "1 oz Fresh Lime Juice",
        "Salt Rim"
    ],

    instructions: [
        "Salt the rim.",
        "Shake tequila, Cointreau and lime with ice.",
        "Strain over fresh ice.",
        "Garnish with lime."
    ],

    variations: [
        {
            name: "Ranch Water",
            description:
                "Tequila, lime and club soda. Simple, crisp and refreshing."
        },
        {
            name: "Tommy's Margarita",
            description:
                "Replace Cointreau with agave syrup."
        }
    ]
},

{
    id: 4,

    title: "Fake Mules",

    cocktail: "Moscow Mule",

    badge: "SIGNATURE",

    image: "images/mule.jpeg",

    description:
"A very strong mule. Crisp vodka, powerful ginger beer, and fresh lime make this one stand out from the crowd. Other mules are good — this one is ready to take the lead.",
    ingredients: [
        "2 oz Vodka",
        "4 oz Ginger Beer",
        "½ oz Lime Juice"
    ],

    instructions: [
        "Fill copper mug with ice.",
        "Add vodka.",
        "Add lime juice.",
        "Top with ginger beer.",
        "Stir gently.",
        "Garnish with lime."
    ],

    variations: [
        {
            name: "Kentucky Mule",
            description:
                "Use bourbon instead of vodka."
        }
    ]
},

{
    id: 5,

    title: "Covfefe",

    cocktail: "Espresso Martini",

    badge: "SIGNATURE",

    image: "images/espresso.jpeg",

    description:
"A legendary late-night creation. Nobody expected it, but everyone agrees it works. Rich espresso, smooth vodka, and just enough sweetness create the perfect cocktail to keep the celebration going.",
    ingredients: [
        "2 oz Vodka",
        "1 oz Coffee Liqueur",
        "1 oz Fresh Espresso",
        "¼ oz Simple Syrup (optional)"
    ],

    instructions: [
        "Shake everything vigorously with ice.",
        "Double strain into a coupe.",
        "Garnish with coffee beans."
    ],

    variations: [
        {
            name: "Black Russian",
            description:
                "Vodka and coffee liqueur only."
        },
        {
            name: "White Russian",
            description:
                "Add heavy cream."
        },
        {
            name: "Espresso White Russian",
            description:
                "A creamy version with fresh espresso."
        }
    ]
},

{
    id: 6,

    title: "The Victory Lap",

    cocktail: "Paper Plane",

    badge: "SIGNATURE",

    image: "images/paper_plane.jpeg",

    description:
"A first-class cocktail with a winning finish. Bourbon, citrus, and bitters come together in perfect balance, served over a beautiful crystal-clear ice cube. A smooth ride from takeoff to landing.",
    ingredients: [
        "¾ oz Bourbon",
        "¾ oz Aperol",
        "¾ oz Amaro Nonino",
        "¾ oz Fresh Lemon Juice"
    ],

    instructions: [
        "Shake all ingredients with ice.",
        "Double strain into a coupe glass.",
        "Garnish with a lemon twist."
    ],

    variations: [
        {
            name: "Boulevardier",
            description:
                "If sweet vermouth ever joins the party, this is another bourbon favorite."
        }
    ]
},

{
    id: 7,

    title: "The Greatest Smash",

    cocktail: "House Favorite",

    badge: "HOUSE FAVORITE",

    image: "images/smash.jpeg",

    description:
"A complete success. Bourbon, fresh lemon, mint, and sweetness combine for a cocktail that delivers every single time. Refreshing, powerful, and a guaranteed crowd favorite.",
    ingredients: [
        "2 oz Bourbon",
        "¾ oz Lemon Juice",
        "½ oz Simple Syrup",
        "Fresh Mint"
    ],

    instructions: [
        "Muddle mint.",
        "Shake with remaining ingredients.",
        "Pour over crushed ice.",
        "Garnish with mint."
    ],

    variations: []
},

{
    id: 8,

    title: "The Wall",

    cocktail: "House Favorite",

    badge: "HOUSE FAVORITE",

    image: "images/ranch_water.jpeg",

    description:
"A strong foundation. A beautiful wall. A cocktail that knows exactly what it is. Premium tequila, fresh lime, and sparkling water create a clean, refreshing drink that keeps the good times protected all night long.",
    ingredients: [
        "2 oz Blanco Tequila",
        "1 oz Lime Juice",
        "Club Soda"
    ],

    instructions: [
        "Fill glass with ice.",
        "Add tequila and lime.",
        "Top with club soda.",
        "Stir gently."
    ],

    variations: [
        {
            name: "Tequila Soda",
            description:
                "The same cocktail without as much lime."
        }
    ]
},

{
    id: 9,

    title: "The Orange Wave",

    cocktail: "Aperol Spritz",

    badge: "HOUSE FAVORITE",

    image: "images/aperol.jpeg",

    description:
"A bright, beautiful cocktail made for sunny days and great celebrations. Aperol, prosecco, and sparkling water create a refreshing combination that brings energy to the entire party.",
    ingredients: [
        "3 oz Prosecco",
        "2 oz Aperol",
        "1 oz Club Soda",
        "Orange Slice"
    ],

    instructions: [
        "Fill wine glass with ice.",
        "Add prosecco.",
        "Add Aperol.",
        "Top with club soda.",
        "Garnish with an orange slice."
    ],

    variations: []
}

];