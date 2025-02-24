let cakeSelection = {
    character: null,
    flavour: null,
    frosting: null,
    image: null  // Will hold the final cake image
};
function selectShape(character) {
    cakeSelection.character = character;
    updateCakeImage();
}

function selectFlavour(flavour) {
    cakeSelection.flavour = flavour;
    updateCakeImage();
}

function selectFrosting(frosting) {
    cakeSelection.frosting = frosting;
    updateCakeImage();
}

function updateCakeImage() {
    if (!cakeSelection.character || !cakeSelection.flavour || !cakeSelection.frosting) {
        return; 
    }

    let cakeImage = document.getElementById("cakeImage"); // Find the image in HTML
    if (!cakeImage) {
        console.warn("Cake image element not found! Make sure your HTML has <img id='cakeImage'>");
        return;
    }

    if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "chocolate" && cakeSelection.frosting === "ChocolateFrosting") {
        console.log("Inside 1st condition")
        cakeSelection.image = "./images/chocopom.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "strawberry" && cakeSelection.frosting === "ChocolateFrosting") {
        cakeSelection.image = "./images/chocopom.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "redvelvet" && cakeSelection.frosting === "ChocolateFrosting") {
        cakeSelection.image = "./images/chocopom.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "chocolate" && cakeSelection.frosting === "StrawberryFrosting") {
        cakeSelection.image = "./images/PompStrawberry.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "strawberry" && cakeSelection.frosting === "StrawberryFrosting") {
        cakeSelection.image = "./images/PompStrawberry.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "redvelvet" && cakeSelection.frosting === "StrawberryFrosting") {
        cakeSelection.image = "./images/PompStrawberry.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "chocolate" && cakeSelection.frosting === "MangoFrosting") {
        cakeSelection.image = "./images/mango_pom.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "strawberry" && cakeSelection.frosting === "MangoFrosting") {
        cakeSelection.image = "./images/mango_pom.jpg";
    } else if (cakeSelection.character === "pom-pom" && cakeSelection.flavour === "redvelvet" && cakeSelection.frosting === "MangoFrosting") {
        cakeSelection.image = "./images/mango_pom.jpg";
    } else if (cakeSelection.character === "hammyy" && cakeSelection.flavour === "chocolate" && cakeSelection.frosting === "ChocolateFrosting") {
        cakeSelection.image = "./images/MANGOPOM.jpg";
    } else if (cakeSelection.character === "hammyy" && cakeSelection.flavour === "strawberry" && cakeSelection.frosting === "ChocolateFrosting") {
        cakeSelection.image = "./images/MANGOPOM.jpg";
    } else if (cakeSelection.character === "hammyy" && cakeSelection.flavour === "redvelvet" && cakeSelection.frosting === "ChocolateFrosting") {
        cakeSelection.image = "./images/MANGOPOM.jpg";
    } else {
        cakeSelection.image = "default_cake.png"; // A fallback image
    }

    // ✅ Actually update the <img> in HTML
    cakeImage.src = cakeSelection.image;
    console.log("Cake updated:", cakeSelection.image);
}

function displayFinalCake(container) {
    container.innerHTML = `
    
    <!-- Ensure this image element is created -->
    <div id="cakeContainer">
        <h1>Your Final Cake! 🎂</h1>
        <img id="cakeImage" src="${cakeSelection.image || 'default_cake.png'}" 
            alt="Final Cake">
        <button class="button prev-btn" id="start-again-btn" onclick="startAgain()">
            <img width="30" height="30" id="prev-arrow" src="https://img.icons8.com/pulsar-color/48/right-squared.png" alt="right-squared"/>
            Start Again
        </button>
    </div>
        
`;

    // Call updateCakeImage AFTER the image has been created
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    updateCakeImage();
}


let currentStep = 1;

        function nextStep() 
        {
            const steps = document.querySelectorAll('.step');
            const content = document.getElementById('main-content');
            console.log("Next clicked");

            if (currentStep < steps.length) 
            {
                steps[currentStep - 1].classList.remove('active');
                steps[currentStep - 1].classList.add('completed');
                steps[currentStep].classList.add('active');
                currentStep++;

                switch (currentStep) { 
                    case 2:
                        loadHTMLContent('flavourPicker.html', content);
                        break;
                    case 3:
                    loadHTMLContent('frostingPicker.html', content);
                        break;
                    case 4:
                        displayFinalCake(content)
                        break;
                }

                // Reattach event listeners
                document.getElementById('nextButton')?.addEventListener('click', nextStep);
                document.getElementById('prevButton')?.addEventListener('click', previousStep);
            }
        }

        function previousStep() {
            // Similar logic as nextStep with event listeners reattached
            const steps = document.querySelectorAll('.step');
            const content = document.getElementById('main-content');

            if (currentStep > 1) {
                steps[currentStep - 1].classList.remove('active');
                currentStep--;
                steps[currentStep - 1].classList.add('active');

                switch (currentStep) {
                    case 1:
                        loadHTMLContent('characterPicker.html', content);
                        break;
                    case 2:
                        loadHTMLContent('flavourPicker.html', content);
                        break;
                    case 3:
                        loadHTMLContent('frostingPicker.html', content);
                        break;
                    case 4:
                        displayFinalCake(content)
                        break;
                }

                // Reattach event listeners
                document.getElementById('nextButton')?.addEventListener('click', nextStep);
                document.getElementById('prevButton')?.addEventListener('click', previousStep);
            }
        }

        function startAgain() {
            // Similar logic as nextStep with event listeners reattached
            const steps = document.querySelectorAll('.step');
            const content = document.getElementById('main-content');
            
            if (currentStep > 1) {
                steps[currentStep - 1].classList.remove('active');
                currentStep = 1;
                steps[currentStep - 1].classList.add('active');

                loadHTMLContent('characterPicker.html', content);Cake(content)

                // Reattach event listeners
                document.getElementById('nextButton')?.addEventListener('click', nextStep);
                document.getElementById('prevButton')?.addEventListener('click', previousStep);
            }
        }

        // Function to fetch and load HTML content into a container
    function loadHTMLContent(file, container) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;

                // Reattach event listeners after loading new content
                document.getElementById('nextButton')?.addEventListener('click', nextStep);
                document.getElementById('prevButton')?.addEventListener('click', previousStep);
            })
            .catch(error => {
                console.error('Error loading HTML:', error);
            });
    }