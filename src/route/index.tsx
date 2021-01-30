import { Route, Redirect, Switch } from 'react-router-dom'
import { IRouteConfig } from './type';

interface IRenderRoutes {
    routes: Array<IRouteConfig>,
    authed: boolean,
    authPath?: string,
    extraProps?: object,
    switchProps?: object
}

const renderRoutes = (param: IRenderRoutes) => {
    const {routes,authed,authPath = '/login',extraProps = {},switchProps = {}} = param;

    return (
        <Switch {...switchProps}>
            {
                routes.map((route, i) => (
                    <Route
                        key={route.key || i}
                        path={route.path}
                        exact={route.exact || true}
                        strict={route.strict || true}
                        render={props => {
                            if (!route.requiresAuth || authed || route.path === authPath) {
                                return <route.component {...props} {...extraProps} route={route} />
                            }
                            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} {...props} />
                        }}
                    >
                    </Route>
                ))
            }
        </Switch>
    )
}

export default renderRoutes;