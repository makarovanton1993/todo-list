import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { tasks } from '../../redux/slices/taskSlices'
import TaskItem from '../TaskItem'
import styles from './TaskList.module.scss'

type TastItemType = {
    name: string,
    desc: string,
    status: boolean
}


const TaskList = () => {
    const { taskList } = useSelector(tasks);
    return (
        <div className={styles.container}>
            {taskList && taskList.map((item: TastItemType, index: number) => <TaskItem {...item} index={index} key={index} />)}
        </div>
    )
}

export default TaskList