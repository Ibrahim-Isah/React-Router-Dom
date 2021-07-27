import { useHistory, Link , Route, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import ViewProfile from '../components/ViewProfile'
import EditProfile from '../components/EditProfile'
const Profile = ({ login }) => {
	const history = useHistory();

	const {url , path } = useRouteMatch()

	useEffect(
		() => {
			if (!login) {
				history.push('/');
			}
		},
		[ login, history ]
	);
	return (
		<>
			<h1>Profile</h1>
			<ul>
				<li>
					<Link to={`${url}/editprofile`}>Edit Profile</Link>
				</li>
				<li>
					<Link to={`${url}/viewprofile`}>View Profile</Link>
				</li>
			</ul>

			<Route path={`${path}/editprofile`} component={EditProfile}/>
			<Route path={`${path}/viewprofile`} component={ViewProfile}/>

		</>
	)
	;
};

export default Profile;
