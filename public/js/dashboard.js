document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');

    modeSwitch.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });

    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');

    listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
    });

    gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
    });
});

$('.time').text(moment().format("dddd, MMMM Do h:mm a"))
const myHeaders = new Headers();


const getProjects = new Request({
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
});

fetch(getProjects)
    .then((res) => console.log(res))

const inProgressEl = $('.status-number-IP')
const upcomingEl = $('.status-number-UP')
const totalProjects = $('.status-number-TP')

getProjects()

