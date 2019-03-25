var searchSteamForm = $('form#search-steam');
var profileDescription = $('#profile-description');

searchSteamForm.on('submit', function (e) {
    e.preventDefault();
    let steamID = searchSteamForm.children('input[type=text]').val();
    console.log(`Steam ID: ${steamID}`);

    $.ajax({
        type: 'get',
        url: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXX&steamids=${steamID}`,


        success: function (data) {

            if (typeof data.response.players[0] === 'undefined') {
                console.log('No players found');
            } else {
                profileDescription.find('li a').text('N/A');

                profileDescription.find('.username a').text(data.response.players[0].personaname);
                profileDescription.find('.real-name a').text(data.response.players[0].realname);
                profileDescription.find('.profile-url a').text(data.response.players[0].profileurl);
                profileDescription.find('.currently-playing a').text(data.response.players[0].gameextrainfo);

                $('.profile-pic').attr('src', data.response.players[0].avatarfull);
            }

        }
    });
});
