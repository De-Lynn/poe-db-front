// import { useForm } from "react-hook-form";

interface FormShape {
    name: string;
    languages: string[];
}

// const schema: yup.SchemaOf<FormShape> = yup
// .object({
//     name: yup.string().max(100).required(),
//     languages: yup.array().min(1),
// })
// .required();

// const ComboboxPage: NextPage = () => {
const ComboboxPage = () => {
    // const {
    //     handleSubmit,
    //     register,
    //     control,
    //     formState: { errors },
    // } = useForm<FormShape>({
    //     mode: "onSubmit",
    //     // resolver: yupResolver(schema),
    //     defaultValues: {
    //         languages: [],
    //     },
    // });

    return (
        // <DemoPage title="Combobox" youtubeVideoId="iZGQE3-pqpg">
            // <Panel width={400}>
                // <TitledSection title="Who are You?">
                    // <Form
                    //     content={
                            <>
                                {/* <TextInput
                                    label="Full name"
                                    {...register("name")}
                                    error={errors.name?.message}
                                    autoFocus
                                    placeholder="John Johnson"
                                />
                                <Controller
                                    control={control}
                                    name="languages"
                                    render={({ field: { value, onChange, ref } }) => (
                                        <LanguagesInput
                                            value={value}
                                            onChange={onChange}
                                            ref={ref}
                                            error={errors.languages?.message}
                                        />
                                    )}
                                /> */}
                            </>
                    //     }
                    //     onSubmit={handleSubmit(console.log)}
                    //     actions={<SubmitFormButton text="Submit" />}
                    // />
                // </TitledSection>
            // </Panel>
        // </DemoPage>
    );
};

export default ComboboxPage;