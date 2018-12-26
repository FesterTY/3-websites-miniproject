var button = $('#career-profile button[name=random-char]');
var careerProfile = $('#career-profile');
var careerPic = $('#career-pic');
var careerDescription = $('#career-description');

button.on('click', function (e) {
    let personID = Math.floor((Math.random() * 10)) + 1;

    let getID = $.get(`https://swapi.co/api/people/${personID}/`);
    getID.then(function (person) {

        careerDescription.find('#char-name > strong').text(person.name);
        careerDescription.find('#char-height > strong').text(person.height);
        careerDescription.find('#char-mass > strong').text(person.mass);
        careerDescription.find('#char-birthyear > strong').text(person.birth_year);

        if (getID.readyState === 4) {
            console.log('animating..');
            careerProfile.addClass('finished');

            setTimeout(function(){
                careerProfile.removeClass('finished');
            }, 1000);
        }

        switch (personID) {
            case 1:
                careerPic.attr('src', 'assets/lukeSkywalker-1.JPG');
                break;
            case 2:
                careerPic.attr('src', 'assets/c3po-2.JPG');
                break;
            case 3:
                careerPic.attr('src', 'assets/r2d2-3.jpg');
                break;
            case 4:
                careerPic.attr('src', 'assets/darth-vader-4.JPG');
                break;
            case 5:
                careerPic.attr('src', 'assets/leia-organa-5.JPG');
                break;
            case 6:
                careerPic.attr('src', 'assets/owen-lars-6.jpg');
                break;
            case 7:
                careerPic.attr('src', 'assets/beruWhiteson-7.JPG');
                break;
            case 8:
                careerPic.attr('src', 'assets/r2d4-8.jpg');
                break;
            case 9:
                careerPic.attr('src', 'assets/biggsDarklighter-9.JPG');
                break;
            case 10:
                careerPic.attr('src', 'assets/obiwan-10.JPG');
                break;
            default:
                careerPic.attr('src', 'assets/default-icon.png');
        }
    });

    console.log('button pressed!');
    console.log(personID);
});