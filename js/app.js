document.addEventListener("DOMContentLoaded", () => {


    let currentDrinkIndex = 0;

    let touchStartX = 0;
    let touchEndX = 0;



    // ======================================
    // INTRO / HERO SEQUENCE
    // ======================================


    const intro =
        document.getElementById("introOverlay");


    const hero =
        document.querySelector(".hero");


    const container =
        document.querySelector(".container");


    const sectionTitle =
        document.querySelector(".section-title");



    if(hero){

        hero.style.opacity = "0";

    }


    if(container){

        container.style.opacity = "0";

    }



    setTimeout(() => {


        if(intro){

            intro.style.transition =
                "opacity .8s ease";

            intro.style.opacity = "0";

        }



        if(hero){

            hero.style.transition =
                "opacity 1s ease";

            hero.style.opacity = "1";

        }




        setTimeout(() => {



            if(intro){

                intro.remove();

            }




            if(container){

                container.style.transition =
                    "opacity .8s ease";

                container.style.opacity = "1";

            }




            if(sectionTitle){

                sectionTitle.classList.add(
                    "show"
                );

            }




            setTimeout(() => {

                revealCards();

            },300);




        },800);




    },3000);







    // ======================================
    // HERO VIDEO SPEED
    // ======================================


    const heroVideo =
        document.getElementById("heroVideo");



    if(heroVideo){

        heroVideo.addEventListener(
            "loadedmetadata",
            () => {

                heroVideo.playbackRate = 0.75;

            }
        );

    }







    // ======================================
    // ELEMENTS
    // ======================================


    const drinkContainer =
        document.getElementById("drinkContainer");


    const recipeViewer =
        document.getElementById("recipeViewer");


    const recipeContent =
        document.getElementById("recipeContent");


    const closeViewer =
        document.getElementById("closeViewer");


    const previousDrink =
        document.getElementById("previousDrink");


    const nextDrink =
        document.getElementById("nextDrink");








    // ======================================
    // CREATE DRINK CARDS
    // ======================================


    drinks.forEach((drink,index)=>{


        const card =
            document.createElement("div");



        card.className =
            "drink-card";



        card.innerHTML = `


            <img
                src="${drink.image}"
                alt="${drink.title}"
            >



            <div class="card-content">



                ${
                    drink.badge
                    ?
                    `
                    <span class="drink-badge">

                        ${drink.badge}

                    </span>
                    `
                    :
                    ""
                }




                <h3>

                    ${drink.title}

                </h3>




                <p>

                    ${drink.description}

                </p>




                <div class="click-hint">

                    Tap for recipe 🍸

                </div>



            </div>


        `;




        card.addEventListener(
            "click",
            ()=>{

                openDrink(index);

            }
        );



        drinkContainer.appendChild(card);



    });





    function revealCards(){


        const cards =
            document.querySelectorAll(
                ".drink-card"
            );



        cards.forEach((card,index)=>{


            setTimeout(()=>{


                card.classList.add(
                    "show"
                );


            }, index * 120);



        });


    }






    // ======================================
    // OPEN RECIPE VIEWER
    // ======================================


    function openDrink(index){


        currentDrinkIndex =
            index;



        renderDrink();



        recipeViewer.classList.add(
            "active"
        );



        recipeContent.scrollTop = 0;



    }
        // ======================================
    // RENDER RECIPE
    // ======================================


    function renderDrink(direction=""){


        const drink =
            drinks[currentDrinkIndex];



        recipeContent.classList.remove(
            "slide-left",
            "slide-right"
        );



        void recipeContent.offsetWidth;



        if(direction){

            recipeContent.classList.add(
                direction
            );

        }




        recipeContent.innerHTML = `


            <div class="recipe-header">


                <h1>

                    ${drink.title}

                </h1>



                <h3>

                    ${drink.cocktail}

                </h3>



                <div class="recipe-meta">


                    <span>
                        🥃 ${drink.glass || ""}
                    </span>


                    <span>
                        ⏱ ${drink.prepTime || ""}
                    </span>


                    <span>
                        💪 ${drink.strength || ""}
                    </span>


                </div>


            </div>





            <img

                class="recipe-image"

                src="${drink.image}"

                alt="${drink.title}"

            >





            <p class="recipe-description">

                ${drink.description}

            </p>





            <h4>

                Ingredients

            </h4>




            <ul>

                ${
                    drink.ingredients
                    ?
                    drink.ingredients
                    .map(item =>
                        `<li>${item}</li>`
                    )
                    .join("")
                    :
                    ""
                }

            </ul>






            ${
                drink.instructions &&
                drink.instructions.length
                ?

                `

                <h4>

                    Instructions

                </h4>


                <ol>

                    ${
                        drink.instructions
                        .map(item =>
                            `<li>${item}</li>`
                        )
                        .join("")
                    }

                </ol>


                `

                :

                ""

            }






            ${
                drink.variations &&
                drink.variations.length

                ?

                `

                <h4>

                    Variations

                </h4>



                ${
                    drink.variations
                    .map(v=>`

                        <div class="variation">


                            <strong>

                                ${v.name}

                            </strong>



                            <p>

                                ${v.description}

                            </p>


                        </div>


                    `)
                    .join("")
                }


                `

                :

                ""

            }






            <div class="recipe-counter">

                ${currentDrinkIndex + 1}
                /
                ${drinks.length}

            </div>


        `;


    }







    // ======================================
    // CLOSE VIEWER
    // ======================================


    function closeRecipe(){


        recipeViewer.classList.remove(
            "active"
        );


    }



    closeViewer.addEventListener(
        "click",
        closeRecipe
    );









    // ======================================
    // NAVIGATION
    // ======================================


    function next(){


        currentDrinkIndex++;



        if(
            currentDrinkIndex >= drinks.length
        ){

            currentDrinkIndex = 0;

        }



        renderDrink(
            "slide-left"
        );


    }





    function previous(){


        currentDrinkIndex--;



        if(
            currentDrinkIndex < 0
        ){

            currentDrinkIndex =
                drinks.length - 1;

        }



        renderDrink(
            "slide-right"
        );


    }







    nextDrink.addEventListener(
        "click",
        next
    );



    previousDrink.addEventListener(
        "click",
        previous
    );









    // ======================================
    // KEYBOARD SUPPORT
    // ======================================


    document.addEventListener(
        "keydown",
        event=>{


            if(
                !recipeViewer.classList.contains(
                    "active"
                )
            ){

                return;

            }




            if(event.key === "Escape"){

                closeRecipe();

            }




            if(event.key === "ArrowRight"){

                next();

            }




            if(event.key === "ArrowLeft"){

                previous();

            }



        }
    );









    // ======================================
    // MOBILE SWIPE
    // ======================================


    recipeViewer.addEventListener(
        "touchstart",
        event=>{


            touchStartX =
                event.changedTouches[0].screenX;


        },
        false
    );





    recipeViewer.addEventListener(
        "touchend",
        event=>{


            touchEndX =
                event.changedTouches[0].screenX;



            handleSwipe();



        },
        false
    );






    function handleSwipe(){


        const distance =
            touchEndX - touchStartX;




        if(distance < -50){

            next();

        }




        if(distance > 50){

            previous();

        }


    }




});