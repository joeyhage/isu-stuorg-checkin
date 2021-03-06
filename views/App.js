const React = require('react');
const Nav = require('./partials/Nav');
const Footer = require('./partials/Footer');
const Home = require('./Home');
const Events = require('./Events');
const StuOrgs = require('./StuOrgs');
const Profile = require('./Profile');
const Login = require('./Login');
const Registration = require('./Registration');
const CheckIn = require('./CheckIn');
const AdminDashboard = require('./AdminDashboard');

class App extends React.Component {

	render() {
		return (
			<html style={{backgroundColor:'#FFF', height:'100%'}}>
			<head>
				<title>CyConnect - {this.props.page}</title>
				<meta name="description" content="ISU StuOrg Check-In"/>
				<link id="favicon" rel="icon" href="/img/Checky-Logo-Small.png" type="image/x-icon"/>
				<meta charSet="utf-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
				<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.css"/>
				<link rel="stylesheet" href="/stylesheets/bulma.css"/>
				<link rel="stylesheet" href="/stylesheets/main.css"/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.js"></script>
				<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
				<script src="/js/jquery.min.js"/>
			</head>
			<body style={{backgroundColor:'#FFF', height:'100%'}}>
				<Nav path={this.props.path} pageProps={this.props.pageProps}/>
				{this.props.page === 'Home' &&
					<Home pageProps={this.props.pageProps}/>
				}
				{this.props.page === 'StuOrgs' &&
					<StuOrgs pageProps={this.props.pageProps}/>
				}
				{this.props.page === 'Events' &&
					<Events pageProps={this.props.pageProps}/>
				}
				{this.props.page === 'Profile' &&
					<Profile pageProps={this.props.pageProps}/>
				}
        		{this.props.page === 'Login' &&
					<Login pageProps={this.props.pageProps}/>
				}
        		{this.props.page === 'Registration' &&
					<Registration pageProps={this.props.pageProps}/>
				}
				{this.props.page === 'CheckIn' &&
					<CheckIn pageProps={this.props.pageProps}/>
				}
				{this.props.page === 'AdminDashboard' &&
					<AdminDashboard pageProps={this.props.pageProps}/>
				}
				<Footer/>
				<script src="/js/main.js"/>
			</body>
			</html>
		);
	}
}

module.exports = App;
