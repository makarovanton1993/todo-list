import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delTask, editStatusTask } from '../../redux/slices/taskSlices'
import { TastItemType } from '../../types/types'

import styles from './TaskItem.module.scss'


const TaskItem = ({ name, desc, status, index }: TastItemType) => {

    const [openDesc, setOpenDesc] = useState(false);

    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <input type="checkbox" checked={status} onChange={() => dispatch(editStatusTask({ ind: index, status: status }))} />
            <div className={styles.wrapTask}>
                <div className={`${status && styles.doneTask}`} onClick={() => setOpenDesc(!openDesc)}>
                    Название задачи: {name}
                </div>
                {openDesc &&
                    <div>
                        <p className={styles.description}>
                            Описание задачи
                        </p>
                        {desc}
                    </div>}
                <button className={styles.delTask} onClick={() => dispatch(delTask(index))}>Удалить</button>
            </div>
        </div>
    )
}
export default TaskItem