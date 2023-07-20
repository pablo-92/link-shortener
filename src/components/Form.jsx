/* eslint-disable react/prop-types */
import "../styles/form.css";
import { useForm } from "react-hook-form";

export default function Form(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(props.submit)}>
            <div className="input-container">
                <input
                    className={errors.link ? "form-input error" : "form-input"}
                    style={{
                        border: errors.link ? "3px solid var(--red)" : "",
                    }}
                    type="url"
                    placeholder="https://www.example.com"
                    {...register("link", {
                        required: "Please add a link",
                    })}
                />
                <p className="error-message">{errors.link?.message}</p>
            </div>

            <input
                className="cyan-btn shorten-it"
                type="submit"
                value="Shorten it!"
            />
        </form>
    );
}
