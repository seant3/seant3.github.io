document.addEventListener("DOMContentLoaded", () => {


    let currentDrinkIndex = 0;

    let touchStartX = 0;
    let touchEndX = 0;

    let hasSwiped = false;



    // ======================================
    // HERO VIDEO SPEED
    // ======================================


    const heroVideo =
        document.getElementById("heroVideo");


    if (heroVideo) {

        heroVideo.addEventListener(
            "loadedmetadata",
            () => {

                heroVideo.playbackRate = 0.75;

            }
        );

    }




    // ======================================
    // ELEMENT REFERENCES
    // ======================================


    const drinkContainer =
        document.getElementById("drinkContainer");


    const modalContent =
        document.getElementById("modalContent");


    const drinkModalElement =
        document.getElementById("drinkModal");


    const drinkModal =
        new bootstrap.Modal(
            drinkModalElement
        );





    // ======================================
    // CREATE DRINK CARDS
    // ======================================


    drinks.forEach((drink, index) => {


        const card =
            document.createElement("div");


        card.className =
            "col-md-4";



        card.innerHTML = `

            <div
                class="card h-100 drink-card"
                data-index="${index}">


                <img
                    src="${drink.image}"
                    class="card-img-top"
                    alt="${drink.title}">


                <div class="card-body">


                    ${
                        drink.badge
                        ?
                        `<span class="badge bg-danger">
                            ${drink.badge}
                        </span>`
                        :
                        ""
                    }


                    <h5 class="card-title mt-2">
                        ${drink.title}
                    </h5>


                    <p class="card-text">
                        ${drink.description}
                    </p>


                    <div class="click-hint">

                        Tap for recipe 🍸

                    </div>


                </div>


            </div>

        `;



        drinkContainer.appendChild(card);


    });







    // ======================================
    // BUILD MODAL CONTENT
    // ======================================


    function showDrink(index, direction = "") {


        currentDrinkIndex = index;


        const drink =
            drinks[index];



        modalContent.classList.remove(
            "slide-left",
            "slide-right"
        );


        void modalContent.offsetWidth;



        if(direction){

            modalContent.classList.add(direction);

        }



        modalContent.innerHTML = `


            <div class="modal-header">


                <div>

                    <h3>
                        ${drink.title}
                    </h3>


                    <small>
                        ${drink.cocktail}
                    </small>

                </div>



                <button

                    type="button"

                    class="btn-close"

                    data-bs-dismiss="modal">

                </button>


            </div>




            <div class="modal-body">


                ${
                    !hasSwiped
                    ?
                    `
                    <div 
                        class="swipe-hint"
                        id="swipeHint">

                        ← Swipe for more cocktails →

                    </div>
                    `
                    :
                    ""
                }



                <img

                    src="${drink.image}"

                    class="modal-drink-image"

                    alt="${drink.title}">



                <div class="drink-counter">

                    ${index + 1} of ${drinks.length}

                </div>



                <p class="mt-3">

                    ${drink.description}

                </p>




                <h5>

                    Ingredients

                </h5>



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
                        "<li>No ingredients listed.</li>"
                    }

                </ul>





                ${
                    drink.instructions
                    ?
                    `

                    <h5>
                        Instructions
                    </h5>


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

                    <h5>
                        Variations
                    </h5>


                    ${
                        drink.variations
                        .map(v => `


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



            </div>





            ${window.innerWidth > 768 ? `

<div class="modal-footer">

    <button
        class="btn btn-outline-primary previous-drink">

        ← Previous

    </button>


    <button
        class="btn btn-primary next-drink">

        Next →

    </button>

</div>

` : ""}
            


        `;
            }


    






    // ======================================
    // CARD CLICK EVENTS
    // ======================================


    document
    .querySelectorAll(".drink-card")
    .forEach(card => {


        card.addEventListener(
            "click",
            () => {


                hasSwiped = false;


                showDrink(
                    Number(card.dataset.index)
                );


                drinkModal.show();


            }
        );


    });







    // ======================================
    // NEXT / PREVIOUS
    // ======================================


    function nextDrink(){


        currentDrinkIndex++;


        if(currentDrinkIndex >= drinks.length){

            currentDrinkIndex = 0;

        }


        showDrink(
            currentDrinkIndex,
            "slide-left"
        );

    }





    function previousDrink(){


        currentDrinkIndex--;


        if(currentDrinkIndex < 0){

            currentDrinkIndex =
                drinks.length - 1;

        }


        showDrink(
            currentDrinkIndex,
            "slide-right"
        );

    }







    document.addEventListener(
        "click",
        event => {


            if(
                event.target.classList.contains(
                    "next-drink"
                )
            ){

                nextDrink();

            }



            if(
                event.target.classList.contains(
                    "previous-drink"
                )
            ){

                previousDrink();

            }


        }
    );









    // ======================================
    // MOBILE SWIPE SUPPORT
    // ======================================


    drinkModalElement.addEventListener(
        "touchstart",
        event => {


            touchStartX =
                event.changedTouches[0].screenX;


        },
        false
    );





    drinkModalElement.addEventListener(
        "touchend",
        event => {


            touchEndX =
                event.changedTouches[0].screenX;


            handleSwipe();


        },
        false
    );






    function handleSwipe(){


        const swipeDistance =
            touchEndX - touchStartX;



        if(Math.abs(swipeDistance) > 50){


            const hint =
                document.getElementById("swipeHint");


            if(hint){

                hint.classList.add("hide");

            }


            hasSwiped = true;


        }





        if(swipeDistance < -50){


            nextDrink();


        }





        if(swipeDistance > 50){


            previousDrink();


        }


    }


});