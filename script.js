var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: 'images/Harry_Potter_i_więzień_Azkabanu.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'images/krol_lew.jpg'
  },
  {
    id: 3,
    title: 'Nietykalni',
    desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka.',
    src:'images/nietykalni.jpg'
  },
  {
    id: 4,
    title: 'Forrest Gump',
    desc: 'Historia życia Forresta Gumpa',
    src:'images/forrest_gump.jpg'
  },
  {
    id: 5,
    title: "Śniadanie u Tiffany'ego ",
    desc: 'Film o pisarzu, który wprowadza się do nowojorskiej kamienicy.',
    src: 'images/Sniadanie-u-Tiffaniego.png'
  },
  {
    id: 6,
    title: 'Interstellar',
    desc: 'Film o grupie naukowców, którzy odkrywaja tunel czasoprzestrzenny.',
    src:'images/interstellar.jpg'
  }
];

var MoviesList = React.createClass({
  propTypes: {
   movies: React.PropTypes.array.isRequired,
  },

  render: function() {
   var movies= this.props.movies.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movieElement: movie})

   });

      return (
        React.createElement('div', {},
          React.createElement('h1', {}, 'Lista filmów'),
          React.createElement('ul', {}, movies)  
        )
      )
    },
  });

var Movie = React.createClass({
  propTypes: {
    movieElement: React.PropTypes.object.isRequired,
  },

  render: function() {
    return(
    React.createElement('li', {},
      React.createElement(MovieTitle, {titleElement: this.props.movieElement.title}),
      React.createElement(MovieDescription, {descElement: this.props.movieElement.desc}),
      React.createElement(MovieImage, {srcElement: this.props.movieElement.src})
      )
    )
  }
});

var MovieTitle = React.createClass({
  propTypes:{
    titleElement: React.PropTypes.string.isRequired,
  },
  
  render: function(){
    return (
      React.createElement('h2', {}, this.props.titleElement) 
    )
  },
});

var MovieDescription = React.createClass({
  propTypes:{
    descElement: React.PropTypes.string.isRequired,
  },
  
  render: function(){
    return (
      React.createElement('p', {}, this.props.descElement) 
    );
  },
});

var MovieImage = React.createClass({
  propTypes:{
    srcElement: React.PropTypes.object.isRequired,
  },
  
  render: function(){
    return (
        React.createElement('img', {src: this.props.srcElement})
    )
  },
});


var allMoviesList = React.createElement(MoviesList, {movies: movies});
  ReactDOM.render(allMoviesList, document.getElementById('app'));