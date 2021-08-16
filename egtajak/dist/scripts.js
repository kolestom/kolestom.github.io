let color = "purple";
let number = 101;
let word = `cool`;

$(`.red`).css(`background`, color)

if (number > 100) {
    $('.yellow').text('wow, de nagy szám')
} else {
    $('.yellow').text('ez csak egy közönséges szám')
}

if (word == 'cool') {
    $('.azur').text('A DOM ereje')
}

