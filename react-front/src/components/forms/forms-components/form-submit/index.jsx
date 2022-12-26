export default (props) => {
    return (
        <div class="form__input-submit">
            <input id="submit" hidden type="submit"/>
            <label for="submit">{props.text}</label>
        </div>
    )
}