import './DashboardHome.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import FlatList from 'react';
/*
const lesson = [
  {
      id: 1,
      label: 'test1',
      description: 'test description',
      publishDate: '2021-04-07T15:47:52.000Z',
      lastEditedDate: null,
      reputation: 0,
      userId: 1
  },
  {
      id: 2,
      label: 'test4',
      description: 'test description',
      publishDate: '2021-04-07T15:48:41.000Z',
      lastEditedDate: null,
      reputation: 0,
      userId: 1
  },
  {
      id: 3,
      label: 'test3',
      description: 'test description',
      publishDate: '2021-04-07T15:49:58.000Z',
      lastEditedDate: null,
      reputation: 0,
      userId: 1
  },
  {
      id: 4,
      label: 'test2',
      description: 'test description',
      publishDate: '2021-04-07T15:58:59.000Z',
      lastEditedDate: null,
      reputation: 0,
      userId: 1
  },
  {
      id: 5,
      label: 'test22131',
      description: 'test description',
      publishDate: '2021-04-07T15:59:13.000Z',
      lastEditedDate: null,
      reputation: 0,
      userId: 1
  }
];

<ul>
              <FlatList
                list={this.props.lesson}
                renderItem={renderLesson}
                renderWhenEmpty={() => <div>List is empty!</div>}
              />
            </ul>
*/

//<LessonList people={lesson}/>

const renderLesson = (lesson, idx) => {
  <li key={idx}>
    <b>{lesson.label} {lesson.description}</b>
  </li>
}


function DashboardHome() {
  const history = useHistory();
  return <DashboardHomeComp history={history} />;
}

class DashboardHomeComp extends React.Component {
  
  render() {
    return (
      <div className='dashboardHome-root'>
        <h1 className='dashboardHome-title-home'> Bienvenue sur OpenDoc </h1>
          
          <div className='dashboardHome-square sq1'> 
            <h2 className='subTitle'>
              TOP 5 Modules de cours
            </h2>
          </div>
          
          <div className='dashboardHome-square sq2'>
            <h2 className='subTitle'>
              Dernier Modules de cours créé
            </h2>
          </div>
      </div>
    );
  }
}

export default DashboardHome;
