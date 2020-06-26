import * as React from "react";
import { Admin, Resource/* , EditGuesser *//* , ListGuesser */ } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export default () => <Admin dataProvider={dataProvider} >
  {/* <Resource name='posts' list={PostList} edit={PostEdit} /> */}
  <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
  <Resource name='users' list={UserList} />
</Admin>;

// export default App;
