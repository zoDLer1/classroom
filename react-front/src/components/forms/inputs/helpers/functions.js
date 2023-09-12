import { getIn } from "formik"

export const shouldUpdateFastField = (props, stateProps) => {

    if (
        props.readOnly !== stateProps.readOnly ||
        props.name !== stateProps.name ||
        getIn(props.formik.values, stateProps.name) !==
        getIn(stateProps.formik.values, stateProps.name) ||
        getIn(props.formik.errors, stateProps.name) !==
        getIn(stateProps.formik.errors, stateProps.name) ||
        getIn(props.formik.touched, stateProps.name) !==
        getIn(stateProps.formik.touched, stateProps.name) ||
        Object.keys(stateProps).length !== Object.keys(props).length ||
        props.formik.isSubmitting !== stateProps.formik.isSubmitting
    ) {
        return true;
    }
    else {
        return false;
    }
}

export const shouldUpdateFastFieldDisabled = (props, stateProps) => {
    if (
        props.disabled !== stateProps.disabled ||
        props.name !== stateProps.name ||
        getIn(props.formik.values, stateProps.name) !==
        getIn(stateProps.formik.values, stateProps.name) ||
        getIn(props.formik.errors, stateProps.name) !==
        getIn(stateProps.formik.errors, stateProps.name) ||
        getIn(props.formik.touched, stateProps.name) !==
        getIn(stateProps.formik.touched, stateProps.name) ||
        Object.keys(stateProps).length !== Object.keys(props).length ||
        props.formik.isSubmitting !== stateProps.formik.isSubmitting
    ) {
        return true;
    }
    else {
        return false;
    }
}