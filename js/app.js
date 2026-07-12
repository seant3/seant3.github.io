document.addEventListener("DOMContentLoaded", () => {


    let currentDrinkIndex = 0;

    let touchStartX = 0;
    let touchEndX = 0;



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


                    <h5 class="card-title">

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

    modalContent.classList.add(
        direction
    );

}



modalContent.innerHTML = `

            <div class="modal-header">


                <h3>

                    ${drink.title}

                </h3>



                <button

                    type="button"

                    class="btn-close"

                    data-bs-dismiss="modal">

                </button>


            </div>




            <div class="modal-body">


                <img

                    src="${drink.image}"

                    class="modal-drink-image"

                    alt="${drink.title}">


                <h4 class="mt-3">

                    ${drink.cocktail}

                </h4>
                <div class="drink-counter">

    ${index + 1} of ${drinks.length}

</div>


<div class="swipe-hint">

    Swipe left or right for more cocktails

</div>



                <p>

                    ${drink.description}

                </p>




                <h5>

                    Ingredients

                </h5>



                <ul>

                    ${
                        drink.ingredients
                        .map(item =>
                            `<li>${item}</li>`
                        )
                        .join("")
                    }

                </ul>





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





                <h5>

                    Variations

                </h5>



                ${
                    drink.variations.length

                    ?

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


                    :

                    "<p>No variations available.</p>"

                }


            </div>




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


                showDrink(
                    Number(card.dataset.index)
                );


                drinkModal.show();


            }
        );


    });







    // ======================================
    // NEXT / PREVIOUS BUTTONS
    // ======================================


    document.addEventListener(
        "click",
        event => {



            if (
                event.target.classList.contains(
                    "next-drink"
                )
            ) {


                nextDrink();


            }




            if (
                event.target.classList.contains(
                    "previous-drink"
                )
            ) {


                previousDrink();


            }


        }
    );





    function nextDrink() {


        currentDrinkIndex++;


        if (
            currentDrinkIndex >= drinks.length
        ) {

            currentDrinkIndex = 0;

        }


showDrink(
    currentDrinkIndex,
    "slide-left"
);

    }





    function previousDrink() {


        currentDrinkIndex--;


        if (
            currentDrinkIndex < 0
        ) {

            currentDrinkIndex =
                drinks.length - 1;

        }


showDrink(
    currentDrinkIndex,
    "slide-right"
);

    }








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






    function handleSwipe() {


        const swipeDistance =
            touchEndX - touchStartX;



        // Swipe left = next drink

        if (
            swipeDistance < -75
        ) {


            nextDrink();


        }



        // Swipe right = previous drink

        if (
            swipeDistance > 75
        ) {


            previousDrink();


        }


    }



});