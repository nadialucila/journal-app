import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalPage } from '../components/journal/JournalPage'
import {AuthRouter} from './AuthRouter'
import {firebase} from '../firebase/firebase_config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

export const AppRouter = () => {

    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }

        } )
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={ (isLogged ? (JournalPage):(AuthRouter))}
                    />
                    <Route
                        path="/journal"
                        component={ (!isLogged ? (AuthRouter):(JournalPage))}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
