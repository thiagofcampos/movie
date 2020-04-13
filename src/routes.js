import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {RouteArray} from './RouteArray';

export default function Routes() {
    
    return (
        <Switch>
            <div className="container-default">
                {
                    RouteArray.map((item) => {
                        if (item.isExact) {
                            return (
                                <Route path={item.pathName} exact component={item.componentName} />
                            )
                        }
                        else {
                            return (
                                <Route path={item.pathName} component={item.componentName} />
                            )
                        }
                    })
                }
            </div>
        </Switch>
    )
}
