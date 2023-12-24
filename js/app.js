
//RANDOM DAILY BIBLE VERSE GENERATOR

$(document).ready(function () {
    const order = {
        setDaily: "daily",
        setRandom : "random" 
    }
    
    
    const getSetDaily = `https://beta.ourmanna.com/api/v1/get?format=json&order=${order.setDaily}`    //getting the daily verse
    const getSetRandom = `https://beta.ourmanna.com/api/v1/get?format=json&order=${order.setRandom}`    //getting the random verse
    const myoptions = {
        method: 'GET',
        headers: { accept: 'application/json' }
    };
    
    
    //function to get the daily verse quote
    function getBibleVerseDaily() {
        return new Promise((resolve, reject) => {
            fetch(getSetDaily, myoptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(obj => {
                    resolve(obj);
                })
                .catch(error => {
                    reject(`Error was: ${error}`);
                });
        });
    }
    
    //variable to extract the text and get the promise to be fufilled
    let myPromiseDailyVerse = getBibleVerseDaily()
    .then(data => {
        // Assuming data.verse.details.text is the verse text
        $("#text").text(`"${data.verse.details.text}"`);
    })
    .catch(error => {
        console.log(error);
        $("#text").text("Error fetching verse");
    });

    let myPromiseDailyChapter = getBibleVerseDaily()
    .then(data => {
        // Assuming data.verse.details.reference is the verse reference
        $("#chapter").text(`${data.verse.details.reference}`);
    })
    .catch(error => {
        console.log(error);
        $("#chapter").text("Error fetching chapter");
    });
    
    
    console.log(myPromiseDailyVerse)
    console.log(myPromiseDailyChapter)
    
    
    
    //function to get the random verses
    function getBibleVerseRandom() {
        return new Promise((resolve, reject) => {
            fetch(getSetRandom, myoptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(obj => {
                    resolve(obj);
                })
                .catch(error => {
                    reject(`Error was: ${error}`);
                });
        });
    }
    
    
    //variable to extract the text and get the promise to be fufilled
    // Variable to extract the text and get the promise to be fulfilled
    function updateRandomVerse() {
        let myPromiseRandomVerse = getBibleVerseRandom()
        .then(data => {
            // Assuming data.verse.details.text is the verse text
            $("#random-text").fadeOut(500, function () {
                $(this).addClass("animation-settings").text(`"${data.verse.details.text}"`).fadeIn(500);
            });
        })
        .catch(error => {
            console.log(error);
            $("#random-text").text("Error fetching verse");
        });
    
        let myPromiseRandomChapter = getBibleVerseRandom()
        .then(data => {
            // Assuming data.verse.details.reference is the verse reference
            $("#random-chapter").fadeOut(500, function () {
                $(this).addClass("animation-settings").text(`${data.verse.details.reference}`).fadeIn(500);
            });
        })
        .catch(error => {
            console.log(error);
            $("#random-chapter").text("Error fetching chapter");
        });
    }
    
    // Attach click event to the button
    $(".next-quote").on("click", function() {
        updateRandomVerse();
    });
    

    $('#nextstepbtn').click(function () {
        // Toggle the visibility of the two quote containers
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $(".main-quote-container").hide(1000);
            $('.main-random-quote-container').show('slow');
            $(this).addClass("animation-settings").text("Go Back");
        } else {
            $(".main-random-quote-container").hide(1000);
            $('.main-quote-container').show('slow');
            $(this).addClass("animation-settings").text("verses");
        }
        
    });
    
    
})
