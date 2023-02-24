import css from './css/class.module.css'
// import ClassForm from 'components/forms/class-form'
import PageSection from 'components/pageSection'
import ClassForm from 'components/forms/new-class-form'
import { useState } from 'react'
// import { IS_NOT_EMPTY, MAX_LENGTH, EMAIL_ADDRESS } from "../../hooks/useValidation";


export default (props) =>  {
    const [_class, setClass] = useState({
        id: props.id,
        name: 'Class 1',
        color: '#F0A720',
        code: 'KDSK3D',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat, eaque tenetur quia quis modi doloribus sint reprehenderit delectus incidunt aut provident voluptas nulla repellat deleniti accusantium rerum est. Eveniet eius suscipit a rerum, magnam quibusdam. Ut nemo debitis officiis magnam assumenda nulla deserunt a reprehenderit saepe itaque. Vel autem sit praesentium eius nobis tenetur quis porro fugiat adipisci accusamus. Doloribus ipsam dolorem iusto exercitationem nulla sequi nesciunt. Quam enim blanditiis harum tenetur id saepe quaerat impedit, nostrum doloribus voluptatum cumque laboriosam culpa magnam libero mollitia officia facilis eveniet! Aliquid doloremque modi rem quod nostrum sed eveniet odio ut, consequatur ipsam ad perspiciatis soluta, provident quae quas, quam explicabo obcaecati? Reprehenderit neque sint aliquid natus laboriosam quibusdam dolor dolores deserunt nulla fuga. Provident facilis voluptate ea explicabo perspiciatis saepe dignissimos, accusantium ab totam atque sapiente id molestiae minima esse libero mollitia obcaecati deserunt. Incidunt tempore, eos porro sint eligendi aliquam omnis beatae eveniet? Reprehenderit, recusandae obcaecati officiis neque blanditiis nemo molestiae labore eos, nobis quos dignissimos quisquam dolor distinctio provident ipsam, aliquam deserunt at architecto corporis aliquid iusto eaque quis! Rem quibusdam quasi consequatur voluptas quidem quisquam officia, placeat animi quod accusantium quae, et sit unde dicta earum nemo eligendi dicta earum nemo eligendi!',
        invite: 'http://localhost:3000/classes/JK2D8D',
        type: {id: 3, name: 'by invitation'},
        tests: [
            {id: 1, name: 'Test 1', color: '#AC725E'},
            {id: 2, name: 'Test 2', color: '#D06B64'},
            {id: 3, name: 'Test 3', color: '#F83A22'},
            {id: 4, name: 'Test 4', color: '#FF7537'},
            {id: 5, name: 'Test 5', color: '#0388D4'},
        ],
    })

    // const data = {
    //     email: {
    //         label: "Email",
    //         type: "text",
    //         autoComplete: "off",
    //         validation: [IS_NOT_EMPTY("Укажите email"), MAX_LENGTH(50), EMAIL_ADDRESS()]
    //     },
    //     password: {
    //         label: "Пароль",
    //         type: "password",
    //         autoComplete: "off",
    //         validation: [IS_NOT_EMPTY("Укажите пароль")]
    //     }
    // }

    return (
        <PageSection className={css.section}>       
            <ClassForm data={_class} set={setClass} />
            {/* <ClassForm id={props.router.params.id}/> */}
        </PageSection>
    )
}

