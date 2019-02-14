
const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'};
backgroundUrl = ['http://lorempixel.com/1900/1900/nature/',
    'http://lorempixel.com/1900/1900/city/'];
var curentImageIndex = 0;
var app = new Vue({
    el: '#app1',
    data: {
        greet: '',
        currentTime: '',
        backgroundimg: backgroundUrl[curentImageIndex],
        quate:'',
    },
    methods: {
        getTimeMessage: function () {
            var myDate = new Date();
            var hrs = myDate.getHours();
            var minute = myDate.getMinutes();
            var greet;

            if (hrs < 12)
                greet = 'Good Morning';
            else if (hrs >= 12 && hrs <= 17)
                greet = 'Good Afternoon';
            else if (hrs >= 17 && hrs <= 24)
                greet = 'Good Evening';

            this.greet = greet;
            this.currentTime = hrs + ":" + minute;
        },
        changeBackground: function () {
            if (curentImageIndex >= backgroundUrl.length - 1) {
                curentImageIndex = 0;
            } else {
                curentImageIndex++;
            }
            this.backgroundimg = backgroundUrl[curentImageIndex];


        },
        fetchData: function () {
            var vm = this;
            axios.get('http://quotes.rest/qod.json?category=inspire',{headers: {'X-CSRF-Token': token.content}})
                .then(response => {
                    vm.quate = data.contents.quotes[0].quote;
                })
                .catch(error => {
                    console.log(error);
                })


        }
    },

    created() {
        this.getTimeMessage();
        this.fetchData();
        this.interval = setInterval(() =>this.fetchData(),300000);
        this.interval = setInterval(() => this.changeBackground(), 1800000);
    },
});
