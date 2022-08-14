import React from 'react'
import { AccessSectionsContainer } from './styles';
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import hover1Img from '/hover-1.svg';



export function AccessSections() {
    const [isHover, setIsHover] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return (

        <motion.div
            initial={false}
            animate={[isLiked ? "liked" : "unliked", isHover ? "hover" : "rest"]}
            whileTap="press"
            variants={buttonVariants}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={() => setIsLiked(!isLiked)}
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <AccessSectionsContainer>
                <img src={isHover ? hover1Img : hover1Img} width={"50px"} height={"50px"} />
                <span>
                    Log in
                </span>
            </AccessSectionsContainer>
        </motion.div>
    );
}


const buttonVariants: Variants = {
    rest: {
        transition: { duration: 0.7 }
    },
    hover: {
        scale: 1.2,
        y: -8
    },
    press: { scale: 1.1 }
};
