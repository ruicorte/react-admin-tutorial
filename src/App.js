import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export default () => <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} >
  <Resource name='users' list={UserList} icon={UserIcon} />
  <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
</Admin>;
