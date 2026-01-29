import { Button } from "@heroui/react";
import { useNavigate } from "react-router";
import { ArrowCircleLeft } from "./icons/vercel";

export function BackButton() {
    const navigate = useNavigate();
    return (
        <Button 
        isIconOnly 
        variant="tertiary"
        aria-label="Go back button"
        onPress={ () => navigate(-1) }>
          <ArrowCircleLeft />
        </Button>
    )
}