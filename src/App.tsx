
import styles from './App.module.scss'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
function App() {


  return (
    <div className={styles.container}>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
