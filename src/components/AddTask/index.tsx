import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, delTask, tasks } from '../../redux/slices/taskSlices'
import styles from './AddTask.module.scss'
const AddTask = () => {
    const dispatch = useDispatch()
    const [newNameTask, setNewNameTask] = useState('');
    const [newDescTask, setNewDescTask] = useState('');
    const [fillTask, setFillTask] = useState(false);
    const addTaskItem = () => {
        if (fillTask) {
            const newItem = {
                name: newNameTask,
                desc: newDescTask,
                status: false
            }
            dispatch(addTask(newItem))
            setNewNameTask('');
            setNewDescTask('');
        }
    }
    useEffect(() => {
        newNameTask && newDescTask ? setFillTask(true) : setFillTask(false);
    }, [newNameTask, newDescTask])

    return (
        <div className={styles.container}>
            <div className={styles.containerInput}>
                <div className={styles.containerInputNameTask}>
                    <input className={styles.inputAddTaskName} value={newNameTask} onChange={(e) => setNewNameTask(e.target.value)} type="text" placeholder='Введите Имя задачи' />
                    {newNameTask && <button className={styles.clearInputAddTask} onClick={() => { setNewNameTask('') }}>x</button>}
                </div>
                <div className={styles.containerInputDescTask}>
                    <input className={styles.inputAddTaskDesc} value={newDescTask} onChange={(e) => setNewDescTask(e.target.value)} type="text" placeholder='Введите Полное Описание задачи' />
                    {newDescTask && <button className={styles.clearInputAddTask} onClick={() => { setNewDescTask('') }}>x</button>}
                </div>
            </div>
            <button className={` ${fillTask ? styles.btnAddTaskVisible : styles.btnAddTaskHidden}`} onClick={addTaskItem}>Добавить</button>

        </div >
    )
}

export default AddTask