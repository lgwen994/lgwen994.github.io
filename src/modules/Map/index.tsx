import { type FC, useState } from "react";
import * as S from "./styled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FadeIn } from "@utils/animations/FadeIn";
import LocationMap from "@components/Map/LocationMap.jsx";

/**
 * just for example contact form is setup with
 * @url https://emailjs.com
 */
export const Map: FC = () => {
    const [emailSend, setEmailSend] = useState(false);

    /**
     * Zod schema for form validation
     */
    const schema = z.object({
        name: z.string().min(2, {
            message: "Name should be at least 2 characters",
        }),
        email: z.string().email({
            message: "Please enter a valid email",
        }),
        phone: z.string().min(6, {
            message: "Please enter a valid phone",
        }),
        message: z.string().min(10, {
            message: "Message should be at least 10 characters",
        }),
    });

    /**
     * React hook form setup
     */
    const contactForm = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    /**
     * Submit form function
     * @param {Object} values - form values
     * @returns {Promise<void>}
     * just for example contact form is setup with
     * @url https://emailjs.com
     * you can use any other service or setup your own
     *
     * when you setup your own service
     * remember to store somewhere else data like api keys  to be more secure
     */
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.2}>
                        <LocationMap />
                    </FadeIn>
                </S.ContactBox>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
