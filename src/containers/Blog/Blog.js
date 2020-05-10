import React, { Component } from 'react';
//import axios from  '../../axios';
import { Route , NavLink ,Switch } from 'react-router-dom';
import './Blog.css';
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
// import NewPost from "./NewPost/NewPost";
const AsyncNewPost = asyncComponent(() =>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth : true
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink to={{
                                pathname : '/posts/'
                            }}
                                         exact
                             activeClassName="my-active"
                                         activeStyle={{
                                             color : '#fa923f',
                                             textDecoration : 'underline'
                                         }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname : '/new-post',
                                hash : '#search',
                                search : 'q=541'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={() => <h1>This is Home Page</h1>} />*/}
                {/*<Route  path='/new-page' render={() => <h1>This is New Post Page</h1>}/>*/}
                   <Switch>
                       {this.state.auth ? <Route path='/new-post' exact component={AsyncNewPost} /> : null}
                       <Route path='/posts/' component={Posts} />
                       <Route render={() => <h1>Page not found</h1>}/>
                       {/*<Route path='/' component={Posts} />*/}
                       {/*<Redirect from='/' to='/posts' />*/}
                   </Switch>

            </div>
        );
    }
}

export default Blog;