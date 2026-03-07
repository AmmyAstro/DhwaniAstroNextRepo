"use client";
import { useLanguage } from "@/app/context/LangContext";
export function Healdata() {
const {messages:t} = useLanguage();
    return {
        pranic: {
            firstSection: {
                srcc: "/ds-img/healnw.jpg",
            },
            secondSection: {
                hnm: `${t?.healing?.h1 || "Pranic Healing"}`,
                hdes: "Pranic Healing is a natural, no-touch energy healing technique that aims to balance and harmonize the body's energy. ",
                hul: "Perks of Pranic Healing Session",
                hli1: "Restores Energy Balance",
                hli2: "Reduces Stress & Anxiety",
                hli3: "Boosts Natural Healing",
                hli4: "Improves Sleep Quality",
                hli5: "Cleanses Negative Energies",
                startprice: "1500"
            },
            link: {
                link: "/inHealing/pranic",
            }
        },
        child: {
            firstSection: {
                srcc: "/ds-img/healnw2.png",
            },
            secondSection: {
                hnm: `${t?.healing?.h2 || "Child Birth Healing"}`,
                hdes: "Pregnancy Healing helps you recover from a tough or long  birth by improving your physical and emotional well-being.",
                hul: "Perks of Child Birth Healing Session",
                hli1: "Promotes emotional recovery.",
                hli2: "Supports hormonal balance.",
                hli3: "Reduces anxiety.",
                hli4: "Enhances mother-child bonding.",
                hli5: "Restores overall vitality.",
                startprice: "999"
            },
            link: {
                link: "/inHealing/child",
            }
        },


        legalmatter: {
            firstSection: {
                srcc: "/ds-img/healnw3.jpg",
            },
            secondSection: {
                hnm: `${t?.healing?.h3 || "Legal Matters Healing"}`,
                hdes: "Legal Matters Healing is a specialized energy healing approach aimed at reducing emotional distress, fear, and negativity associated with legal conflicts. It works by cleansing the energy field of stress, anxiety, and karmic blocks that may be influencing the situation, promoting mental clarity, emotional stability, and attracting favorable outcomes through positive energy alignment.",
                hul: " Perks of Legal Matters Healing Session",
                hli1: "Reduces stress and anxiety linked to legal issues",
                hli2: "Promotes mental clarity for better decision-making",
                hli3: "Clears negative energy and karmic blockages",
                hli4: "Enhances confidence and emotional resilience",
                hli5: "Attracts positive energy for favorable outcomes",
                startprice: "999"
            },
            link: {
                link: "/inHealing/legalmatter",
            }
        },

        prosperity: {
            firstSection: {
                srcc: "/ds-img/healnw4.png",
            },
            secondSection: {
                hnm: `${t?.healing?.h4 || "Prosperity Healing"}`,
                hdes: "Prosperity Healing is an energy-based healing technique focused on removing energetic blockages related to wealth, success, and abundance. It helps align your thoughts, emotions, and energy with the vibration of prosperity, clearing limiting beliefs and attracting financial growth, opportunities, and overall well-being.",
                hul: " Perks of Prosperity Healing Session",
                hli1: "Clears limiting beliefs around money and success",
                hli2: "Attracts abundance and financial opportunities",
                hli3: "Enhances focus and motivation toward goals",
                hli4: "Balances energy centers linked to wealth flow",
                hli5: "Promotes a mindset of gratitude and growth",
                startprice: "700"
            },
            link: {
                link: "/inHealing/prosperity",
            }
        },
        career: {
            firstSection: {
                srcc: "/ds-img/healnw5.png",
            },
            secondSection: {
                hnm: `${t?.healing?.h5 || "Career Healing"}`,
                hdes: "Career Healing is a focused energy healing technique that helps release mental blocks, self-doubt, and negative patterns affecting your professional growth. It aligns your energy with clarity, confidence, and purpose—supporting better decision-making, attracting new opportunities, and creating a fulfilling career path.",
                hul: " Perks of Career Healing Session",
                hli1: "Clears mental blocks and fear of failure",
                hli2: "Boosts confidence and career motivation",
                hli3: "Attracts new job and growth opportunities",
                hli4: "Enhances clarity in professional decision-making",
                hli5: "Aligns energy with long-term career goals",
                startprice: "999"
            },
            link: {
                link: "/inHealing/career",
            }
        },
        medical: {
            firstSection: {
                srcc: "/ds-img/healnw6.png",
            },
            secondSection: {
                hnm: `${t?.healing?.h6 || "Medical Healing"}`,
                hdes: "Medical Healing is an energy-based support system that complements conventional medical treatments by accelerating the body's natural healing processes. It works by cleansing diseased energy, strengthening the aura, and promoting overall vitality—helping the body recover more effectively from illness, surgery, or chronic conditions.",
                hul: " Perks of Medical Healing Session",
                hli1: "Strengthens the body's natural healing ability",
                hli2: "Reduces pain, fatigue, and emotional stress",
                hli3: "Supports immune system and energy levels",
                hli4: "Complements ongoing medical treatments",
                hli5: "Accelerates recovery from illness or surgery",
                startprice: "700"
            },
            link: {
                link: "/inHealing/medical",
            }
        },
        angel: {
            firstSection: {
                srcc: "/ds-img/healnw7.jpg",
            },
            secondSection: {
                hnm: `${t?.healing?.h7 || "Angel Healing"}`,
                hdes: "Angel Healing is a gentle spiritual healing method that involves calling upon divine angelic beings for guidance, protection, and emotional healing. It helps clear negative energies, restore inner peace, and bring comfort, clarity, and hope by connecting you with higher vibrations of love and light.",
                hul: " Perks of Angel Healing Session",
                hli1: "Promotes deep emotional healing and inner peace",
                hli2: "Enhances spiritual connection and intuition",
                hli3: "Helps release negative energy and stress",
                hli4: "Supports physical and mental relaxation",
                hli5: "Encourages positive energy flow and balance",
                startprice: "999"
            },
            link: {
                link: "/inHealing/angel",
            }
        },
        relation: {
            firstSection: {
                srcc: "/ds-img/healnw8.jpg",
            },
            secondSection: {
                hnm: `${t?.healing?.h8 || "Relationship Healing"}`,
                hdes: "A Relationship Healing Session helps to mend emotional wounds and restore harmony between partners. It promotes open communication, fosters forgiveness, and deepens understanding, allowing couples to reconnect on a heartfelt level. By releasing past hurts and negative patterns, these sessions create space for renewed trust, love, and emotional balance, supporting healthier and more fulfilling relationships.",
                hul: " Perks of Relationship Healing Session",
                hli1: "Helps resolve emotional conflicts and misunderstandings",
                hli2: "Strengthens communication and trust between partners",
                hli3: "Releases past hurts and negative relationship patterns",
                hli4: "Encourages forgiveness and emotional healing",
                hli5: "Promotes deeper connection and lasting harmony",
                startprice: "900"
            },
            link: {
                link: "/inHealing/relation",
            }
        },
        chakra: {
            firstSection: {
                srcc: "/ds-img/healnw9.jpg",
            },
            secondSection: {
                hnm: `${t?.healing?.h9 || "Chakra Healing"}`,
                hdes: "Chakra Healing Sessions help balance and align the body’s energy centers, promoting overall physical, emotional, and spiritual well-being. By clearing blockages in the chakras, these sessions enhance energy flow, reduce stress, and improve mental clarity. They support emotional release, boost vitality, and foster a sense of inner harmony and peace.",
                hul: " Perks of Chakra Healing Session",
                hli1: "Balances and aligns the body’s energy centers",
                hli2: "Clears energy blockages for improved flow",
                hli3: "Enhances emotional stability and mental clarity",
                hli4: "Reduces stress and promotes relaxation",
                hli5: "Boosts overall vitality and inner harmony",
                startprice: "999"
            },
            link: {
                link: "/inHealing/chakra",
            }
        },
        reiki: {
            firstSection: {
                srcc: "/ds-img/healnw10.jpg",
            },
            secondSection: {
                hnm: `${t?.healing?.h10 || "Reiki Healing"}`,
                hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
                hul: " Perks of Reiki Healing Session",
                hli1: "Promotes deep relaxation and stress relief",
                hli2: "Supports natural healing of physical and emotional issues",
                hli3: "Balances energy flow throughout the body",
                hli4: "Enhances mental clarity and emotional calmness",
                hli5: "Boosts overall sense of well-being and harmony",
                startprice: "999"
            },
            link: {
                link: "/inHealing/reiki",
            }
        },
        birth: {
            firstSection: {
                srcc: "/ds-img/ser6.webp",
            },
            secondSection: {
                hnm: `${t?.healing?.h11 || "Birth Healing"}`,
                hdes: "Birth Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
                hul: " Perks of Birth Healing Session",
                hli1: "Promotes deep relaxation and stress relief",
                hli2: "Supports natural healing of physical and emotional issues",
                hli3: "Balances energy flow throughout the body",
                hli4: "Enhances mental clarity and emotional calmness",
                startprice: "999"
            },
            link: {
                link: "/inHealing/birth",
            }
        },
        faceread: {
            firstSection: {
                srcc: "/ds-img/ser3.webp",
            },
            secondSection: {
                hnm: `${t?.healing?.h12 || "Face Reading"}`,
                hdes: "Face Reading is an ancient practice that interprets facial features and expressions to gain insights into a person's personality, emotions, and life experiences. It helps individuals understand themselves better and enhances their interpersonal relationships.",
                hul: " Perks of Face Reading Session",
                hli1: "Promotes deep relaxation and stress relief",
                hli2: "Supports natural healing of physical and emotional issues",
                hli3: "Balances energy flow throughout the body",
                hli4: "Enhances mental clarity and emotional calmness",
                startprice: "999"
            },
            link: {
                link: "/inHealing/faceread",
            }
        },
        pastlife: {
            firstSection: {
                srcc: "/ds-img/ser4.webp",
            },
            secondSection: {
                hnm: `${t?.healing?.h13 || "Past Life Regression"}`,
                hdes: "Past Life Regression is a therapeutic technique that uses guided imagery and hypnosis to help individuals access memories from their past lives. It aims to uncover unresolved issues and promote healing by understanding the root causes of present-life challenges.",
                hul: " Perks of Past Life Regression Session",
                hli1: "Promotes deep relaxation and stress relief",
                hli2: "Supports natural healing of physical and emotional issues",
                hli3: "Balances energy flow throughout the body",
                hli4: "Enhances mental clarity and emotional calmness",
                startprice: "999"
            },
            link: {
                link: "/inHealing/pastlife",
            }
        },
        pendulum: {
            firstSection: {
                srcc: "/ds-img/ser7.webp",
            },
            secondSection: {
                hnm: `${t?.healing?.h14 || "Pendulum Healing"}`,
                hdes: "Pendulum Healing is a holistic therapy that uses a pendulum to detect and balance energy imbalances in the body. It helps to clear blockages, reduce stress, and promote overall well-being.",
                hul: " Perks of Pendulum Healing Session",
                hli1: "Promotes deep relaxation and stress relief",
                hli2: "Supports natural healing of physical and emotional issues",
                hli3: "Balances energy flow throughout the body",
                hli4: "Enhances mental clarity and emotional calmness",
                startprice: "999"
            },
            link: {
                link: "/inHealing/pendulum",
            }
        },
        // feng: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Feng-Shui Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // crystal: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Crystal Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // veda: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Ayurveda Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // shamanic: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Shamanic Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // theta: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Theta Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // infinity: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Infinity Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // hypnosis: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Hypnosis Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // energy: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Energy Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // sound: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Sound Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // },
        // faith: {
        //     firstSection: {
        //         srcc: "/ds-img/healnw10.jpg",
        //     },
        //     secondSection: {
        //         hnm: "Faith Healing",
        //         hdes: "Reiki Healing is a gentle, hands-on energy healing technique that channels universal life force energy to promote physical, emotional, and spiritual well-being. It helps to reduce stress, alleviate pain, and accelerate the body’s natural healing process.",
        //         hul: " Perks of Reiki Healing Session",
        //         hli1: "Promotes deep relaxation and stress relief",
        //         hli2: "Supports natural healing of physical and emotional issues",
        //         hli3: "Balances energy flow throughout the body",
        //         hli4: "Enhances mental clarity and emotional calmness",
        //         hli5: "Boosts overall sense of well-being and harmony",
        //         startprice: "2000"
        //     },
        // }
    }
}




