import css from './css/test-page.module.css'
import ViewTest from 'components/forms/test-forms/view-test'
import PageSection from 'components/pageSection'
import { useState } from 'react'

export default (props) => {

    const [test, setTest] = useState({
        "name": "Test 1",
        "description": "",
        "time": "",
        "type": {
            "name": "Simple",
            "id": 1
        },
        "questions": [
            {
                "name": "Question 1",
                "answer_type": {
                    "name": "One from list",
                    "id": 2
                },
                "time": 10,
                "answer": [
                    {
                        "value": "Answer 1",
                        "correct": true
                    },
                    {
                        "value": "Answer 2",
                        "correct": false
                    }
                ],
                "required": true,
                "photos":[{"url":"blob:http://localhost:3000/7da7bf6b-8990-46d5-bf44-b68890a1c2b5","info":{"name":"17. Мост.jpg","size":673383,"type":"image/jpeg"}}]
            },
            {
                "name": "Question 2",
                "answer_type": {
                    "name": "Few from list",
                    "id": 3
                },
                "time": "",
                "answer": [
                    {
                        "value": "Answer 1",
                        "correct": true
                    },
                    {
                        "value": "Answer 2",
                        "correct": false
                    },
                    {
                        "value": "Answer 3",
                        "correct": true
                    }
                ],
                "required": false,
                "photos": []
            },
            {
                "name": "Question 3",
                "answer_type": {
                    "name": "Text",
                    "id": 1
                },
                "time": "",
                "answer": "Answer 1",
                "required": false,
                "photos": []
            }
        ]
    })


    return (
        <PageSection className={css.section}>
            <ViewTest data={test}/>
        </PageSection>
            
     

    )
}
