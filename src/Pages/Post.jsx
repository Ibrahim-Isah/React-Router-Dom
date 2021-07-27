import { useLocation, useParams } from 'react-router-dom';

const Post = () => {
	const query = new URLSearchParams(useLocation().search);
	const { id } = useParams();
	return <><h1>Id is = {id}</h1>
    <h1>{query.get("first")}</h1></>;
};

export default Post;
// const Post = ({ match }) => {
// 	return <h1>Id is = {match.params.id} </h1>;
// };

// export default Post;
