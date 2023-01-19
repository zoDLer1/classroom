import css from './css/test-passing.module.css'
import PageSection from 'components/pageSection'
import TestPassingForm from 'components/forms/test-forms/test-passing-form'
import { useState } from 'react'


export default () =>  {

    
    const [test, setTest] = useState({
        'id': 23423,
        "name": "Test 1",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia explicabo nulla harum at, dolorem saepe nemo illo quod. Ullam aspernatur blanditiis, temporibus error consequuntur laborum nemo asperiores earum reiciendis?",
        "time": "",
        "type": {
            "name": "Simple",
            "id": 1
        },
        "questions": [
            {
                'id': 1,
                "name": "Question 1",
                "answer_type": {
                    "name": "One from list",
                    "id": 2
                },
                "time": 60,
                "answer": [
                    {
                        'id': 1,
                        "value": "Answer 1",
                        'correct': false
                    },
                    {
                        'id': 2,
                        "value": "Answer 2",
                        'correct': false
                    }
                ],
                'answer_time': 0,
                "required": true,
                "photos":[{"url":"https://i.natgeofe.com/n/16801a8a-0d23-4210-80d5-55b9f83df104/pool-glacier.jpg?w=1260&h=840","info":{"name":"17. Мост.jpg","size":673383,"type":"image/jpeg"}}]
            },
            {
                'id': 2,
                "name": "Question 2",
                "answer_type": {
                    "name": "Few from list",
                    "id": 3
                },
                "time": "",
                "answer": [
                    {
                        'id': 3,
                        "value": "Answer 1",
                        'correct': false
                    },
                    {
                        'id': 4,
                        "value": "Answer 2",
                        'correct': false
                    },
                    {
                        'id': 5,
                        "value": "Answer 3",
                        'correct': false
                    }
                ],
                'answer_time': 0,
                "required": false,
                "photos": []
            },
            {
                'id': 3,
                "name": "Question 3",
                "answer_type": {
                    "name": "Text",
                    "id": 1
                },
                'answer_time': 0,
                "time": "",
                "answer": "",
                "required": false,
                "photos": []
            }
        ]
    })

    return (
        <PageSection className={css.section}>
            <TestPassingForm  set={setTest} data={test}/>
        </PageSection>
    )
}
