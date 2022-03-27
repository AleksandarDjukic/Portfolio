const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C#', 'JQuery', 'AJAX',
    'SCSS', 'MySQL', 'PHP', 'React',
    'Bootstrap', 'Photoshop', 'Git', "SEO"
];

var tagCloud = TagCloud('.content', myTags,{

// radius in px
radius: 600,

// animation speed
// slow, normal, fast
maxSpeed: 'slow',
initSpeed: 'slow',

// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,

// interact with cursor move on mouse out
keep: true

}); 
var colors = ['#6FF4A5'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;