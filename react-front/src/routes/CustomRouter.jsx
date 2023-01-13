import { useLocation, useNavigate, useParams } from "react-router-dom";


// https://stackoverflow.com/questions/69934351/withrouter-is-not-exported-from-react-router-dom
export default function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}