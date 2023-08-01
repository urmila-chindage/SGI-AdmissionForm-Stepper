import { InputController } from "./InputController"

export const Step2 = () => {
    return (
        <>
            <InputController name="address" label="Address" variant="outlined" />
            <InputController name="city" label="City" variant="outlined" />
        </>
    )
}